"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Play, Lock, CheckCircle, ChevronDown } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { PaymentModal } from "@/components/PaymentModal";
import { supabase } from "@/lib/supabase";

// 测试视频 URL
const TEST_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

// AI板块课程数据
const aiCourseData = {
  name: "AI 板块",
  description: "从零基础到用AI开发产品，掌握完整一人公司技术栈，能用Claude Code做出真实可上线的网站",
  price: 499,
  target: "完全零基础，从未接触过AI工具，甚至不会翻墙",
  outcome: "掌握完整一人公司技术栈，能用Claude Code做出真实可上线的完整网站产品",
  totalLessons: 32,
  modules: [
    {
      name: "课前引导（免费）",
      description: "理解一人公司框架，知道学完能做什么",
      lessons: [
        { id: 1, name: "什么是一人公司：概念、流程和整体思路", outcome: "理解一人公司的完整框架，知道学完这门课能做什么", duration: "约20分钟", free: true },
        { id: 2, name: "如何使用这门课程", outcome: "知道网站怎么登录、视频怎么播放、学员群在哪里", duration: "约10分钟", free: true },
      ]
    },
    {
      name: "模块一：入门准备",
      description: "解决入门门槛，手把手完成所有注册",
      lessons: [
        { id: 3, name: "科学上网：翻墙工具下载安装与使用", outcome: "能访问Google、ChatGPT等境外网站（手机+电脑）", duration: "约25分钟", free: false },
        { id: 4, name: "Chrome浏览器安装与基础使用", outcome: "安装Chrome，设置中文界面，解释每个常用按钮", duration: "约15分钟", free: false },
        { id: 5, name: "注册Gmail邮箱（手把手）", outcome: "拥有Gmail，遇到英文界面逐个翻译，手把手完成注册", duration: "约20分钟", free: false },
        { id: 6, name: "注册ChatGPT账号与基础使用", outcome: "能打开ChatGPT，发出第一条消息，了解基础界面", duration: "约20分钟", free: false },
        { id: 7, name: "注册Claude账号与基础使用", outcome: "能使用Claude，了解和ChatGPT的区别和适用场景", duration: "约20分钟", free: false },
        { id: 8, name: "注册Gemini账号与基础使用", outcome: "能使用Gemini，了解三大模型各自特点", duration: "约15分钟", free: false },
        { id: 9, name: "虚拟Visa卡申请与AI会员购买", outcome: "成功购买ChatGPT Plus或Claude Pro，解锁完整功能", duration: "约25分钟", free: false },
      ]
    },
    {
      name: "模块二：AI工具实战",
      description: "掌握主流AI工具，高效完成工作",
      lessons: [
        { id: 10, name: "三大模型怎么选：ChatGPT vs Claude vs Gemini", outcome: "知道写作用哪个、编程用哪个、搜索用哪个", duration: "约25分钟", free: false },
        { id: 11, name: "提示词工程实战：如何让AI真正听懂你的话", outcome: "掌握5个核心技巧，AI回复质量明显提升", duration: "约30分钟", free: false },
        { id: 12, name: "AI写作实战：文案、方案、邮件全覆盖", outcome: "10分钟完成以前需要1小时的写作任务", duration: "约25分钟", free: false },
        { id: 13, name: "AI图片生成：国内用即梦，国外用Midjourney", outcome: "能生成符合需求的图片，优先教国内免翻墙的即梦", duration: "约30分钟", free: false },
        { id: 14, name: "AI视频生成：国内用即梦/可灵，国外用Veo 2.0", outcome: "能生成15-30秒短视频，重点教国内工具", duration: "约30分钟", free: false },
        { id: 15, name: "Markdown和JSON：看懂AI输出的格式", outcome: "能读懂AI输出的结构化内容，不再觉得看不懂", duration: "约15分钟", free: false },
      ]
    },
    {
      name: "模块三：AI效率工具",
      description: "构建个人AI工作流，提升效率",
      lessons: [
        { id: 16, name: "用Obsidian搭建AI个人知识库", outcome: "建立个人第二大脑，学到的东西不再丢失", duration: "约35分钟", free: false },
        { id: 17, name: "NotebookLM实战：让AI读懂你的文档", outcome: "上传任何资料，让AI帮你总结和回答问题", duration: "约25分钟", free: false },
        { id: 18, name: "AI辅助决策：用Claude做分析和规划", outcome: "掌握用AI做复杂决策的完整框架", duration: "约25分钟", free: false },
        { id: 19, name: "用AI搭建每日工作流", outcome: "把AI融入日常工作，每天节省1-2小时", duration: "约25分钟", free: false },
      ]
    },
    {
      name: "模块四：一人公司完整技术栈",
      description: "用Claude Code把所有工具串联成完整产品开发体系",
      lessons: [
        { id: 20, name: "用AI做产品前的需求分析", outcome: "学会在动手前把想做的东西说清楚，避免做一半卡住", duration: "约25分钟", free: false },
        { id: 21, name: "GitHub：代码托管与版本管理入门", outcome: "注册GitHub，建立第一个仓库，理解代码托管的意义", duration: "约20分钟", free: false },
        { id: 22, name: "Claude Code：用自然语言写代码", outcome: "安装Claude Code，完成第一个编程任务，零基础也能用", duration: "约25分钟", free: false },
        { id: 23, name: "Supabase：搭建后端和数据库", outcome: "注册Supabase，建立第一张数据表，理解数据库是什么", duration: "约30分钟", free: false },
        { id: 24, name: "Clerk：5分钟搭建用户注册登录系统", outcome: "接入Clerk，网站拥有完整的用户注册登录功能", duration: "约25分钟", free: false },
        { id: 25, name: "Resend：给用户发邮件通知", outcome: "接入Resend，网站能自动发送注册验证邮件和通知", duration: "约20分钟", free: false },
        { id: 26, name: "Vercel：一键部署网站上线", outcome: "把代码部署到Vercel，网站正式上线，全球可访问", duration: "约20分钟", free: false },
        { id: 27, name: "Namecheap + Cloudflare：域名购买与网络加速", outcome: "买域名绑定网站，配置Cloudflare让国内用户访问更顺畅", duration: "约25分钟", free: false },
        { id: 28, name: "Sentry：实时监控网站错误", outcome: "接入Sentry，用户遇到问题第一时间收到报警通知", duration: "约20分钟", free: false },
        { id: 29, name: "Tally：免费搭建用户反馈表单", outcome: "用Tally建表单，嵌入网站，收集用户反馈和报名信息", duration: "约15分钟", free: false },
        { id: 30, name: "PostHog：分析用户行为数据", outcome: "接入PostHog，知道用户在网站上做了什么，优化产品", duration: "约20分钟", free: false },
        { id: 31, name: "实战：用完整技术栈做一个个人落地页", outcome: "串联所有工具，完成一个有用户系统的真实落地页", duration: "约50分钟", free: false },
        { id: 32, name: "案例复盘：我是怎么用AI做出TradeGrail的", outcome: "了解完整AI产品开发流程，看到真实案例，建立信心", duration: "约40分钟", free: false },
      ]
    },
  ],
};

