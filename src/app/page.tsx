import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              从零到用AI做产品
            </h1>
            <p className="text-xl text-[#666] mb-10">
              体系化的AI入门与自媒体创业学习路径，帮助AI零基础用户快速上手AI工具
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#course-cards" className="btn btn-primary">
                立即购买
              </a>
              <a href="#outline" className="btn btn-secondary">
                查看课程大纲
              </a>
            </div>
            <p className="text-sm text-[#666]">
              微信咨询：luren-ai（备注"课程"）
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-[#F7F6F3]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold">50万+</div>
              <div className="text-[#666] text-sm">全网粉丝</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-[#666] text-sm">学员</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2个</div>
              <div className="text-[#666] text-sm">板块课程</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Products */}
      <section className="py-24" id="course-cards">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">课程板块</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* AI 板块 */}
            <div className="card card-hover">
              <h3 className="text-xl font-semibold mb-3">AI 板块</h3>
              <p className="text-[#666] text-sm mb-6">
                科学上网 → AI工具基础 → AI进阶应用 → 用AI开发产品
              </p>
              <div className="text-2xl font-bold mb-4">¥499</div>
              <Link href="/courses/ai" className="btn btn-secondary w-full">
                查看详情
              </Link>
            </div>

            {/* 全套课程 - 突出显示 */}
            <div className="card card-hover border-2 border-[#1A1A2E]" style={{ borderColor: '#1A1A2E' }}>
              <div className="text-xs font-semibold text-[#1A1A2E] mb-2">最划算</div>
              <h3 className="text-xl font-semibold mb-3">全套课程</h3>
              <p className="text-[#666] text-sm mb-6">
                AI板块 + 自媒体板块，一次买断
              </p>
              <div className="text-2xl font-bold mb-4">¥799</div>
              <Link href="/courses/full" className="btn btn-primary w-full">
                立即购买
              </Link>
            </div>

            {/* 自媒体板块 */}
            <div className="card card-hover">
              <h3 className="text-xl font-semibold mb-3">自媒体板块</h3>
              <p className="text-[#666] text-sm mb-6">
                自媒体认知 → 内容创作 → 平台运营 → 变现体系
              </p>
              <div className="text-2xl font-bold mb-4">¥499</div>
              <Link href="/courses/media" className="btn btn-secondary w-full">
                查看详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline */}
      <section className="py-24 bg-[#F7F6F3]" id="outline">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">课程大纲</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {/* AI板块 */}
            <details className="card">
              <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                <span>AI 板块</span>
                <span className="text-[#666] text-sm">12节课程</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E8E8] space-y-2 text-sm text-[#666]">
                <div>模块一：入门准备（科学上网、注册账号、虚拟卡）</div>
                <div>模块二：AI工具基础（主流大模型、提示词工程、Markdown）</div>
                <div>模块三：AI进阶应用（知识库、图片生成、视频生成）</div>
                <div>模块四：用AI开发产品（GitHub、Cursor开发、App开发）</div>
              </div>
            </details>

            {/* 自媒体板块 */}
            <details className="card">
              <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                <span>自媒体板块</span>
                <span className="text-[#666] text-sm">12节课程</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E8E8] space-y-2 text-sm text-[#666]">
                <div>模块一：自媒体认知与定位（一人公司、内容定位、Build in Public）</div>
                <div>模块二：内容创作方法论（爆款结构、脚本写作、封面设计）</div>
                <div>模块三：平台运营策略（算法逻辑、多平台发布、私域运营）</div>
                <div>模块四：变现体系搭建（变现方式、产品设计、案例复盘）</div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">关于创始人</h2>
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">路人</h3>
              <p className="text-[#666] mb-4">
                全网拥有50-60万粉丝的自媒体博主，具备扎实的AI开发实战经验。
              </p>
              <p className="text-[#666] mb-4">
                已独立开发上线 TradeGrail 交易复盘工具，丰富的自媒体运营经验。
              </p>
              <div className="pt-4 border-t border-[#E8E8E8]">
                <div className="text-sm text-[#666]">
                  <span className="font-semibold">核心数据：</span>
                  抖音18万粉丝 / 公众号10万+粉丝 / 知识付费月收入3-5万
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F7F6F3]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="card">
              <summary className="cursor-pointer font-semibold list-none">
                Q: 课程是视频还是图文？
              </summary>
              <p className="mt-3 text-[#666] text-sm">
                课程以视频形式提供，每节课15-45分钟不等，附带课程PPT和练习材料。
              </p>
            </details>

            <details className="card">
              <summary className="cursor-pointer font-semibold list-none">
                Q: 购买后可以随时看吗？
              </summary>
              <p className="mt-3 text-[#666] text-sm">
                是的，付费后永久可看，支持断点续播。
              </p>
            </details>

            <details className="card">
              <summary className="cursor-pointer font-semibold list-none">
                Q: 有学员群吗？
              </summary>
              <p className="mt-3 text-[#666] text-sm">
                购买后会自动拉你进入微信学员群，每周一次直播答疑，日常问题随时解答。
              </p>
            </details>

            <details className="card">
              <summary className="cursor-pointer font-semibold list-none">
                Q: 零基础可以学吗？
              </summary>
              <p className="mt-3 text-[#666] text-sm">
                可以的，课程从最基础的科学上网开始讲起，专为零基础学员设计。
              </p>
            </details>

            <details className="card">
              <summary className="cursor-pointer font-semibold list-none">
                Q: 可以分期付款吗？
              </summary>
              <p className="mt-3 text-[#666] text-sm">
                目前不支持分期，但有早鸟优惠码可使用（限量50个，先到先得）。
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}