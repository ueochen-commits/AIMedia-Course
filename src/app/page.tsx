import Link from "next/link";
import { Rocket, Users, ArrowRight, CheckCircle, GraduationCap, Megaphone, Clock, Shield, Zap, Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* ==================== HERO 首屏 ==================== */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#faf9f7' }}>
        {/* SVG 背景图 - 覆盖整个 Hero 区 */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <g stroke="#1a1a1a" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.08">
              {/* 咖啡杯 */}
              <g transform="translate(80,90)">
                <path d="M0,20 Q0,35 18,35 Q36,35 36,20 L33,5 L3,5 Z" strokeWidth="1.8"/>
                <path d="M36,12 Q48,12 48,20 Q48,28 36,28" strokeWidth="1.8"/>
                <path d="M10,0 Q10,-8 16,-8 Q22,-8 22,0" strokeWidth="1.5"/>
                <ellipse cx="18" cy="38" rx="14" ry="3" strokeWidth="1.2"/>
              </g>
              {/* 火箭 */}
              <g transform="translate(180,55) rotate(-20)">
                <path d="M12,0 Q20,8 20,22 L12,30 L4,22 Q4,8 12,0Z" strokeWidth="1.8"/>
                <path d="M4,22 Q0,28 2,34 L8,28" strokeWidth="1.5"/>
                <path d="M20,22 Q24,28 22,34 L16,28" strokeWidth="1.5"/>
                <circle cx="12" cy="14" r="3.5" strokeWidth="1.5"/>
                <path d="M8,30 L16,30" strokeWidth="1.2"/>
              </g>
              {/* 灯泡 */}
              <g transform="translate(290,75)">
                <path d="M14,0 Q28,0 28,14 Q28,24 20,28 L20,34 L8,34 L8,28 Q0,24 0,14 Q0,0 14,0Z" strokeWidth="1.8"/>
                <path d="M8,36 L20,36" strokeWidth="1.5"/>
                <path d="M9,39 L19,39" strokeWidth="1.5"/>
                <path d="M11,42 L17,42" strokeWidth="1.3"/>
                <path d="M10,18 Q14,14 18,18" strokeWidth="1.3"/>
              </g>
              {/* 星星 */}
              <g transform="translate(400,60)">
                <path d="M12,0 L14.5,8.5 L23,8.5 L16.5,13.5 L19,22 L12,17 L5,22 L7.5,13.5 L1,8.5 L9.5,8.5 Z" strokeWidth="1.6"/>
              </g>
              {/* AI对话气泡 */}
              <g transform="translate(460,78)">
                <rect x="0" y="0" width="44" height="30" rx="8" strokeWidth="1.8"/>
                <path d="M8,38 L8,30 L18,30" strokeWidth="1.5"/>
                <circle cx="14" cy="15" r="2.5" strokeWidth="1.5"/>
                <circle cx="22" cy="15" r="2.5" strokeWidth="1.5"/>
                <circle cx="30" cy="15" r="2.5" strokeWidth="1.5"/>
              </g>
              {/* 手机录视频 */}
              <g transform="translate(1100,65)">
                <rect x="0" y="0" width="28" height="48" rx="5" strokeWidth="1.8"/>
                <circle cx="14" cy="6" r="2" strokeWidth="1.3"/>
                <rect x="4" y="12" width="20" height="26" rx="2" strokeWidth="1.3"/>
                <circle cx="22" cy="4" r="5" strokeWidth="1.5"/>
                <path d="M19,4 L27,0 L27,8 Z" strokeWidth="1.3"/>
              </g>
              {/* 麦克风 */}
              <g transform="translate(1220,55)">
                <rect x="6" y="0" width="16" height="26" rx="8" strokeWidth="1.8"/>
                <path d="M0,18 Q0,34 14,34 Q28,34 28,18" strokeWidth="1.6"/>
                <path d="M14,34 L14,44" strokeWidth="1.5"/>
                <path d="M8,44 L20,44" strokeWidth="1.5"/>
              </g>
              {/* 放大镜 */}
              <g transform="translate(1300,80)">
                <circle cx="16" cy="16" r="14" strokeWidth="1.8"/>
                <path d="M26,26 L38,38" strokeWidth="2"/>
              </g>
              {/* 折线增长图表 */}
              <g transform="translate(1150,130)">
                <path d="M0,40 L0,0" strokeWidth="1.3"/>
                <path d="M0,40 L60,40" strokeWidth="1.3"/>
                <path d="M5,35 L18,22 L30,28 L45,10 L58,5" strokeWidth="1.8"/>
                <circle cx="18" cy="22" r="2.5" strokeWidth="1.3"/>
                <circle cx="30" cy="28" r="2.5" strokeWidth="1.3"/>
                <circle cx="45" cy="10" r="2.5" strokeWidth="1.3"/>
              </g>
              {/* 笔记本电脑 */}
              <g transform="translate(55,220)">
                <rect x="0" y="0" width="70" height="46" rx="4" strokeWidth="1.8"/>
                <rect x="4" y="4" width="62" height="34" rx="2" strokeWidth="1.3"/>
                <path d="M-8,48 L78,48 Q74,54 66,54 L4,54 Q-4,54 -8,48Z" strokeWidth="1.5"/>
                <path d="M28,48 L42,48" strokeWidth="1.5"/>
                <path d="M10,14 L40,14" strokeWidth="1"/>
                <path d="M10,20 L50,20" strokeWidth="1"/>
                <path d="M10,26 L35,26" strokeWidth="1"/>
              </g>
              {/* 铅笔 */}
              <g transform="translate(200,210) rotate(35)">
                <rect x="0" y="6" width="12" height="50" rx="1" strokeWidth="1.8"/>
                <path d="M0,56 L6,68 L12,56Z" strokeWidth="1.5"/>
                <path d="M0,6 L12,6 L12,0 L0,0Z" strokeWidth="1.5"/>
                <path d="M0,12 L12,12" strokeWidth="1.2"/>
              </g>
              {/* 小狗脸 */}
              <g transform="translate(1250,230)">
                <ellipse cx="30" cy="28" rx="26" ry="22" strokeWidth="1.8"/>
                <ellipse cx="14" cy="10" rx="10" ry="13" strokeWidth="1.6"/>
                <ellipse cx="46" cy="10" rx="10" ry="13" strokeWidth="1.6"/>
                <circle cx="22" cy="26" r="3" strokeWidth="1.5"/>
                <circle cx="38" cy="26" r="3" strokeWidth="1.5"/>
                <ellipse cx="30" cy="36" rx="8" ry="5" strokeWidth="1.5"/>
                <path d="M24,38 Q30,44 36,38" strokeWidth="1.4"/>
              </g>
              {/* 硬币 */}
              <g transform="translate(1340,260)">
                <circle cx="20" cy="20" r="20" strokeWidth="1.8"/>
                <circle cx="20" cy="20" r="15" strokeWidth="1.2"/>
                <path d="M20,8 L20,12" strokeWidth="1.5"/>
                <path d="M20,28 L20,32" strokeWidth="1.5"/>
                <path d="M14,13 Q14,10 20,10 Q26,10 26,16 Q26,20 20,20 Q26,20 26,26 Q26,30 20,30 Q14,30 14,26" strokeWidth="1.5"/>
              </g>
              {/* 播放按钮 */}
              <g transform="translate(90,500)">
                <circle cx="26" cy="26" r="24" strokeWidth="1.8"/>
                <path d="M18,14 L42,26 L18,38 Z" strokeWidth="1.8"/>
              </g>
              {/* 魔法棒 */}
              <g transform="translate(260,480) rotate(-30)">
                <path d="M0,60 L44,16" strokeWidth="2"/>
                <path d="M40,12 L48,4 L52,12 L44,16 Z" strokeWidth="1.6"/>
                <path d="M48,0 L48,6" strokeWidth="1.4"/>
                <path d="M44,4 L54,4" strokeWidth="1.4"/>
                <path d="M8,4 L12,0 L16,4 L12,8Z" strokeWidth="1.4"/>
                <path d="M55,30 L58,26 L61,30 L58,34Z" strokeWidth="1.3"/>
              </g>
              {/* 对话框 */}
              <g transform="translate(1100,490)">
                <rect x="0" y="0" width="52" height="36" rx="10" strokeWidth="1.8"/>
                <path d="M10,44 L10,36 L22,36" strokeWidth="1.5"/>
                <path d="M12,15 L40,15" strokeWidth="1.3"/>
                <path d="M12,23 L32,23" strokeWidth="1.3"/>
              </g>
              {/* 小星星 */}
              <g transform="translate(600,80)">
                <path d="M6,0 L7,4 L11,4 L8,6.5 L9,10.5 L6,8.5 L3,10.5 L4,6.5 L1,4 L5,4 Z" strokeWidth="1.3"/>
              </g>
              <g transform="translate(700,110)">
                <path d="M5,0 L6,3.5 L9.5,3.5 L7,5.5 L8,9 L5,7 L2,9 L3,5.5 L0.5,3.5 L4,3.5 Z" strokeWidth="1.2"/>
              </g>
              <g transform="translate(750,55)">
                <line x1="6" y1="0" x2="6" y2="12" strokeWidth="1.3"/>
                <line x1="0" y1="6" x2="12" y2="6" strokeWidth="1.3"/>
                <line x1="2" y1="2" x2="10" y2="10" strokeWidth="1"/>
                <line x1="10" y1="2" x2="2" y2="10" strokeWidth="1"/>
              </g>
              {/* 散落点缀 */}
              <circle cx="550" cy="150" r="3" strokeWidth="1.5"/>
              <circle cx="860" cy="80" r="2.5" strokeWidth="1.3"/>
              <circle cx="980" cy="130" r="3" strokeWidth="1.5"/>
              <circle cx="1050" cy="70" r="2" strokeWidth="1.2"/>
              {/* 底部装饰 */}
              <g transform="translate(580,520)">
                <circle cx="10" cy="10" r="10" strokeWidth="1.5"/>
                <path d="M6,10 L9,13 L14,7" strokeWidth="1.5"/>
              </g>
            </g>
          </svg>
        </div>

        {/* 文字内容 - 上层 */}
        <div className="relative z-10 container">
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
      <section className="py-20" id="outline">
        <div className="container">
          {/* 隐藏外部 eyebrow 和标题，由容器内 header 替代 */}

          {/* 两大列共享容器 */}
          <div className="max-w-4xl mx-auto bg-white border border-[rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
            {/* 深色 header 横条 - 横跨左右两列 */}
            <div className="p-6 bg-[#18181b] flex items-center justify-between border-b border-[rgba(255,255,255,0.08)]">
              <div>
                <h3 className="text-[18px] font-medium text-white">课程大纲</h3>
                <p className="text-[12px] text-white/45 mt-1">两个板块 · 共 38 节课程</p>
              </div>
              <span className="px-3 py-1 text-[11px] bg-white/10 text-white/60 rounded">每个板块学完即有成果</span>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(0,0,0,0.1)]">
              {/* 左列：AI 板块 */}
              <div className="p-6">
                {/* header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-md bg-[#f5f5f5] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591l-5.607 3.31a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9 12H3.75A2.25 2.25 0 011.5 9.75v-1.5a2.25 2.25 0 00-.659-1.591L1.586 4.26a2.25 2.25 0 00-.659-1.591V3.104M9 3v1.5M9 3v5.5m0 0v5.5M9 3v5.714m0 0v5.714m0 0v5.714m0 0v5.714" />
                      </svg>
                    </span>
                    <h3 className="text-base font-medium text-[#1a1a1a]">AI 板块</h3>
                  </div>
                  <p className="text-sm text-[#6b6b6b]">4模块 · 20节课程</p>
                </div>

                {/* 简介 */}
                <p className="text-sm text-[#1a1a1a] opacity-75 mb-6">从零基础到用AI开发产品，掌握主流AI工具，具备Vibe Coding能力</p>

                {/* 模块列表 - 用横线分隔 */}
                <div className="divide-y divide-[rgba(0,0,0,0.08)]">
                  {/* 模块 01 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">01 入门准备</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">科学上网</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">谷歌账号</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">ChatGPT</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">Claude注册</span>
                    </div>
                  </div>

                  {/* 模块 02 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">02 AI工具基础</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">主流模型对比</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">提示词工程</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">AI写作</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">AI图片</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">AI视频</span>
                    </div>
                  </div>

                  {/* 模块 03 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">03 AI效率工具</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">Obsidian知识库</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">NotebookLM</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">AI辅助决策</span>
                    </div>
                  </div>

                  {/* 模块 04 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">04 Vibe Coding</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">GitHub</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">Cursor</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">实战网页开发</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">Vercel部署</span>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="pt-6">
                  <Link href="/courses/ai" className="text-[13px] text-[#1a1a1a] border-b border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.4)] transition-colors">
                    查看详情
                  </Link>
                </div>
              </div>

              {/* 右列：自媒体板块 */}
              <div className="p-6">
                {/* header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-md bg-[#f5f5f5] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.23-.463 1.532l-.728.728a1 1 0 01-.533.53m-3.563 1.096a1 1 0 01-.463-1.532c.247-.55.06-1.23-.464-1.532l-.727-.728a1 1 0 00-.533-.53M12 12.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                      </svg>
                    </span>
                    <h3 className="text-base font-medium text-[#1a1a1a]">自媒体板块</h3>
                  </div>
                  <p className="text-sm text-[#6b6b6b]">4模块 · 18节课程</p>
                </div>

                {/* 简介 */}
                <p className="text-sm text-[#1a1a1a] opacity-75 mb-6">从自媒体认知到变现体系搭建，掌握内容创作方法论并建立变现体系</p>

                {/* 模块列表 */}
                <div className="divide-y divide-[rgba(0,0,0,0.08)]">
                  {/* 模块 01 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">01 认知与定位</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">一人公司认知</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">差异化定位</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">Build in Public</span>
                    </div>
                  </div>

                  {/* 模块 02 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">02 内容创作</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">爆款结构</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">选题方法</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">脚本写作</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">封面设计</span>
                    </div>
                  </div>

                  {/* 模块 03 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">03 运营增长</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">多平台分发</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">评论区运营</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">私域引流</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">数据复盘</span>
                    </div>
                  </div>

                  {/* 模块 04 */}
                  <div className="py-[1.1rem]">
                    <div className="text-[12px] text-[#6b6b6b] mb-2 font-medium">04 变现实战</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">广告分成</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">知识付费</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">带货分销</span>
                      <span className="px-[10px] py-1 text-[12px] bg-[#f0efed] text-[#4a4845] rounded-[4px]">商业合作</span>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="pt-6">
                  <Link href="/courses/media" className="text-[13px] text-[#1a1a1a] border-b border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.4)] transition-colors">
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="mt-12 text-center">
            <Link href="/courses/full" className="inline-block px-6 py-3 text-[14px] text-[#1a1a1a] border border-[rgba(0,0,0,0.15)] rounded-sm hover:bg-[#f5f5f5] transition-colors">
              查看全套课程（含商业思维）
            </Link>
            <p className="text-xs text-[#9e9e9e] mt-3">AI + 自媒体 + 商业思维 = 完整的AI一人公司能力体系</p>
          </div>
        </div>
      </section>

      {/* ==================== 定价 ==================== */}
      <section className="py-20" id="pricing">
        <div className="container">
          {/* eyebrow */}
          <div className="text-center mb-6">
            <span className="text-xs font-normal text-[#6b6b6b] uppercase tracking-widest">定价</span>
          </div>

          {/* 主标题 */}
          <h2 className="text-[28px] font-normal text-center mb-8 text-[#1a1a1a]" style={{ letterSpacing: '-0.4px' }}>
            选择一个开始
          </h2>

          {/* 三列大容器 */}
          <div className="max-w-4xl mx-auto bg-white border border-[rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
            <div className="grid grid-cols-3">
              {/* 左列：AI 板块 */}
              <div className="p-6 border-r border-[rgba(0,0,0,0.1)]">
                <h3 className="text-base font-medium text-[#1a1a1a] mb-1">AI 板块</h3>
                <p className="text-sm text-[#6b6b6b] mb-4">独立开发 AI 产品</p>
                <div className="mb-4">
                  <span className="text-[16px] text-[#1a1a1a] font-normal">¥</span>
                  <span className="text-[36px] font-normal text-[#1a1a1a]" style={{ letterSpacing: '-1px' }}>499</span>
                </div>
                <p className="text-sm text-[#6b6b6b] mb-6">20节课程</p>
                <Link href="/courses/ai" className="inline-block w-full py-3 text-center border border-[rgba(0,0,0,0.15)] text-[#1a1a1a] text-sm hover:bg-[#f5f5f5] transition-colors rounded-sm">
                  单独购买
                </Link>
              </div>

              {/* 中列：推荐（深色） */}
              <div className="p-6 bg-[#18181b] border-r border-[rgba(255,255,255,0.1)]">
                <div className="mb-2">
                  <span className="text-[10px] text-white/45 bg-white/12 px-2 py-0.5 rounded-sm">推荐 · 最受欢迎</span>
                </div>
                <h3 className="text-base font-medium text-white mb-1">全套课程</h3>
                <p className="text-sm text-white/45 mb-4">AI + 自媒体 + 商业思维</p>
                <div className="mb-4">
                  <span className="text-[16px] text-white font-normal">¥</span>
                  <span className="text-[36px] font-normal text-white" style={{ letterSpacing: '-1px' }}>799</span>
                  <span className="text-[10px] text-[#22c55e] bg-[#22c55e]/20 px-2 py-0.5 ml-2 rounded-sm">省¥199</span>
                </div>
                <p className="text-sm text-white/45 mb-6">55节课程</p>
                <Link href="/courses/full" className="inline-block w-full py-3 text-center bg-white text-black text-sm hover:bg-gray-200 transition-colors rounded-sm">
                  立即购买
                </Link>
              </div>

              {/* 右列：自媒体板块 */}
              <div className="p-6">
                <h3 className="text-base font-medium text-[#1a1a1a] mb-1">自媒体板块</h3>
                <p className="text-sm text-[#6b6b6b] mb-4">自媒体变现体系</p>
                <div className="mb-4">
                  <span className="text-[16px] text-[#1a1a1a] font-normal">¥</span>
                  <span className="text-[36px] font-normal text-[#1a1a1a]" style={{ letterSpacing: '-1px' }}>499</span>
                </div>
                <p className="text-sm text-[#6b6b6b] mb-6">18节课程</p>
                <Link href="/courses/media" className="inline-block w-full py-3 text-center border border-[rgba(0,0,0,0.15)] text-[#1a1a1a] text-sm hover:bg-[#f5f5f5] transition-colors rounded-sm">
                  单独购买
                </Link>
              </div>
            </div>
          </div>

          {/* 底部信任行 */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[12px] text-[#6b6b6b]">支付宝支付</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[12px] text-[#6b6b6b]">永久可看</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[12px] text-[#6b6b6b]">进入学员群</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[12px] text-[#6b6b6b]">售前无忧咨询</span>
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
                  {/* 左侧头像 */}
                  <div className="w-16 h-16 bg-[#f5f5f5] rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/avatar.png" alt="路人" className="w-full h-full object-cover" />
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