// 自媒体板块课程数据
const mediaCourseData = {
  name: "自媒体板块",
  description: "从心态建设到拍摄剪辑到运营变现，学完能持续出内容并变现",
  price: 499,
  target: "想做自媒体但不知道从哪开始，或已有账号但粉丝不涨、内容没人看",
  outcome: "掌握内容创作方法论，能持续产出内容并建立变现体系",
  totalLessons: 28,
  modules: [
    {
      name: "课前引导（免费）",
      description: "心态建设是做自媒体最重要也最容易被忽视的一关",
      lessons: [
        { id: 1, name: "开始之前：做自媒体最重要的心态建设", outcome: "突破心理障碍，明白自己一定有东西可以拍，敢于迈出第一步", duration: "约25分钟", free: true },
        { id: 2, name: "如何使用这门课程", outcome: "知道学习顺序、适合什么人学、学完能做什么", duration: "约10分钟", free: true },
      ]
    },
    {
      name: "模块一：视频制作基础",
      description: "用普通手机拍出好看的视频，掌握基础剪辑",
      lessons: [
        { id: 3, name: "手机拍摄技巧：构图、补光、稳定", outcome: "用普通手机拍出好看的视频，不需要买设备", duration: "约25分钟", free: false },
        { id: 4, name: "剪映入门：基础剪辑、加字幕、加背景音乐", outcome: "完成一条视频的基础剪辑，加上字幕和配乐", duration: "约30分钟", free: false },
        { id: 5, name: "剪映实战：完整剪出一条60秒短视频", outcome: "从原始素材到成品全流程，跟着做出一条完整视频", duration: "约40分钟", free: false },
        { id: 6, name: "封面制作：用Canva做出高点击率封面", outcome: "掌握封面设计原则，做出让人想点的封面，不需要PS", duration: "约25分钟", free: false },
      ]
    },
    {
      name: "模块二：自媒体认知与定位",
      description: "建立正确认知，找到差异化定位",
      lessons: [
        { id: 7, name: "什么是真正的一人公司（vs 打工人）", outcome: "建立正确创业认知，明白为什么要做自媒体", duration: "约20分钟", free: false },
        { id: 8, name: "如何找到你的差异化定位", outcome: "完成个人定位分析，确定账号方向，避免同质化", duration: "约25分钟", free: false },
        { id: 9, name: "Build in Public：用真实记录建立信任", outcome: "理解为什么真实比精致更有效，开始实践", duration: "约20分钟", free: false },
        { id: 10, name: "各平台算法逻辑对比：抖音、快手、视频号", outcome: "知道每个平台的推流逻辑，针对性投入，不再乱发", duration: "约25分钟", free: false },
      ]
    },
    {
      name: "模块三：爆款内容创作",
      description: "掌握万能内容公式，持续产出爆款",
      lessons: [
        { id: 11, name: "爆款视频结构拆解：钩子+内容+悬念", outcome: "掌握万能视频结构，套用到任何选题", duration: "约25分钟", free: false },
        { id: 12, name: "选题方法论：如何找到有人看的话题", outcome: "建立选题库，每周不再为拍什么发愁", duration: "约25分钟", free: false },
        { id: 13, name: "脚本写作：从想法到完整文案的流程", outcome: "能在1小时内写完一条视频的完整脚本", duration: "约30分钟", free: false },
        { id: 14, name: "用AI辅助写文案：AI打草稿，自己打磨", outcome: "AI帮你写初稿节省时间，最终靠自己调整", duration: "约15分钟", free: false },
        { id: 15, name: "封面设计法则：5秒内抓住用户", outcome: "掌握高点击率封面的核心原则", duration: "约20分钟", free: false },
        { id: 16, name: "剪辑节奏：让观众看完的关键技巧", outcome: "掌握提升完播率的剪辑节奏，减少用户划走", duration: "约25分钟", free: false },
      ]
    },
    {
      name: "模块四：平台运营策略",
      description: "获取流量，建立私域，持续增长",
      lessons: [
        { id: 17, name: "多平台同步发布：一条内容最大化曝光", outcome: "搭建同步发布流程，5分钟完成多平台投放", duration: "约20分钟", free: false },
        { id: 18, name: "评论区运营：让算法持续推流的秘诀", outcome: "掌握互动技巧，让算法判定你的内容有价值", duration: "约20分钟", free: false },
        { id: 19, name: "私域流量：从粉丝到真实用户的转化", outcome: "建立公众号和社群，沉淀最忠实的受众", duration: "约25分钟", free: false },
        { id: 20, name: "数据复盘：用数据指导内容迭代", outcome: "掌握关键数据指标，判断什么内容值得继续做", duration: "约20分钟", free: false },
      ]
    },
    {
      name: "模块五：变现体系搭建",
      description: "将流量转化为收入",
      lessons: [
        { id: 21, name: "如何接到第一个广告：主动找品牌而不是等", outcome: "掌握主动联系品牌的方法，5万粉丝以下也能接到单", duration: "约25分钟", free: false },
        { id: 22, name: "知识付费产品设计与定价策略", outcome: "设计出自己的第一个知识产品，学会合理定价", duration: "约30分钟", free: false },
        { id: 23, name: "产品矩阵搭建：从体验课到终身会员", outcome: "建立完整的产品梯级，引导用户持续升级", duration: "约25分钟", free: false },
        { id: 24, name: "案例复盘：我是如何从零做自媒体的", outcome: "路人从2018年到现在的真实经历，快手一周涨粉30万背后的方法", duration: "约35分钟", free: false },
      ]
    },
  ],
};

