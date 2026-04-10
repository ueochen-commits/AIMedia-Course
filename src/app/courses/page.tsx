import Link from "next/link";
import { BookOpen, Play, CheckCircle, Clock, Users, BarChart3, Sparkles, Target, Zap, Rocket, TrendingUp, Megaphone, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      id: "ai",
      name: "AI 板块",
      description: "从零基础到用AI开发产品，独立掌握AI工具并具备产品开发能力",
      icon: Sparkles,
      modules: 4,
      lessons: 20,
      price: 499,
      features: ["科学上网、ChatGPT、Claude", "提示词工程、AI写作/图片/视频", "Obsidian知识库", "Vibe Coding开发产品"],
    },
    {
      id: "media",
      name: "自媒体板块",
      description: "从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系",
      icon: Megaphone,
      modules: 3,
      lessons: 14,
      price: 499,
      features: ["一人公司认知、定位", "爆款内容创作方法论", "运营增长策略"],
    },
    {
      id: "business",
      name: "商业思维板块",
      description: "全套独有的核心差异化内容，建立商业思维，看懂变现逻辑",
      icon: BarChart3,
      modules: 4,
      lessons: 15,
      price: 799,
      exclusive: true,
      features: ["商业模式、思维", "产品思维、五种变现模式", "真实商业复盘"],
    },
  ];

  return (
    <div>
      <section className="py-16">
        <div className="container">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-[#666] mb-6">
            <Link href="/" className="hover:text-[#1A1A2E]">首页</Link>
            <span>/</span>
            <span className="text-[#1A1A2E]">课程</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">课程列表</h1>
          <p className="text-[#666] mb-12">选择你感兴趣的板块，开始学习</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI 板块 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#1A1A2E] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">AI 板块</h2>
                  <p className="text-[#666] text-sm">4模块 · 20节课程</p>
                </div>
              </div>

              <p className="text-sm text-[#666] mb-6">
                从零基础到用AI开发产品，掌握主流AI工具，具备Vibe Coding能力
              </p>

              <div className="space-y-3 mb-6">
                {courses[0].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                <div className="text-2xl font-bold">¥499</div>
                <Link href="/courses/ai" className="btn btn-primary">
                  查看详情
                </Link>
              </div>
            </div>

            {/* 自媒体板块 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#1A1A2E] rounded-xl flex items-center justify-center">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">自媒体板块</h2>
                  <p className="text-[#666] text-sm">3模块 · 14节课程</p>
                </div>
              </div>

              <p className="text-sm text-[#666] mb-6">
                从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系
              </p>

              <div className="space-y-3 mb-6">
                {courses[1].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                <div className="text-2xl font-bold">¥499</div>
                <Link href="/courses/media" className="btn btn-primary">
                  查看详情
                </Link>
              </div>
            </div>

            {/* 商业思维板块 - 仅全套 */}
            <div className="card border-2 border-[#1A1A2E] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1A1A2E] text-white text-xs rounded-full">
                全套专享
              </div>
              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className="w-16 h-16 bg-[#1A1A2E] rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">商业思维板块</h2>
                  <p className="text-[#666] text-sm">4模块 · 15节课程</p>
                </div>
              </div>

              <p className="text-sm text-[#666] mb-6">
                全套独有的核心差异化内容，建立商业思维，看懂变现逻辑
              </p>

              <div className="space-y-3 mb-6">
                {courses[2].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                <div className="text-2xl font-bold">¥799</div>
                <Link href="/courses/full" className="btn btn-primary">
                  查看详情
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="card inline-block">
              <h3 className="text-xl font-semibold mb-2">全套课程</h3>
              <p className="text-[#666] text-sm mb-4">AI + 自媒体 + 商业思维 · 55节课程</p>
              <div className="text-3xl font-bold mb-4">¥799 <span className="text-sm font-normal text-[#666] line-through">¥998</span></div>
              <Link href="/courses/full" className="btn btn-primary">立即购买</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}