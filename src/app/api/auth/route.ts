import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password, isLogin } = await request.json();

    // TODO: 集成 Supabase Auth
    // 这里暂时返回模拟数据
    if (!email || !password) {
      return NextResponse.json(
        { error: "请提供邮箱和密码" },
        { status: 400 }
      );
    }

    // 模拟处理
    return NextResponse.json({
      success: true,
      message: isLogin ? "登录成功" : "注册成功，请检查邮箱验证",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "处理失败" },
      { status: 500 }
    );
  }
}