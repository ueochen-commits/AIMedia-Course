import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";

// XorPay 配置
const AID = "703723";
const APP_SECRET = "10b1cec33b32449288251576760ce52c";
const NOTIFY_URL = "https://lurenclass.com/api/payment/callback";

// 生成签名
function generateSign(params: {
  name: string;
  pay_type: string;
  price: string;
  order_id: string;
  notify_url: string;
}): string {
  const signString =
    params.name +
    params.pay_type +
    params.price +
    params.order_id +
    params.notify_url +
    APP_SECRET;
  return md5(signString).toString();
}

// 创建支付订单
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price, order_id, courseId, userId } = body;

    // 构建请求参数
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("pay_type", "alipay");
    params.append("price", price.toFixed(2));
    params.append("order_id", order_id);
    params.append("notify_url", NOTIFY_URL);
    // 订单附加信息（回调时原样返回）
    params.append("more", JSON.stringify({ courseId, userId }));
    // 签名
    params.append("sign", generateSign({
      name,
      pay_type: "alipay",
      price: price.toFixed(2),
      order_id,
      notify_url: NOTIFY_URL,
    }));

    // 调用 XorPay API
    const response = await fetch(`https://xorpay.com/api/pay/${AID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const result = await response.json();

    if (result.status === "ok") {
      return NextResponse.json({
        success: true,
        order_id,
        qr: result.info.qr,
        aoid: result.aoid,
        expires_in: result.expire_in,
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.status,
        message: result.info || "支付创建失败",
      });
    }
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json(
      { success: false, error: "system_error", message: "系统错误" },
      { status: 500 }
    );
  }
}

// 查询订单状态
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const order_id = searchParams.get("order_id");

  if (!order_id) {
    return NextResponse.json({ success: false, error: "missing_order_id" });
  }

  // 使用 XorPay 的查询接口
  const sign = md5(order_id + APP_SECRET).toString();
  const queryUrl = `https://xorpay.com/api/query2/${AID}?order_id=${order_id}&sign=${sign}`;

  try {
    const response = await fetch(queryUrl);
    const result = await response.json();

    return NextResponse.json({
      success: true,
      status: result.status,
    });
  } catch (error) {
    console.error("Query error:", error);
    return NextResponse.json({ success: false, error: "query_failed" });
  }
}