// 商业思维板块（仅全套课程）
const businessCourseData = {
  name: "商业思维板块",
  description: "建立商业思维，看懂变现逻辑，这是全套独有的核心差异化内容",
  price: 499,
  exclusive: true,
  totalLessons: 15,
  modules: [
    {
      name: "模块一：商业认知基础",
      description: "理解商业本质，建立创业者思维",
      lessons: [
        { id: 1, name: "什么是商业模式：用TradeGrail拆解真实案例", outcome: "能看懂一个产品是靠什么赚钱的", duration: "约25分钟" },
        { id: 2, name: "从打工思维到老板思维：两种人的本质差异", outcome: "识别自己的思维盲区，建立主动创造价值的视角", duration: "约25分钟" },
        { id: 3, name: "一人公司的商业逻辑：最小成本验证想法", outcome: "掌握MVP思维，不再等'准备好'才开始", duration: "约20分钟" },
      ]
    },
    {
      name: "模块二：产品思维",
      description: "学会从用户视角设计产品",
      lessons: [
        { id: 4, name: "什么是好产品：用户要的和你做的为什么不一样", outcome: "学会从用户视角思考，而不是从自己视角出发", duration: "约25分钟" },
        { id: 5, name: "MVP方法论：为什么要先做最简单的版本", outcome: "能在1周内做出可验证需求的最小产品", duration: "约20分钟" },
        { id: 6, name: "定价策略：定价背后的心理学和逻辑", outcome: "掌握3种定价方法，不再凭感觉定价", duration: "约25分钟" },
        { id: 7, name: "产品迭代逻辑：用数据和反馈驱动改进", outcome: "建立数据驱动的产品改进流程", duration: "约20分钟" },
      ]
    },
    {
      name: "模块三：五种变现模式深度拆解",
      description: "广告、知识付费、SaaS、服务、联盟营销",
      lessons: [
        { id: 8, name: "广告变现：单条广告报价 = 粉丝量 × 0.01-0.05元", outcome: "了解广告变现的逻辑和适合条件", duration: "约25分钟" },
        { id: 9, name: "知识付费：最适合路人的变现方式", outcome: "掌握知识付费产品的设计和销售方法", duration: "约25分钟" },
        { id: 10, name: "SaaS产品变现：最有价值的商业模式", outcome: "理解订阅制产品的设计和运营", duration: "约25分钟" },
        { id: 11, name: "服务变现：咨询、代做、陪跑", outcome: "掌握服务类产品的定价和交付", duration: "约25分钟" },
        { id: 12, name: "联盟营销：推荐别人的产品获得佣金", outcome: "学会做affiliate推广增加收入", duration: "约20分钟" },
      ]
    },
    {
      name: "模块四：路人的真实商业复盘",
      description: "真实数据、真实错误、真实决策过程",
      lessons: [
        { id: 13, name: "从离职到第一笔收入：完整时间线和数据", outcome: "看到真实的创业节奏，建立可参考的执行模板", duration: "约30分钟" },
        { id: 14, name: "我做过的错误决策和付出的代价", outcome: "避免路人踩过的坑，少走弯路", duration: "约25分钟" },
        { id: 15, name: "产品定价的决策过程：为什么定这个价", outcome: "理解定价逻辑，学会为自己的产品定价", duration: "约20分钟" },
      ]
    },
  ],
};

