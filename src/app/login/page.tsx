"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 模拟登录/注册（后续需要集成 Supabase Auth）
      console.log("Submit:", { email, password, isLogin });

      // 模拟成功
      setTimeout(() => {
        router.push("/user");
      }, 1000);
    } catch (err) {
      setError("操作失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-16">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {isLogin ? "登录" : "注册"}
          </h1>
          <p className="text-[#666]">
            {isLogin ? "欢迎回来" : "创建你的账号"}
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">邮箱</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#1A1A2E]"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#1A1A2E]"
                placeholder="至少6位"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full disabled:opacity-50"
            >
              {loading ? "处理中..." : isLogin ? "登录" : "注册"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-[#666]">
            {isLogin ? (
              <>
                还没有账号？{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-[#1A1A2E] font-medium"
                >
                  立即注册
                </button>
              </>
            ) : (
              <>
                已有账号？{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-[#1A1A2E] font-medium"
                >
                  立即登录
                </button>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[#666] mt-6">
          注册后系统会发送验证邮件到你的邮箱
        </p>
      </div>
    </div>
  );
}