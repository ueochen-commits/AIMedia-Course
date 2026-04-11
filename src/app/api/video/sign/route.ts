import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

// 腾讯云点播配置 — 开通后填入，并移至 .env.local
const VOD_SECRET_ID = process.env.TENCENT_VOD_SECRET_ID || "";
const VOD_SECRET_KEY = process.env.TENCENT_VOD_SECRET_KEY || "";
const VOD_APP_ID = process.env.TENCENT_VOD_APP_ID || "";

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

// 播放密钥（来自腾讯云点播控制台 → 分发播放设置 → 默认分发配置）
const VOD_PLAY_KEY = process.env.TENCENT_VOD_PLAY_KEY || "Slz2ha4ehmXPCmjd0VrB";

// 生成腾讯云点播 psign 播放签名（标准 JWT 格式）
// 文档：https://cloud.tencent.com/document/product/266/42436
function generatePsign(fileId: string): string {
  const currentTime = Math.floor(Date.now() / 1000);
  const expireTime = currentTime + 86400;

  // Header
  const header = { alg: "HS256", typ: "JWT" };
  const headerB64 = Buffer.from(JSON.stringify(header)).toString("base64url");

  // Payload — contentInfo 必填，使用 Original 播放原始视频
  const payload = {
    appId: Number(VOD_APP_ID),
    fileId: fileId,
    contentInfo: {
      audioVideoType: "Original",
    },
    currentTimeStamp: currentTime,
    expireTimeStamp: expireTime,
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");

  // Signature = HMACSHA256(header.payload, 播放密钥)
  const signInput = `${headerB64}.${payloadB64}`;
  const signature = crypto
    .createHmac("sha256", VOD_PLAY_KEY)
    .update(signInput)
    .digest("base64url");

  return `${headerB64}.${payloadB64}.${signature}`;
}

export async function GET(request: NextRequest) {
  // 1. 检查腾讯云配置是否已填入
  if (!VOD_SECRET_ID || !VOD_SECRET_KEY || !VOD_APP_ID) {
    return NextResponse.json(
      { error: "tencent_vod_not_configured", message: "腾讯云点播尚未配置" },
      { status: 503 }
    );
  }

  // 2. 获取参数
  const { searchParams } = new URL(request.url);
  const lessonId = searchParams.get("lesson_id");

  if (!lessonId) {
    return NextResponse.json({ error: "missing_lesson_id" }, { status: 400 });
  }

  // 3. 验证用户登录（从 Authorization header 取 token）
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  const supabaseAdmin = getSupabaseAdmin();

  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
  if (authError || !user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // 4. 查询 lesson 信息
  const { data: lesson, error: lessonError } = await supabaseAdmin
    .from("lessons")
    .select("id, course_id, tencent_file_id, is_free")
    .eq("id", lessonId)
    .single();

  if (lessonError || !lesson) {
    return NextResponse.json({ error: "lesson_not_found" }, { status: 404 });
  }

  if (!lesson.tencent_file_id) {
    return NextResponse.json({ error: "video_not_ready", message: "视频尚未上传" }, { status: 404 });
  }

  // 5. 免费课时直接返回签名，付费课时验证购买记录
  if (!lesson.is_free) {
    const courseId = lesson.course_id;
    const { data: purchase } = await supabaseAdmin
      .from("purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("payment_status", "completed")
      .or(`course_id.eq.${courseId},course_id.eq.full`)
      .single();

    if (!purchase) {
      return NextResponse.json({ error: "not_purchased", message: "请先购买课程" }, { status: 403 });
    }
  }

  // 6. 生成播放签名
  const psign = generatePsign(lesson.tencent_file_id);

  return NextResponse.json({
    file_id: lesson.tencent_file_id,
    app_id: Number(VOD_APP_ID),
    psign,
  });
}
