import Link from "next/link";
import { Sparkles, Rocket, TrendingUp, Users, ArrowRight, Target, Award, PlayCircle, CheckCircle, GraduationCap, Megaphone, Clock, Shield, Zap, Star, Heart, Eye, ThumbsUp, BookOpen, Layers, BarChart3, Code, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* ==================== HERO 首屏 ==================== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#1A1A2E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#1A1A2E]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F6F3] rounded-full text-sm text-[#666] mb-6">
              <Shield className="w-4 h-4 text-green-500" />
              <span>内测用户 100+</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              学会AI做产品<span className="text-[#666]"> + </span>自媒体推广<br />
              <span className="text-[#1A1A2E]">成为一人公司</span>
            </h1>

            <p className="text-lg text-[#666] mb-8 max-w-xl mx-auto">
              很多人学会AI工具，却不会推广自己的产品。<br className="hidden md:block" />
              我把<span className="font-semibold">做产品</span> + <span className="font-semibold">自媒体变现</span> 的完整方法论教给你
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="#pricing" className="btn btn-primary text-lg px-8 group">
                立即加入
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#outline" className="btn btn-secondary text-lg px-8">
                查看课程大纲
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-[#666]">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>2节试看免费</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-green-500" />
                <span>永久可看</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-green-500" />
                <span>付费后可进群</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 社会证明 ==================== */}
      <section className="py-10 bg-[#F7F6F3] border-y border-[#E8E8E8]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-[#666]" /> 60万+
              </div>
              <div className="text-[#666] text-sm">全网粉丝</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-[#666]" /> 100+
              </div>
              <div className="text-[#666] text-sm">内测用户</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-[#666]" /> 3-5万
              </div>
              <div className="text-[#666] text-sm">月收入</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5 text-[#666]" /> 2+
              </div>
              <div className="text-[#666] text-sm">上线产品</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 痛点共鸣 ==================== */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">你是否也有这些困惑？</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Zap, text: "學了很多AI课程，仍不知道怎么做产品" },
              { icon: Eye, text: "做出产品后，没有人知道、卖不出去" },
              { icon: TrendingUp, text: "想自媒体引流，但不懂运营方法" },
              { icon: Heart, text: "想一人创业，但没有系统方法论" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-[#F7F6F3] rounded-lg">
                <item.icon className="w-6 h-6 text-[#666] flex-shrink-0" />
                <span className="text-left">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-[#666]">这正是我创建这个课程的初衷</p>
          </div>
        </div>
      </section>

      {/* ==================== 课程大纲 ==================== */}
      <section className="py-16 bg-[#F7F6F3]" id="outline">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">课程大纲</h2>
            <p className="text-[#666]">每个板块学完都能产出实际成果</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* AI板块 */}
            <div className="bg-white rounded-xl border border-[#E8E8E8] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-5 border-b border-[#E8E8E8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-7 h-7 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">AI 板块</h3>
                    <p className="text-white/70 text-xs">4模块 · 20节 · ¥499</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#666] mb-4">从零基础到用AI开发产品，掌握主流AI工具，具备Vibe Coding能力</p>
                <div className="space-y-2">
                  {[
                    { module: "模块一：入门准备", lessons: "科学上网、谷歌账号、ChatGPT、Claude注册" },
                    { module: "模块二：AI工具基础", lessons: "主流模型对比、提示词工程、AI写作/图片/视频生成" },
                    { module: "模块三：AI效率工具", lessons: "Obsidian知识库、NotebookLM、AI辅助决策" },
                    { module: "模块四：Vibe Coding", lessons: "GitHub、Cursor、实战网页开发、Vercel部署" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{item.module}</span>
                        <p className="text-[#666] text-xs">{item.lessons}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 border-t border-[#E8E8E8] bg-[#F7F6F3] flex justify-between items-center">
                <span className="font-bold">¥499</span>
                <Link href="/courses/ai" className="text-sm text-[#1A1A2E] font-medium flex items-center gap-1">
                  查看详情 <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 自媒体板块 */}
            <div className="bg-white rounded-xl border border-[#E8E8E8] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-5 border-b border-[#E8E8E8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-3">
                  <Megaphone className="w-7 h-7 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">自媒体板块</h3>
                    <p className="text-white/70 text-xs">3模块 · 14节 · ¥499</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#666] mb-4">从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系</p>
                <div className="space-y-2">
                  {[
                    { module: "模块一：认知与定位", lessons: "一人公司认知、差异化定位、Build in Public" },
                    { module: "模块二：内容创作", lessons: "爆款结构、选题方法、脚本写作、AI辅助、封面设计" },
                    { module: "模块三：运营增长", lessons: "多平台分发、评论区运营、私域引流、数据复盘" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{item.module}</span>
                        <p className="text-[#666] text-xs">{item.lessons}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 border-t border-[#E8E8E8] bg-[#F7F6F3] flex justify-between items-center">
                <span className="font-bold">¥499</span>
                <Link href="/courses/media" className="text-sm text-[#1A1A2E] font-medium flex items-center gap-1">
                  查看详情 <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 商业思维板块 - 仅全套 */}
            <div className="bg-white rounded-xl border-2 border-[#1A1A2E] overflow-hidden shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1A1A2E] text-white text-xs rounded-full">
                全套专享
              </div>
              <div className="p-5 border-b border-[#E8E8E8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-7 h-7 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">商业思维板块</h3>
                    <p className="text-white/70 text-xs">4模块 · 15节 · 仅全套</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#666] mb-4">全套独有的核心差异化内容，建立商业思维，看懂变现逻辑</p>
                <div className="space-y-2">
                  {[
                    { module: "模块一：商业认知", lessons: "商业模式、打工vs老板思维、最小成本验证" },
                    { module: "模块二：产品思维", lessons: "好产品定义、MVP方法论、定价策略" },
                    { module: "模块三：五种变现", lessons: "广告、知识付费、SaaS、服务、联盟营销" },
                    { module: "模块四：真实复盘", lessons: "创业时间线、错误决策、定价复盘" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{item.module}</span>
                        <p className="text-[#666] text-xs">{item.lessons}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 border-t border-[#E8E8E8] bg-[#F7F6F3] flex justify-between items-center">
                <span className="font-bold">¥799</span>
                <Link href="/courses/full" className="text-sm text-[#1A1A2E] font-medium flex items-center gap-1">
                  查看详情 <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 定价 ==================== */}
      <section className="py-16" id="pricing">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">选择一个开始</h2>
            <p className="text-[#666]">建议全套，三个都学 = 完整的AI一人公司能力体系</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">AI 板块</h3>
              <p className="text-xs text-[#666] mb-4">独立开发AI产品的能力</p>
              <div className="text-3xl font-bold mb-1">¥499</div>
              <p className="text-xs text-[#666] mb-4">20节课程</p>
              <Link href="/courses/ai" className="btn btn-secondary w-full">
                单独购买
              </Link>
            </div>

            <div className="card border-2 border-[#1A1A2E] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1A1A2E] text-white text-xs rounded-full">
                推荐
              </div>
              <h3 className="text-lg font-semibold mb-2">全套课程</h3>
              <p className="text-xs text-[#666] mb-4">AI + 自媒体 + 商业思维</p>
              <div className="text-3xl font-bold mb-1">¥799</div>
              <p className="text-xs text-[#666] mb-4">55节课程 · 省¥199</p>
              <Link href="/courses/full" className="btn btn-primary w-full">
                立即购买
              </Link>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-2">自媒体板块</h3>
              <p className="text-xs text-[#666] mb-4">自媒体变现的能力</p>
              <div className="text-3xl font-bold mb-1">¥499</div>
              <p className="text-xs text-[#666] mb-4">14节课程</p>
              <Link href="/courses/media" className="btn btn-secondary w-full">
                单独购买
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#666]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>支付宝支付</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>永久可看</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-500" />
              <span>进入学员群</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 创始人背书 ==================== */}
      <section className="py-16 bg-[#F7F6F3]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">关于创始人</h2>
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#F7F6F3] rounded-xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-[#666]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">路人</h3>
                  <p className="text-sm text-[#666]">一人公司创始人</p>
                </div>
              </div>
              <p className="text-[#666] mb-4">
                全网粉丝接近60万的自媒体博主，2018年开始深耕多个平台，擅长各平台从零起号。英国留学9年，通过CFA一级考试。快手一周涨粉30万，小红书单日涨粉3500，公众号「Hello我是路人」持续更新。从体制内辞职后独立开发AI产品TradeGrail，全程Build in Public公开记录。
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>抖音18万+粉丝</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>快手30万+粉丝</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>2个上线产品</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">常见问题</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              { q: "零基础可以学吗？", a: "可以，课程从最基础的科学上网开始讲起，专为零基础学员设计。" },
              { q: "课程是视频吗？", a: "是的，视频课程，每节15-45分钟，附带PPT和练习材料。" },
              { q: "购买后可以随时看吗？", a: "是的，付费后永久可看，支持断点续播。" },
              { q: "有学员群吗？", a: "购买后自动拉进微信学员群，每周直播答疑。" },
              { q: "有优惠吗？", a: "定价即最终价，没有优惠码。" },
            ].map((item, idx) => (
              <details key={idx} className="card">
                <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <ArrowRight className="w-4 h-4 text-[#666]" />
                </summary>
                <p className="mt-3 text-sm text-[#666]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 bg-[#1A1A2E] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">现在开始，成为一人公司</h2>
          <p className="text-white/70 text-lg mb-10">学完能独立做产品并推广变现</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn bg-white text-[#1A1A2E] hover:bg-gray-100 text-lg px-10 py-4 font-semibold" style={{ color: '#1A1A2E' }}>
              立即加入
            </a>
            <a href="#outline" className="btn border border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 inline-flex">
              了解更多
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-[#666]">
        <p>微信咨询：Timetravel_0（备注"课程"）</p>
        <p className="mt-2">© 2026 一人公司. All rights reserved.</p>
      </footer>
    </div>
  );
}