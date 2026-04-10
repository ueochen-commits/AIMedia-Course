import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { UserMenu } from "@/components/UserMenu";

export const metadata: Metadata = {
  title: "一人公司 - AI创业平台",
  description: "从零到用AI做AI产品 + 自媒体推广 = 一人公司。体系化的AI入门与自媒体创业学习路径",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col scroll-smooth">
        {/* Navigation */}
        <nav className="sticky top-0 bg-white border-b border-[#E8E8E8] z-50">
          <div className="container h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition">
              一人公司
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/courses" className="text-[#666] hover:text-[#1A1A2E] transition">
                课程
              </Link>
              <Link href="/about" className="text-[#666] hover:text-[#1A1A2E] transition">
                关于
              </Link>
              <UserMenu />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-[#E8E8E8] py-12 mt-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="font-semibold mb-4">AI自媒体课程</div>
                <p className="text-[#666] text-sm">
                  体系化的AI入门与自媒体创业学习路径
                </p>
              </div>
              <div>
                <div className="font-semibold mb-4">快速链接</div>
                <div className="flex flex-col gap-2 text-sm text-[#666]">
                  <Link href="/courses">课程列表</Link>
                  <Link href="/about">关于创始人</Link>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-4">联系方式</div>
                <p className="text-[#666] text-sm">
                  微信：Timetravel_0<br />
                  公众号：Hello我是路人
                </p>
              </div>
            </div>
            <div className="border-t border-[#E8E8E8] mt-8 pt-8 text-center text-sm text-[#666]">
              © 2026 AI自媒体课程. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}