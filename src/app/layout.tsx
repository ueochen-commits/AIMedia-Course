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
        <link href="https://cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.css" rel="stylesheet" />
        <script src="https://vod-tool.vod-qcloud.com/dist/static/js/tcplayer.v4.9.1.min.js"></script>
      </head>
      <body className="min-h-screen flex flex-col scroll-smooth">
        {/* Navigation */}
        <nav className="sticky top-0 bg-white border-b border-[#E8E8E8] z-50">
          <div className="container h-16 flex items-center justify-between">
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "11px", cursor: "pointer" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                  <img src="/logo.png" alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#18181b", letterSpacing: "-0.3px", lineHeight: 1, marginBottom: "3px" }}>一人公司训练营</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#615d59", background: "#e8e6e3", padding: "1px 6px", borderRadius: "2px", fontWeight: 500, letterSpacing: "0.04em" }}>AI · 自媒体 · 变现</span>
                    <span style={{ fontSize: "10px", color: "#a39e98" }}>by Hello我是路人</span>
                  </div>
                </div>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <div>
                <div className="font-semibold mb-4">扫码关注</div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <div style={{ textAlign: "center" }}>
                    <img src="/个人微信二维码.jpg" alt="个人微信" style={{ width: "72px", height: "72px", borderRadius: "6px", border: "0.5px solid rgba(0,0,0,0.08)", objectFit: "cover" }} />
                    <div style={{ fontSize: "11px", color: "#999", marginTop: "5px" }}>个人微信</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img src="/公众号二维码.png" alt="公众号" style={{ width: "72px", height: "72px", borderRadius: "6px", border: "0.5px solid rgba(0,0,0,0.08)", objectFit: "cover" }} />
                    <div style={{ fontSize: "11px", color: "#999", marginTop: "5px" }}>公众号</div>
                  </div>
                </div>
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