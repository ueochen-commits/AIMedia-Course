import Link from "next/link";
import { Rocket, Users, ArrowRight, CheckCircle, GraduationCap, Megaphone, Clock, Shield, Zap, Star } from "lucide-react";

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
      <section className="py-12 bg-white border-b border-[#F0EDE8]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A2E] flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-[#999]" /> 60万+
              </div>
              <div className="text-[#999] text-sm mt-1">全网粉丝</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A2E] flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-[#999]" /> 100+
              </div>
              <div className="text-[#999] text-sm mt-1">内测用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A2E] flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-[#999]" /> 3-5万
              </div>
              <div className="text-[#999] text-sm mt-1">月收入</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A2E] flex items-center justify-center gap-2">
                <Rocket className="w-6 h-6 text-[#999]" /> 2+
              </div>
              <div className="text-[#999] text-sm mt-1">上线产品</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 痛点共鸣 ==================== */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">你是否也有这些困惑？</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { num: "01", text: "想学AI做产品，但不知道从哪开始" },
              { num: "02", text: "做出产品后，没有人知道、卖不出去" },
              { num: "03", text: "想自媒体引流，但不懂运营方法" },
              { num: "04", text: "想一人创业，但没有系统方法论" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#F0EDE8] hover:shadow-lg hover:shadow-[#1A1A2E]/5 transition-all duration-300">
                <span className="w-10 h-10 rounded-lg bg-[#F7F6F3] text-[#1A1A2E] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {item.num}
                </span>
                <span className="text-[#1A1A2E]">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-[#666]">这正是我创建这个课程的初衷</p>
          </div>
        </div>
      </section>

      {/* ==================== 课程大纲 ==================== */}
      <section className="py-20 bg-[#FBFBFA]" id="outline">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">课程大纲</h2>
            <p className="text-[#666]">每个板块学完都能产出实际成果</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AI板块 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EDE8] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A1A2E]/8" style={{ boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)' }}>
              <div className="p-6 border-b border-[#F0EDE8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI 板块</h3>
                    <p className="text-white/70 text-sm">4模块 · 20节课程</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#666] mb-5">从零基础到用AI开发产品，掌握主流AI工具，具备Vibe Coding能力</p>
                <div className="space-y-3">
                  {[
                    { module: "模块一：入门准备", lessons: "科学上网、谷歌账号、ChatGPT、Claude注册" },
                    { module: "模块二：AI工具基础", lessons: "主流模型对比、提示词工程、AI写作/图片/视频生成" },
                    { module: "模块三：AI效率工具", lessons: "Obsidian知识库、NotebookLM、AI辅助决策" },
                    { module: "模块四：Vibe Coding", lessons: "GitHub、Cursor、实战网页开发、Vercel部署" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#F7F6F3] text-[#1A1A2E] flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="font-medium text-[#1A1A2E]">{item.module}</span>
                        <p className="text-[#999] text-sm">{item.lessons}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-[#F0EDE8] bg-[#FBFBFA]">
                <Link href="/courses/ai" className="flex items-center justify-center gap-2 text-[#1A1A2E] font-medium hover:text-[#4A4A6A] transition-colors">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 自媒体板块 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EDE8] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A1A2E]/8" style={{ boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)' }}>
              <div className="p-6 border-b border-[#F0EDE8] bg-gradient-to-r from-[#1A1A2E] to-[#2A2A3E]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">自媒体板块</h3>
                    <p className="text-white/70 text-sm">4模块 · 18节课程</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#666] mb-5">从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系</p>
                <div className="space-y-3">
                  {[
                    { module: "模块一：认知与定位", lessons: "一人公司认知、差异化定位、Build in Public" },
                    { module: "模块二：内容创作", lessons: "爆款结构、选题方法、脚本写作、AI辅助、封面设计" },
                    { module: "模块三：运营增长", lessons: "多平台分发、评论区运营、私域引流、数据复盘" },
                    { module: "模块四：变现实战", lessons: "广告分成、知识付费、带货分销、商业合作" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#F7F6F3] text-[#1A1A2E] flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="font-medium text-[#1A1A2E]">{item.module}</span>
                        <p className="text-[#999] text-sm">{item.lessons}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-[#F0EDE8] bg-[#FBFBFA]">
                <Link href="/courses/media" className="flex items-center justify-center gap-2 text-[#1A1A2E] font-medium hover:text-[#4A4A6A] transition-colors">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 全套课程 - 只显示一个选项 */}
          <div className="mt-12 text-center">
            <div className="inline-block">
              <Link href="/courses/full" className="btn btn-primary text-lg px-10 py-3">
                查看全套课程（含商业思维）
              </Link>
              <p className="text-sm text-[#999] mt-3">AI + 自媒体 + 商业思维 = 完整的AI一人公司能力体系</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 定价 ==================== */}
      <section className="py-20" id="pricing">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">选择一个开始</h2>
            <p className="text-[#666]">建议全套，三个都学 = 完整的AI一人公司能力体系</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[#F0EDE8] hover:shadow-lg hover:shadow-[#1A1A2E]/5 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">AI 板块</h3>
              <p className="text-sm text-[#999] mb-4">独立开发AI产品的能力</p>
              <div className="text-4xl font-bold text-[#1A1A2E] mb-1">¥499</div>
              <p className="text-sm text-[#999] mb-6">20节课程</p>
              <Link href="/courses/ai" className="btn btn-secondary w-full">
                单独购买
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#1A1A2E] relative" style={{ boxShadow: '0 8px 32px rgba(26, 26, 46, 0.1)' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#1A1A2E] text-white text-sm font-medium rounded-full">
                推荐
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 mt-2">全套课程</h3>
              <p className="text-sm text-[#999] mb-4">AI + 自媒体 + 商业思维</p>
              <div className="text-4xl font-bold text-[#1A1A2E] mb-1">¥799</div>
              <p className="text-sm text-[#999] mb-6">55节课程 · 省¥199</p>
              <Link href="/courses/full" className="btn btn-primary w-full">
                立即购买
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#F0EDE8] hover:shadow-lg hover:shadow-[#1A1A2E]/5 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">自媒体板块</h3>
              <p className="text-sm text-[#999] mb-4">自媒体变现的能力</p>
              <div className="text-4xl font-bold text-[#1A1A2E] mb-1">¥499</div>
              <p className="text-sm text-[#999] mb-6">18节课程</p>
              <Link href="/courses/media" className="btn btn-secondary w-full">
                单独购买
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#666]">
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
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>售前无忧咨询</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 学完能达到什么效果 ==================== */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* 主容器 */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)]">
              {/* 标题区域 */}
              <div className="px-8 pt-8 pb-4">
                <span className="text-xs font-normal text-[#6b6b6b] uppercase tracking-widest">COURSE OUTCOMES</span>
                <h2 className="text-[32px] text-[#1a1a1a] font-normal mt-2 tracking-tight" style={{ letterSpacing: '-0.5px' }}>
                  学完能达到什么效果
                </h2>
              </div>

              {/* 内容区域 - 左右两列 */}
              <div className="grid grid-cols-2">
                {/* 左列：AI 板块 */}
                <div className="p-8 border-r border-[rgba(0,0,0,0.1)]">
                  {/* 板块标签 */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[#f0f0f0] text-[#6b6b6b] text-sm font-normal rounded-sm">
                      AI 板块
                    </span>
                    <span className="text-sm text-[#6b6b6b] ml-3">从零开发 AI 产品</span>
                  </div>

                  {/* 步骤列表 */}
                  <div className="space-y-0">
                    {/* 01 入门 */}
                    <div className="py-4 border-b border-[rgba(0,0,0,0.1)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-[#6b6b6b] font-normal">01</span>
                        <span className="text-base text-[#1a1a1a] font-medium">入门</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b] font-normal ml-8">科学上网、注册 ChatGPT/Claude、学会基础对话</p>
                    </div>

                    {/* 02 进阶 */}
                    <div className="py-4 border-b border-[rgba(0,0,0,0.1)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-[#6b6b6b] font-normal">02</span>
                        <span className="text-base text-[#1a1a1a] font-medium">进阶</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b] font-normal ml-8">提示词工程、AI 写作/图片/视频、构建个人知识库</p>
                    </div>

                    {/* 03 实战成果 */}
                    <div className="py-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-[#6b6b6b] font-normal">03</span>
                        <span className="text-base text-[#1a1a1a] font-medium">实战成果</span>
                        <span className="text-xs text-[#1a6636] bg-[#e8f5ee] px-2 py-0.5 rounded-sm">结业输出</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b] font-normal ml-8">用 Cursor 开发并上线自己的网站</p>
                    </div>
                  </div>
                </div>

                {/* 右列：自媒体板块 */}
                <div className="p-8">
                  {/* 板块标签 */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[#e8f5ee] text-[#1a6636] text-sm font-normal rounded-sm">
                      自媒体板块
                    </span>
                    <span className="text-sm text-[#6b6b6b] ml-3">从 0 到 1 变现体系</span>
                  </div>

                  {/* 步骤列表 */}
                  <div className="space-y-0">
                    {/* 01 定位 */}
                    <div className="py-4 border-b border-[rgba(0,0,0,0.1)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-[#6b6b6b] font-normal">01</span>
                        <span className="text-base text-[#1a1a1a] font-medium">定位</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b] font-normal ml-8">一人公司思维、差异化定位、Build in Public 意识</p>
                    </div>

                    {/* 02 内容 */}
                    <div className="py-4 border-b border-[rgba(0,0,0,0.1)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-[#6b6b6b] font-normal">02</span>
                        <span className="text-base text-[#1a1a1a] font-medium">内容</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b] font-normal ml-8">爆款结构、选题方法、脚本写作、AI 辅助创作</p>
                    </div>

                    {/* 03 变现成果 */}
                    <div className="py-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-[#6b6b6b] font-normal">03</span>
                        <span className="text-base text-[#1a1a1a] font-medium">变现成果</span>
                        <span className="text-xs text-[#1a6636] bg-[#e8f5ee] px-2 py-0.5 rounded-sm">结业输出</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b] font-normal ml-8">多平台运营增长、私域引流、建立变现体系</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 用户评价 ==================== */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">学员评价</h2>
          <p className="text-[#666] text-center mb-12">来自真实学员的反馈</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#F0EDE8]" style={{ boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)' }}>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-[#666] mb-4 leading-relaxed">
                "之前完全没接触过AI，学完课程后自己用Cursor做了个个人网站，真的太神奇了！老师讲解非常详细，适合零基础。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-full flex items-center justify-center text-[#1A1A2E] font-semibold">
                  张*
                </div>
                <div>
                  <div className="font-medium text-[#1A1A2E]">张同学</div>
                  <div className="text-xs text-[#999]">AI板块学员</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#F0EDE8]" style={{ boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)' }}>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-[#666] mb-4 leading-relaxed">
                "自媒体板块帮我理清了做账号的思路，按照课程方法做了定位和内容规划，小红书一周涨了500粉，感谢路人老师！"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F7F6F3] rounded-full flex items-center justify-center text-[#1A1A2E] font-semibold">
                  李*
                </div>
                <div>
                  <div className="font-medium text-[#1A1A2E]">李同学</div>
                  <div className="text-xs text-[#999]">自媒体板块学员</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 创始人背书 ==================== */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* eyebrow */}
            <div className="text-center mb-6">
              <span className="text-xs font-normal text-[#6b6b6b] uppercase tracking-widest">关于创始人</span>
            </div>

            {/* 主标题 */}
            <h2 className="text-[28px] font-normal text-center mb-8 text-[#1a1a1a]" style={{ letterSpacing: '-0.4px' }}>
              路人是谁
            </h2>

            {/* 大卡片 */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
              {/* 顶部 header 区 */}
              <div className="p-6 border-b border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-4">
                  {/* 左侧方形 avatar */}
                  <div className="w-16 h-16 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#6b6b6b]" fill="none" viewBox="0 0 24 24" stroke="currentClient">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {/* 右侧姓名+身份 */}
                  <div>
                    <div className="text-lg font-medium text-[#1a1a1a]">路人</div>
                    <div className="text-[13px] text-[#6b6b6b]">一人公司创始人 · Build in Public</div>
                  </div>
                </div>
              </div>

              {/* 中间 bio 区 */}
              <div className="p-6 border-b border-[rgba(0,0,0,0.1)]">
                <p className="text-[14px] leading-[1.8] text-[#6b6b6b] font-normal">
                  全网粉丝接近<span className="font-medium text-[#1a1a1a]">60万</span>的自媒体博主，2018年开始深耕多个平台，擅长从零起号。英国留学9年，通过<span className="font-medium text-[#1a1a1a]">CFA</span>一级考试。快手一周涨粉30万，小红书单日涨粉3500，公众号「Hello我是路人」持续更新。从体制内辞职后独立开发AI产品<span className="font-medium text-[#1a1a1a]">TradeGrail</span>，全程Build in Public公开记录。
                </p>
              </div>

              {/* 底部 stats 区 */}
              <div className="p-6">
                <div className="grid grid-cols-4 gap-0">
                  {/* 数据1 */}
                  <div className="text-center border-r border-[rgba(0,0,0,0.1)] last:border-r-0">
                    <div className="text-[18px] font-medium text-[#1a1a1a]" style={{ letterSpacing: '-0.3px' }}>18万+</div>
                    <div className="text-[11px] text-[#6b6b6b] uppercase mt-1">抖音粉丝</div>
                  </div>
                  {/* 数据2 */}
                  <div className="text-center border-r border-[rgba(0,0,0,0.1)] last:border-r-0">
                    <div className="text-[18px] font-medium text-[#1a1a1a]" style={{ letterSpacing: '-0.3px' }}>30万+</div>
                    <div className="text-[11px] text-[#6b6b6b] uppercase mt-1">快手粉丝</div>
                  </div>
                  {/* 数据3 */}
                  <div className="text-center border-r border-[rgba(0,0,0,0.1)] last:border-r-0">
                    <div className="text-[18px] font-medium text-[#1a1a1a]" style={{ letterSpacing: '-0.3px' }}>60万+</div>
                    <div className="text-[11px] text-[#6b6b6b] uppercase mt-1">全网粉丝</div>
                  </div>
                  {/* 数据4 */}
                  <div className="text-center border-r border-[rgba(0,0,0,0.1)] last:border-r-0">
                    <div className="text-[18px] font-medium text-[#1a1a1a]" style={{ letterSpacing: '-0.3px' }}>2个</div>
                    <div className="text-[11px] text-[#6b6b6b] uppercase mt-1">上线产品</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-10">常见问题</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "零基础可以学吗？", a: "可以，课程从最基础的科学上网开始讲起，专为零基础学员设计。" },
              { q: "课程是视频吗？", a: "是的，视频课程，每节15-45分钟，附带PPT和练习材料。" },
              { q: "购买后可以随时看吗？", a: "是的，付费后永久可看，支持断点续播。" },
              { q: "有学员群吗？", a: "购买后自动拉进微信学员群，每周直播答疑。" },
              { q: "有优惠吗？", a: "定价即最终价，没有优惠码。" },
            ].map((item, idx) => (
              <details key={idx} className="bg-white rounded-xl border border-[#F0EDE8] overflow-hidden group cursor-pointer" style={{ boxShadow: '0 2px 12px rgba(26, 26, 46, 0.04)' }}>
                <summary className="cursor-pointer list-none flex items-center justify-between p-5 font-medium text-[#1A1A2E] group-hover:bg-[#FBFBFA] transition-colors">
                  <span>{item.q}</span>
                  <ArrowRight className="w-4 h-4 text-[#999] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-[#666]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 bg-[#1A1A2E] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">现在开始，成为一人公司</h2>
          <p className="text-white/70 text-lg mb-12">学完能独立做产品并推广变现</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-10 py-4 bg-white text-[#1A1A2E] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              立即加入
            </a>
            <a href="#outline" className="px-10 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300">
              了解更多
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-[#999] bg-white border-t border-[#F0EDE8]">
        <p className="mb-2">微信咨询：Timetravel_0（备注"课程"）</p>
        <p>© 2026 一人公司. All rights reserved.</p>
      </footer>
    </div>
  );
}