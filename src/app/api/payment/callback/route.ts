import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
import { createClient } from "@supabase/supabase-js";

const APP_SECRET = process.env.XORPAY_APP_SECRET!;

// 使用 service role key 的服务端 client，绕过 RLS（懒初始化，避免构建时报错）
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

function verifySign(params: {
  aoid: string;
  order_id: string;
  pay_price: string;
  pay_time: string;
  sign: string;
}): boolean {
  const signString =
    params.aoid + params.order_id + params.pay_price + params.pay_time + APP_SECRET;
  const expectedSign = md5(signString).toString();
  return expectedSign === params.sign;
}

export async function POST(request: NextRequest) {
  const supabaseAdmin = getSupabaseAdmin();
  try {
    const body = await request.formData();
    const aoid = body.get("aoid") as string;
    const order_id = body.get("order_id") as string;
    const pay_price = body.get("pay_price") as string;
    const pay_time = body.get("pay_time") as string;
    const more = body.get("more") as string;
    const sign = body.get("sign") as string;

    console.log("Payment callback received:", { order_id, aoid, pay_price, more });

    // 验证签名
    if (!verifySign({ aoid, order_id, pay_price, pay_time, sign })) {
      console.error("Invalid sign in payment callback");
      return NextResponse.json("sign_error", { status: 400 });
    }

    // 解析订单附加信息
    let courseId = "";
    let userEmail = "";
    if (more) {
      try {
        const moreData = JSON.parse(more);
        courseId = moreData.courseId || "";
        userEmail = moreData.userId || "";
        console.log("Parsed more data:", { courseId, userEmail });
      } catch (e) {
        console.error("Failed to parse more:", e);
      }
    }

    // 通过 Auth Admin API 查找用户真实的 auth.uid()
    let userId: string | null = null;
    if (userEmail && userEmail !== "guest") {
      // 用 Admin API 按 email 查找 Supabase Auth 用户，获取真实 auth.uid()
      const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
      if (listError) {
        console.error("Failed to list auth users:", listError);
      } else {
        const authUser = users.find((u) => u.email === userEmail);
        if (authUser) {
          userId = authUser.id;
          console.log("Found auth user:", userId);

          // 确保 users 表中有对应记录（用 auth.uid() 作为 id）
          const { data: existingUser } = await supabaseAdmin
            .from("users")
            .select("id")
            .eq("id", userId)
            .single();

          if (!existingUser) {
            await supabaseAdmin.from("users").insert({ id: userId, email: userEmail });
            console.log("Created users table record for:", userId);
          }
        } else {
          console.error("No auth user found for email:", userEmail);
        }
      }
    }

    // 保存购买记录
    if (userId && courseId) {
      // 防重复
      const { data: existing } = await supabaseAdmin
        .from("purchases")
        .select("id")
        .eq("order_id", order_id)
        .single();

      if (!existing) {
        const { error: insertError } = await supabaseAdmin.from("purchases").insert({
          user_id: userId,
          course_id: courseId,
          amount: parseFloat(pay_price),
          order_id: order_id,
          aoid: aoid,
          payment_status: "completed",
          paid_at: pay_time,
        });

        if (insertError) {
          console.error("Failed to insert purchase:", insertError);
        } else {
          console.log("Purchase record created successfully for user:", userId);
        }
      } else {
        console.log("Purchase already exists for order:", order_id);
      }
    } else {
      console.error("Missing userId or courseId:", { userId, courseId, userEmail });
    }

    return NextResponse.json("ok");
  } catch (error) {
    console.error("Payment callback error:", error);
    return NextResponse.json("error", { status: 500 });
  }
}
