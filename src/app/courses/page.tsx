import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      id: "ai",
      name: "AI 板块",
      description: "从零基础到用AI开发产品，独立掌握AI工具并具备产品开发能力",
      modules: 4,
      lessons: 20,
      features: ["科学上网、ChatGPT、Claude", "提示词工程、AI写作/图片/视频", "Obsidian知识库", "Vibe Coding开发产品"],
    },
    {
      id: "media",
      name: "自媒体板块",
      description: "从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系",
      modules: 4,
      lessons: 18,
      features: ["一人公司认知、差异化定位", "爆款内容创作方法论", "运营增长策略", "变现实战"],
    },
  ];

  return (
    <div>
      <section className="py-12">
        <div className="container">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-[#999] mb-8">
            <Link href="/" className="hover:text-[#1A1A2E] transition-colors">首页</Link>
            <span className="text-[#DDD]">/</span>
            <span className="text-[#1A1A2E] font-medium">课程</span>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* 标题区域 */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-[#1A1A2E] mb-3">课程列表</h1>
              <p className="text-lg text-[#666]">选择你感兴趣的板块，开始学习</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AI 板块 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EDE8] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A1A2E]/8" style={{ boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)' }}>
                <div className="p-6 border-b border-[#F0EDE8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl font-bold">
                      AI
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-white">AI 板块</h2>
                      <p className="text-white/70 text-sm">4模块 · 20节课程</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[#666] mb-5">
                    从零基础到用AI开发产品，掌握主流AI工具，具备Vibe Coding能力
                  </p>

                  <div className="space-y-3 mb-6">
                    {courses[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded bg-green-50 text-green-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-[#1A1A2E] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE8]">
                    <div className="text-2xl font-bold text-[#1A1A2E]">¥499</div>
                    <Link href="/courses/ai" className="flex items-center gap-2 text-[#1A1A2E] font-medium hover:text-[#4A4A6A] transition-colors">
                      查看详情 <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 自媒体板块 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EDE8] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A1A2E]/8" style={{ boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)' }}>
                <div className="p-6 border-b border-[#F0EDE8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl font-bold">
                      自媒
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-white">自媒体板块</h2>
                      <p className="text-white/70 text-sm">4模块 · 18节课程</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[#666] mb-5">
                    从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系
                  </p>

                  <div className="space-y-3 mb-6">
                    {courses[1].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded bg-green-50 text-green-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-[#1A1A2E] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE8]">
                    <div className="text-2xl font-bold text-[#1A1A2E]">¥499</div>
                    <Link href="/courses/media" className="flex items-center gap-2 text-[#1A1A2E] font-medium hover:text-[#4A4A6A] transition-colors">
                      查看详情 <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 全套课程 */}
            <div className="text-center">
              <div className="inline-block bg-white rounded-2xl p-8 border-2 border-[#1A1A2E]" style={{ boxShadow: '0 8px 32px rgba(26, 26, 46, 0.1)' }}>
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">全套课程</h3>
                <p className="text-sm text-[#999] mb-4">AI + 自媒体 + 商业思维 · 55节课程</p>
                <div className="text-4xl font-bold text-[#1A1A2E] mb-4">
                  ¥799 <span className="text-lg font-normal text-[#999] line-through ml-2">¥998</span>
                </div>
                <Link href="/courses/full" className="btn btn-primary px-8">
                  立即购买
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}