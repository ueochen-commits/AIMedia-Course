import Link from "next/link";

export default function CoursesPage() {
  const aiCourses = [
    {
      module: "模块一：入门准备",
      lessons: [
        { name: "科学上网与注册谷歌账号", duration: "约15分钟" },
        { name: "注册ChatGPT、Claude、Gemini账号", duration: "约20分钟" },
        { name: "注册虚拟Visa卡，购买海外AI会员", duration: "约15分钟" },
      ],
    },
    {
      module: "模块二：AI工具基础使用",
      lessons: [
        { name: "认识主流大模型，了解各自特点和适用场景", duration: "约20分钟" },
        { name: "提示词工程入门，如何更好地和AI对话", duration: "约25分钟" },
        { name: "Markdown和JSON基础，看懂AI输出的格式", duration: "约15分钟" },
      ],
    },
    {
      module: "模块三：AI进阶应用",
      lessons: [
        { name: "用Obsidian或Notion构建个人AI知识库", duration: "约30分钟" },
        { name: "AI生成图片与设计，制作风格化海报", duration: "约25分钟" },
        { name: "AI视频生成入门，用Google Veo 2.0制作短片", duration: "约25分钟" },
      ],
    },
    {
      module: "模块四：用AI开发产品",
      lessons: [
        { name: "注册GitHub，配置代码仓库", duration: "约20分钟" },
        { name: "用Cursor或Claude开发个人网页", duration: "约40分钟" },
        { name: "Vibe Coding实战，用AI做一个App小程序", duration: "约45分钟" },
      ],
    },
  ];

  const mediaCourses = [
    {
      module: "模块一：自媒体认知与定位",
      lessons: [
        { name: "什么是真正的一人公司，和打工人的区别", duration: "" },
        { name: "如何找到你的内容定位，避免同质化", duration: "" },
        { name: "Build in Public方法论，用真实记录建立信任", duration: "" },
      ],
    },
    {
      module: "模块二：内容创作方法论",
      lessons: [
        { name: "爆款视频结构拆解，钩子+内容+悬念", duration: "" },
        { name: "脚本写作方法，从日报到视频文案的转化", duration: "" },
        { name: "封面设计原则，提升点击率的关键要素", duration: "" },
      ],
    },
    {
      module: "模块三：平台运营策略",
      lessons: [
        { name: "抖音、小红书、视频号的算法逻辑差异", duration: "" },
        { name: "多平台同步发布，提升内容曝光效率", duration: "" },
        { name: "私域流量运营，从粉丝到付费用户的转化", duration: "" },
      ],
    },
    {
      module: "模块四：变现体系搭建",
      lessons: [
        { name: "一人公司常见变现方式对比分析", duration: "" },
        { name: "知识付费产品设计，定价策略与产品矩阵", duration: "" },
        { name: "真实案例复盘：我是如何用AI做出第一个付费产品的", duration: "" },
      ],
    },
  ];

  return (
    <div>
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">课程列表</h1>
          <p className="text-[#666] mb-12">选择你感兴趣的板块，开始学习</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI 板块 */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">AI 板块</h2>
                  <p className="text-[#666] text-sm">12节课程</p>
                </div>
                <div className="text-2xl font-bold">¥499</div>
              </div>

              <div className="space-y-4">
                {aiCourses.map((module, idx) => (
                  <details key={idx} className="border border-[#E8E8E8] rounded-lg">
                    <summary className="p-4 cursor-pointer font-semibold list-none">
                      {module.module}
                    </summary>
                    <div className="px-4 pb-4 space-y-2">
                      {module.lessons.map((lesson, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-t border-[#E8E8E8]"
                        >
                          <span className="text-sm">{lesson.name}</span>
                          <span className="text-xs text-[#666]">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-6">
                <button className="btn btn-primary w-full">立即购买</button>
              </div>
            </div>

            {/* 自媒体板块 */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">自媒体板块</h2>
                  <p className="text-[#666] text-sm">12节课程</p>
                </div>
                <div className="text-2xl font-bold">¥499</div>
              </div>

              <div className="space-y-4">
                {mediaCourses.map((module, idx) => (
                  <details key={idx} className="border border-[#E8E8E8] rounded-lg">
                    <summary className="p-4 cursor-pointer font-semibold list-none">
                      {module.module}
                    </summary>
                    <div className="px-4 pb-4 space-y-2">
                      {module.lessons.map((lesson, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-t border-[#E8E8E8]"
                        >
                          <span className="text-sm">{lesson.name}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-6">
                <button className="btn btn-primary w-full">立即购买</button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="card inline-block">
              <h3 className="text-xl font-semibold mb-2">全套课程</h3>
              <p className="text-[#666] text-sm mb-4">AI板块 + 自媒体板块，一次买断</p>
              <div className="text-3xl font-bold mb-4">¥799</div>
              <button className="btn btn-primary">立即购买</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}