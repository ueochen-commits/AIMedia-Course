"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 忘记密码模式
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isForgotPassword) {
        // 忘记密码 - 发送重置邮件
        if (!email) {
          throw new Error("请输入邮箱地址");
        }
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/login?reset=true`,
        });
        if (error) throw error;
        setSuccess("重置链接已发送到你的邮箱，请查收并点击链接重置密码");
      } else if (isLogin) {
        // 登录
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        // 确保用户在自定义 users 表中存在
        const { data: existingUser } = await supabase
          .from("users")
          .select("id")
          .eq("email", email)
          .single();

        if (!existingUser) {
          await supabase.from("users").insert({ email });
        }

        router.push("/user");
      } else {
        // 注册
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;

        // 添加到自定义 users 表
        await supabase.from("users").insert({ email });

        setSuccess("注册成功！请查看邮箱验证，然后登录。");
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.message || "操作失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-16">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {isForgotPassword ? "找回密码" : isLogin ? "登录" : "注册"}
          </h1>
          <p className="text-[#666]">
            {isForgotPassword ? "输入邮箱地址找回密码" : isLogin ? "欢迎回来" : "创建你的账号"}
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">邮箱</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 pl-10 border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#1A1A2E]"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {!isForgotPassword && (
              <div>
                <label className="block text-sm font-medium mb-2">密码</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 pl-10 pr-10 border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#1A1A2E]"
                    placeholder="至少6位"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#1A1A2E]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            {isLogin && !isForgotPassword && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setIsForgotPassword(true)}
                  className="text-sm text-[#666] hover:text-[#1A1A2E]"
                >
                  忘记密码？
                </button>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 text-green-500 text-sm">
                <CheckCircle className="w-4 h-4" />
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "处理中..." : isForgotPassword ? "发送重置链接" : isLogin ? "登录" : "注册"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {isForgotPassword ? (
            <div className="mt-6 text-center text-sm text-[#666]">
              <button
                onClick={() => {
                  setIsForgotPassword(false);
                  setError("");
                  setSuccess("");
                }}
                className="text-[#1A1A2E] font-medium"
              >
                返回登录
              </button>
            </div>
          ) : (
            <div className="mt-6 text-center text-sm text-[#666]">
              {isLogin ? (
                <span>
                  还没有账号？{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-[#1A1A2E] font-medium"
                  >
                    立即注册
                  </button>
                </span>
              ) : (
                <span>
                  已有账号？{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-[#1A1A2E] font-medium"
                  >
                    立即登录
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* 微信咨询 */}
        <div className="mt-6 p-4 bg-[#F7F6F3] rounded-lg text-center">
          <p className="text-sm text-[#666] mb-2">
            支付遇到问题？微信咨询
          </p>
          <p className="font-medium">Timetravel_0</p>
          <p className="text-xs text-[#666]">（备注"课程"）</p>
        </div>

        {!isForgotPassword && (
          <p className="text-center text-xs text-[#666] mt-6">
            注册后系统会发送验证邮件到你的邮箱
          </p>
        )}
      </div>
    </div>
  );
}