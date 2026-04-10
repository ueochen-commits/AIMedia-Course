import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
import { supabase } from "@/lib/supabase";

const APP_SECRET = "10b1cec33b32449288251576760ce52c";

// 验证回调签名
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

// 支付回调
export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    const aoid = body.get("aoid") as string;
    const order_id = body.get("order_id") as string;
    const pay_price = body.get("pay_price") as string;
    const pay_time = body.get("pay_time") as string;
    const more = body.get("more") as string;
    const sign = body.get("sign") as string;

    // 验证签名
    if (!verifySign({ aoid, order_id, pay_price, pay_time, sign })) {
      console.error("Invalid sign in payment callback");
      return NextResponse.json("sign_error", { status: 400 });
    }

    // 解析订单附加信息
    let courseId = "";
    let userId = "";
    if (more) {
      try {
        const moreData = JSON.parse(more);
        courseId = moreData.courseId || "";
        userId = moreData.userId || "";
      } catch (e) {
        console.error("Failed to parse more:", e);
      }
    }

    // 保存购买记录到数据库
    if (userId && courseId) {
      // 检查是否已存在购买记录
      const { data: existing } = await supabase
        .from("purchases")
        .select("*")
        .eq("order_id", order_id)
        .single();

      if (!existing) {
        await supabase.from("purchases").insert({
          user_id: userId,
          course_id: courseId,
          amount: parseFloat(pay_price),
          order_id: order_id,
          aoid: aoid,
          payment_status: "completed",
          paid_at: pay_time,
        });
      }
    }

    return NextResponse.json("ok");
  } catch (error) {
    console.error("Payment callback error:", error);
    return NextResponse.json("error", { status: 500 });
  }
}