const fullCourseData = {
  name: "全套课程",
  description: "AI板块 + 自媒体板块 + 商业思维板块，一次购买，完整体系",
  price: 799,
  includes: ["AI板块（约32节课）", "自媒体板块（约28节课）", "商业思维板块（15节课，仅全套专享）"],
};

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const getCourseData = () => {
    switch (slug) {
      case "ai":
        return aiCourseData;
      case "media":
        return mediaCourseData;
      case "business":
        return businessCourseData;
      case "full":
        return fullCourseData;
      default:
        return null;
    }
  };

  const course = getCourseData();
  const [user, setUser] = useState<{ email: string; id: string } | null>(null);
  const [purchases, setPurchases] = useState<string[]>([]);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser({ email: user.email || "", id: user.id });
      const { data: purchases } = await supabase
        .from("purchases")
        .select("course_id")
        .eq("user_id", user.id)
        .eq("payment_status", "completed");
      if (purchases) setPurchases(purchases.map(p => p.course_id));
    }
  };

  const hasPurchased = purchases.includes(slug) || purchases.includes("full");

  const handleFreePreview = () => {
    if (course && "modules" in course) {
      setExpandedModule(0);
      setTimeout(() => {
        document.getElementById("course-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handlePlayVideo = (lesson: any) => {
    if (lesson.free || hasPurchased) {
      setCurrentVideoTitle(lesson.name);
      setCurrentVideoUrl(lesson.videoUrl || TEST_VIDEO_URL);
      setIsVideoOpen(true);
    }
  };

  const handleBuy = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = () => {
    checkUser();
    setIsPaymentOpen(false);
  };

  if (!course) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">课程不存在</h1>
      </div>
    );
  }

  const isFullCourse = slug === "full";

  return (
    <div>
      <section className="py-12">
        <div className="container">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-[#999] mb-8">
            <Link href="/" className="hover:text-[#1A1A2E] transition-colors">首页</Link>
            <span className="text-[#DDD]">/</span>
            <Link href="/courses" className="hover:text-[#1A1A2E] transition-colors">课程</Link>
            <span className="text-[#DDD]">/</span>
            <span className="text-[#1A1A2E] font-medium">{course.name}</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* 课程内容 */}
            <div className="lg:col-span-3">
              {/* 标题区域 */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-3 text-[#1A1A2E]">
                  {course.name}
                </h1>
                <p className="text-lg text-[#666] leading-relaxed">{course.description}</p>
              </div>

              {/* 课程 info card */}
              {"target" in course && (
                <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden", marginBottom: "2rem" }}>
                  {/* header */}
                  <div style={{ background: "#18181b", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", background: "transparent", border: "none", padding: 0, borderRadius: 0 }}>课程信息</div>
                    <div style={{ background: "rgba(255,255,255,0.1)", border: "none", outline: "none", boxShadow: "none", borderRadius: "3px", padding: "3px 9px", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{course.name}</div>
                  </div>
                  {/* 目标学员 */}
                  <div style={{ display: "flex", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ width: "100px", flexShrink: 0, padding: "1.25rem 1.5rem", fontSize: "12px", fontWeight: 500, color: "#615d59", borderRight: "0.5px solid rgba(0,0,0,0.06)" }}>目标学员</div>
                    <div style={{ padding: "1.25rem 1.5rem", fontSize: "14px", color: "#18181b", lineHeight: 1.6 }}>{course.target}</div>
                  </div>
                  {/* 学习成果 */}
                  <div style={{ display: "flex", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ width: "100px", flexShrink: 0, padding: "1.25rem 1.5rem", fontSize: "12px", fontWeight: 500, color: "#615d59", borderRight: "0.5px solid rgba(0,0,0,0.06)" }}>学习成果</div>
                    <div style={{ padding: "1.25rem 1.5rem", fontSize: "14px", color: "#18181b", lineHeight: 1.6 }}>
                      <span style={{ fontWeight: 500 }}>{course.outcome}</span>
                    </div>
                  </div>
                  {/* 总课时 */}
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100px", flexShrink: 0, padding: "1.25rem 1.5rem", fontSize: "12px", fontWeight: 500, color: "#615d59", borderRight: "0.5px solid rgba(0,0,0,0.06)" }}>总课时</div>
                    <div style={{ padding: "1.25rem 1.5rem", fontSize: "14px", color: "#18181b", lineHeight: 1.6 }}>
                      <span style={{ fontSize: "15px", fontWeight: 500 }}>{course.totalLessons} 节</span>
                      <span style={{ fontSize: "12px", color: "#a39e98", marginLeft: "6px" }}>每节 15–45 分钟</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 试看提示 */}
              {"modules" in course && (
                <div className="bg-gradient-to-r from-[#FDFCFB] to-[#F8F6F3] rounded-2xl p-6 mb-10 border border-[#F0EDE8]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-[#1A1A2E] flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-[#1A1A2E]">免费试看</div>
                        <div className="text-sm text-[#999]">每个板块前2节课免费试看</div>
                      </div>
                    </div>
                    <button
                      onClick={handleFreePreview}
                      className="px-6 py-3 bg-[#1A1A2E] text-white rounded-full font-medium text-sm hover:bg-[#2A2A3E] transition-all duration-300 hover:scale-105"
                    >
                      立即试看
                    </button>
                  </div>
                </div>
              )}

              {/* 课程模块列表 */}
              {"modules" in course && (
                <div id="course-list" className="space-y-4">
                  <div className="text-xs text-[#999] uppercase tracking-wider font-medium mb-6">课程目录</div>
                  {(course.modules || []).map((module: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl overflow-hidden transition-all duration-300 border border-[#F0EDE8]"
                      style={{
                        boxShadow: expandedModule === idx ? '0 8px 32px rgba(26, 26, 46, 0.1)' : '0 2px 12px rgba(26, 26, 46, 0.04)'
                      }}
                    >
                      <div
                        className="flex items-center gap-5 p-6 cursor-pointer group"
                        onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                      >
                        {/* 模块编号 */}
                        <div className="w-10 h-10 rounded-lg bg-[#F7F6F3] flex items-center justify-center text-[#1A1A2E] font-semibold text-lg flex-shrink-0 group-hover:bg-[#1A1A2E] group-hover:text-white transition-all duration-300">
                          {String(idx + 1).padStart(2, '0')}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-lg text-[#1A1A2E] mb-1 group-hover:text-[#4A4A6A] transition-colors">{module.name}</h3>
                          <p className="text-sm text-[#999] truncate">{module.description}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm text-[#999]">{module.lessons.length}节</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedModule === idx ? 'rotate-180 bg-[#1A1A2E] text-white' : 'bg-[#F7F6F3] text-[#999]'}`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {expandedModule === idx && (
                        <div className="border-t border-[#F0EDE8] bg-[#FBFBFA]">
                          {module.lessons.map((lesson: any, i: number) => {
                            const canPlay = lesson.free || hasPurchased;
                            return (
                              <div
                                key={i}
                                className={`flex items-center justify-between p-5 pl-[90px] border-b border-[#F0EDE8] last:border-b-0 transition-colors duration-200 ${canPlay ? 'cursor-pointer hover:bg-[#F7F6F3]' : ''}`}
                                onClick={() => handlePlayVideo(lesson)}
                              >
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                  {canPlay ? (
                                    <span className="w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                      <Play className="w-3 h-3 ml-0.5" />
                                    </span>
                                  ) : (
                                    <span className="w-7 h-7 rounded-full bg-[#F0EDE8] text-[#CCC] flex items-center justify-center flex-shrink-0">
                                      <Lock className="w-3 h-3" />
                                    </span>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-[#1A1A2E] truncate">{lesson.name}</div>
                                    <div className="text-xs text-[#999] truncate mt-0.5">{lesson.outcome}</div>
                                  </div>
                                  {lesson.free && (
                                    <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full flex-shrink-0">
                                      免费
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-[#BBB] ml-4 flex-shrink-0 whitespace-nowrap">
                                  {lesson.duration}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 全套课程展示 */}
              {isFullCourse && (
                <div className="bg-white rounded-2xl p-8 border border-[#F0EDE8]">
                  <h3 className="text-xl font-semibold text-[#1A1A2E] mb-6">全套课程包含</h3>
                  <div className="space-y-4">
                    {fullCourseData.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center text-xs">✓</span>
                        <span className="text-[#666]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-[#999] text-sm leading-relaxed">
                    商业思维板块是全套独有内容，单买AI板块或自媒体板块无法获得，让¥799有充分购买理由。
                  </p>
                </div>
              )}
            </div>

            {/* 购买侧边栏 */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl p-8 border border-[#F0EDE8]" style={{ boxShadow: '0 8px 40px rgba(26, 26, 46, 0.08)' }}>
                <div className="text-4xl font-bold text-[#1A1A2E] mb-2">¥{course.price}</div>
                <p className="text-sm text-[#999] mb-8">
                  {"totalLessons" in course ? `${course.totalLessons}节课程` : "AI + 自媒体 + 商业思维"}
                </p>

                {hasPurchased ? (
                  <Link href={`/learn/${slug}`} className="block w-full py-4 bg-[#1A1A2E] text-center rounded-full font-medium hover:bg-[#2A2A3E] transition-all duration-300" style={{ color: "#ffffff" }}>
                    开始学习
                  </Link>
                ) : (
                  <>
                    <button onClick={handleBuy} className="w-full py-4 bg-[#1A1A2E] text-white rounded-full font-medium text-lg hover:bg-[#2A2A3E] transition-all duration-300 hover:scale-[1.02] mb-6">
                      立即购买
                    </button>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-[#666]">永久可看</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-[#666]">进入学员群</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-[#666]">每周直播答疑</span>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-8 pt-6 border-t border-[#F0EDE8]">
                  <p className="text-sm text-[#999]">
                    <span className="text-green-500 mr-1">✓</span> 支持支付宝支付
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 视频播放器弹窗 */}
      <VideoPlayer
        videoUrl={currentVideoUrl}
        title={currentVideoTitle}
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* 支付弹窗 */}
      {course && (
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          course={{ id: slug, name: course.name, price: course.price }}
          userEmail={user?.email || null}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}