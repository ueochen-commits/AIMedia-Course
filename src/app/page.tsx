import Link from "next/link";
import { Sparkles, Rocket, TrendingUp, Users, ArrowRight, Target, Award, PlayCircle, CheckCircle, GraduationCap, Megaphone, Clock, Shield, Zap, Star, Heart, Eye, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* ==================== HERO 首屏：价值主张 + 行动聚焦 ==================== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#1A1A2E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#1A1A2E]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* 信任标签 - 降低进入门槛 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F6F3] rounded-full text-sm text-[#666] mb-6">
              <Shield className="w-4 h-4 text-green-500" />
              <span>已有 100+ 学员加入</span>
            </div>

            {/* 核心价值主张 - 一句话说明白 */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
             学会AI做产品<span className="text-[#666]"> + </span>自媒体推广<br />
              <span className="text-[#1A1A2E]">成为一人公司</span>
            </h1>

            {/* 副标题 - 痛点+解决方案 */}
            <p className="text-lg text-[#666] mb-8 max-w-xl mx-auto">
              很多人学会AI工具，却不会推广自己的产品。<br className="hidden md:block" />
              我把<span className="font-semibold">做产品</span> + <span className="font-semibold">自媒体变现</span> 的完整方法论教给你
            </p>

            {/* CTA按钮组 - 按心理优先级排序 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {/* 主按钮：最想要的动作 */}
              <a href="#pricing" className="btn btn-primary text-lg px-8 group">
                立即加入
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* 次按钮：了解更多 */}
              <a href="#outline" className="btn btn-secondary text-lg px-8">
                查看课程大纲
              </a>
            </div>

            {/* 风险逆转 - 降低决策压力 */}
            <div className="flex items-center justify-center gap-4 text-sm text-[#666]">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>3节试看免费</span>
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

      {/* ==================== 社会证明：建立信任 ==================== */}
      <section className="py-10 bg-[#F7F6F3] border-y border-[#E8E8E8]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-[#666]" /> 50万+
              </div>
              <div className="text-[#666] text-sm">全网粉丝</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-[#666]" /> 100+
              </div>
              <div className="text-[#666] text-sm">付费学员</div>
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

      {/* ==================== 课程大纲：价值展示 ==================== */}
      <section className="py-16 bg-[#F7F6F3]" id="outline">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">课程大纲</h2>
            <p className="text-[#666]">每个板块学完都能产出实际成果</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            {/* AI板块 */}
            <div className="bg-white rounded-xl border border-[#E8E8E8] overflow-hidden">
              <div className="p-5 border-b border-[#E8E8E8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-7 h-7 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">AI 板块</h3>
                    <p className="text-white/70 text-xs">4模块 · 12节 · ¥499</p>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-[#E8E8E8]">
                {[
                  { module: "一：入门准备", lessons: ["科学上网搭建", "ChatGPT/Claude注册", "虚拟卡开通"], goal: "解决入门门槛" },
                  { module: "二：AI工具基础", lessons: ["主流模型对比", "提示词工程", "Markdown进阶"], goal: "高效对话AI" },
                  { module: "三：AI进阶应用", lessons: ["Notion知识库", "AI图片生成", "AI视频制作"], goal: "提升工作效率" },
                  { module: "四：用AI开发产品", lessons: ["GitHub代码管理", "Cursor开发", "Vibe Coding实战"], goal: "独立完成产品" },
                ].map((item, idx) => (
                  <details key={idx} className="group">
                    <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#F7F6F3] transition list-none">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#1A1A2E] text-white text-xs flex items-center justify-center">{idx + 1}</span>
                        <span className="font-medium text-sm">{item.module}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#666] group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-3 pb-3">
                      <div className="pl-7 space-y-1">
                        {item.lessons.map((lesson, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#666]">
                            <PlayCircle className="w-3 h-3 text-green-500" /> {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
              <div className="p-3 border-t border-[#E8E8E8] bg-[#F7F6F3] flex justify-between items-center">
                <span className="font-bold">¥499</span>
                <Link href="/courses/ai" className="text-sm text-[#1A1A2E] font-medium flex items-center gap-1">
                  查看详情 <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 自媒体板块 */}
            <div className="bg-white rounded-xl border border-[#E8E8E8] overflow-hidden">
              <div className="p-5 border-b border-[#E8E8E8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-3">
                  <Megaphone className="w-7 h-7 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">自媒体板块</h3>
                    <p className="text-white/70 text-xs">4模块 · 12节 · ¥499</p>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-[#E8E8E8]">
                {[
                  { module: "一：认知与定位", lessons: ["一人公司模式", "内容定位", "Build in Public"], goal: "找到方向" },
                  { module: "二：内容创作", lessons: ["爆款文案结构", "脚本写作", "封面设计"], goal: "持续输出" },
                  { module: "三：平台运营", lessons: ["抖音/小红书算法", "多平台分发", "私域引流"], goal: "获取流量" },
                  { module: "四：变现体系", lessons: ["知识付费设计", "产品矩阵", "案例复盘"], goal: "实现变现" },
                ].map((item, idx) => (
                  <details key={idx} className="group">
                    <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#F7F6F3] transition list-none">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#1A1A2E] text-white text-xs flex items-center justify-center">{idx + 1}</span>
                        <span className="font-medium text-sm">{item.module}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#666] group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-3 pb-3">
                      <div className="pl-7 space-y-1">
                        {item.lessons.map((lesson, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#666]">
                            <PlayCircle className="w-3 h-3 text-green-500" /> {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
              <div className="p-3 border-t border-[#E8E8E8] bg-[#F7F6F3] flex justify-between items-center">
                <span className="font-bold">¥499</span>
                <Link href="/courses/media" className="text-sm text-[#1A1A2E] font-medium flex items-center gap-1">
                  查看详情 <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 定价：稀缺 + 紧迫 ==================== */}
      <section className="py-16" id="pricing">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">选择一个开始</h2>
            <p className="text-[#666]">建议全套，两个都学 = 完整的一人公司能力</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* AI板块 */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">AI 板块</h3>
              <p className="text-xs text-[#666] mb-4">独立开发AI产品的能力</p>
              <div className="text-3xl font-bold mb-1">¥499</div>
              <p className="text-xs text-[#666] mb-4">12节课程</p>
              <Link href="/courses/ai" className="btn btn-secondary w-full">
                单独购买
              </Link>
            </div>

            {/* 全套 - 主推 */}
            <div className="card border-2 border-[#1A1A2E] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1A1A2E] text-white text-xs rounded-full">
                推荐
              </div>
              <h3 className="text-lg font-semibold mb-2">全套课程</h3>
              <p className="text-xs text-[#666] mb-4">AI + 自媒体，完整体系</p>
              <div className="text-3xl font-bold mb-1">¥799</div>
              <p className="text-xs text-[#666] mb-4">24节课程 · 省¥199</p>
              <Link href="/courses/full" className="btn btn-primary w-full">
                立即购买
              </Link>
            </div>

            {/* 自媒体板块 */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">自媒体板块</h3>
              <p className="text-xs text-[#666] mb-4">自媒体变现的能力</p>
              <div className="text-3xl font-bold mb-1">¥499</div>
              <p className="text-xs text-[#666] mb-4">12节课程</p>
              <Link href="/courses/media" className="btn btn-secondary w-full">
                单独购买
              </Link>
            </div>
          </div>

          {/* 风险逆转 */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#666]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>微信/支付宝支付</span>
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
                全网50万+粉丝自媒体博主，独立开发者。已成功上线多个AI产品，知识付费月收入3-5万。致力于帮助更多人成为"一人公司"。
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>抖音18万+粉丝</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>公众号10万+</span>
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

      {/* ==================== FAQ：消除疑虑 ==================== */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">常见问题</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              { q: "零基础可以学吗？", a: "可以，课程从最基础的科学上网开始讲起，专为零基础学员设计。" },
              { q: "课程是视频吗？", a: "是的，视频课程，每节15-45分钟，附带PPT和练习材料。" },
              { q: "购买后可以随时看吗？", a: "是的，付费后永久可看，支持断点续播。" },
              { q: "有学员群吗？", a: "购买后自动拉进微信学员群，每周直播答疑。" },
              { q: "可以分期付款吗？", a: "目前不支持分期，但有早鸟优惠码可使用。" },
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

      {/* ==================== 最后CTA ==================== */}
      <section className="py-20 bg-[#1A1A2E] text-white text-center relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">现在开始，成为一人公司</h2>
          <p className="text-white/70 text-lg mb-10">学完能独立做产品并推广变现</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn bg-white text-[#1A1A2E] hover:bg-white/90 text-lg px-10 py-4 inline-flex">
              立即加入
            </a>
            <a href="#outline" className="btn border border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 inline-flex">
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 底部 ==================== */}
      <footer className="py-8 text-center text-sm text-[#666]">
        <p>微信咨询：luren-ai（备注"课程"）</p>
        <p className="mt-2">© 2026 一人公司. All rights reserved.</p>
      </footer>
    </div>
  );
}