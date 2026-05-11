"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Play, Lock, ChevronDown, Menu } from "lucide-react";
import { supabase } from "@/lib/supabase";

const aiCourseData = {
  name: "AI 板块",
  price: 499,
  modules: [
    {
      name: "课前引导（免费）",
      lessons: [
        { id: 1, name: "什么是一人公司：概念、流程和整体思路", duration: "约20分钟", free: true, lessonId: "959f4268-e5e4-44c3-826f-747b53cd342d" },
        { id: 2, name: "如何使用这门课程", duration: "约10分钟", free: true },
      ],
    },
    {
      name: "模块一：入门准备",
      lessons: [
        { id: 3, name: "科学上网：翻墙工具下载安装与使用", duration: "约25分钟", free: false },
        { id: 4, name: "Chrome浏览器安装与基础使用", duration: "约15分钟", free: false },
        { id: 5, name: "注册Gmail邮箱（手把手）", duration: "约20分钟", free: false },
        { id: 6, name: "注册ChatGPT账号与基础使用", duration: "约20分钟", free: false },
        { id: 7, name: "注册Claude账号与基础使用", duration: "约20分钟", free: false },
        { id: 8, name: "注册Gemini账号与基础使用", duration: "约15分钟", free: false },
        { id: 9, name: "虚拟Visa卡申请与AI会员购买", duration: "约25分钟", free: false },
      ],
    },
    {
      name: "模块二：AI工具实战",
      lessons: [
        { id: 10, name: "三大模型怎么选：ChatGPT vs Claude vs Gemini", duration: "约25分钟", free: false },
        { id: 11, name: "提示词工程实战：如何让AI真正听懂你的话", duration: "约30分钟", free: false },
        { id: 12, name: "AI写作实战：文案、方案、邮件全覆盖", duration: "约25分钟", free: false },
        { id: 13, name: "AI图片生成：国内用即梦，国外用Midjourney", duration: "约30分钟", free: false },
        { id: 14, name: "AI视频生成：国内用即梦/可灵，国外用Veo 2.0", duration: "约30分钟", free: false },
        { id: 15, name: "Markdown和JSON：看懂AI输出的格式", duration: "约15分钟", free: false },
      ],
    },
    {
      name: "模块三：AI效率工具",
      lessons: [
        { id: 16, name: "用Obsidian搭建AI个人知识库", duration: "约35分钟", free: false },
        { id: 17, name: "NotebookLM实战：让AI读懂你的文档", duration: "约25分钟", free: false },
        { id: 18, name: "AI辅助决策：用Claude做分析和规划", duration: "约25分钟", free: false },
        { id: 19, name: "用AI搭建每日工作流", duration: "约25分钟", free: false },
      ],
    },
    {
      name: "模块四：一人公司完整技术栈",
      lessons: [
        { id: 20, name: "用AI做产品前的需求分析", duration: "约25分钟", free: false },
        { id: 21, name: "GitHub：代码托管与版本管理入门", duration: "约20分钟", free: false },
        { id: 22, name: "Claude Code：用自然语言写代码", duration: "约25分钟", free: false },
        { id: 23, name: "Supabase：搭建后端和数据库", duration: "约30分钟", free: false },
        { id: 24, name: "Clerk：5分钟搭建用户注册登录系统", duration: "约25分钟", free: false },
        { id: 25, name: "Resend：给用户发邮件通知", duration: "约20分钟", free: false },
        { id: 26, name: "Vercel：一键部署网站上线", duration: "约20分钟", free: false },
        { id: 27, name: "Namecheap + Cloudflare：域名购买与网络加速", duration: "约25分钟", free: false },
        { id: 28, name: "Sentry：实时监控网站错误", duration: "约20分钟", free: false },
        { id: 29, name: "Tally：免费搭建用户反馈表单", duration: "约15分钟", free: false },
        { id: 30, name: "PostHog：分析用户行为数据", duration: "约20分钟", free: false },
        { id: 31, name: "实战：用完整技术栈做一个个人落地页", duration: "约50分钟", free: false },
        { id: 32, name: "案例复盘：我是怎么用AI做出TradeGrail的", duration: "约40分钟", free: false },
      ],
    },
  ],
};

const mediaCourseData = {
  name: "自媒体板块",
  price: 499,
  modules: [
    {
      name: "课前引导（免费）",
      lessons: [
        { id: 1, name: "开始之前：做自媒体最重要的心态建设", duration: "约25分钟", free: true },
        { id: 2, name: "如何使用这门课程", duration: "约10分钟", free: true },
      ],
    },
    {
      name: "模块一：视频制作基础",
      lessons: [
        { id: 3, name: "手机拍摄技巧：构图、补光、稳定", duration: "约25分钟", free: false },
        { id: 4, name: "剪映入门：基础剪辑、加字幕、加背景音乐", duration: "约30分钟", free: false },
        { id: 5, name: "剪映实战：完整剪出一条60秒短视频", duration: "约40分钟", free: false },
        { id: 6, name: "封面制作：用Canva做出高点击率封面", duration: "约25分钟", free: false },
      ],
    },
    {
      name: "模块二：自媒体认知与定位",
      lessons: [
        { id: 7, name: "什么是真正的一人公司（vs 打工人）", duration: "约20分钟", free: false },
        { id: 8, name: "如何找到你的差异化定位", duration: "约25分钟", free: false },
        { id: 9, name: "Build in Public：用真实记录建立信任", duration: "约20分钟", free: false },
        { id: 10, name: "各平台算法逻辑对比：抖音、快手、视频号", duration: "约25分钟", free: false },
      ],
    },
    {
      name: "模块三：爆款内容创作",
      lessons: [
        { id: 11, name: "爆款视频结构拆解：钩子+内容+悬念", duration: "约25分钟", free: false },
        { id: 12, name: "选题方法论：如何找到有人看的话题", duration: "约25分钟", free: false },
        { id: 13, name: "脚本写作：从想法到完整文案的流程", duration: "约30分钟", free: false },
        { id: 14, name: "用AI辅助写文案：AI打草稿，自己打磨", duration: "约15分钟", free: false },
        { id: 15, name: "封面设计法则：5秒内抓住用户", duration: "约20分钟", free: false },
        { id: 16, name: "剪辑节奏：让观众看完的关键技巧", duration: "约25分钟", free: false },
      ],
    },
    {
      name: "模块四：平台运营策略",
      lessons: [
        { id: 17, name: "多平台同步发布：一条内容最大化曝光", duration: "约20分钟", free: false },
        { id: 18, name: "评论区运营：让算法持续推流的秘诀", duration: "约20分钟", free: false },
        { id: 19, name: "私域流量：从粉丝到真实用户的转化", duration: "约25分钟", free: false },
        { id: 20, name: "数据复盘：用数据指导内容迭代", duration: "约20分钟", free: false },
      ],
    },
    {
      name: "模块五：变现体系搭建",
      lessons: [
        { id: 21, name: "如何接到第一个广告：主动找品牌而不是等", duration: "约25分钟", free: false },
        { id: 22, name: "知识付费产品设计与定价策略", duration: "约30分钟", free: false },
        { id: 23, name: "产品矩阵搭建：从体验课到终身会员", duration: "约25分钟", free: false },
        { id: 24, name: "案例复盘：我是如何从零做自媒体的", duration: "约35分钟", free: false },
      ],
    },
  ],
};

const businessCourseData = {
  name: "商业思维板块",
  price: 499,
  modules: [
    {
      name: "模块一：商业认知基础",
      lessons: [
        { id: 1, name: "什么是商业模式：用TradeGrail拆解真实案例", duration: "约25分钟", free: false },
        { id: 2, name: "从打工思维到老板思维：两种人的本质差异", duration: "约25分钟", free: false },
        { id: 3, name: "一人公司的商业逻辑：最小成本验证想法", duration: "约20分钟", free: false },
      ],
    },
    {
      name: "模块二：产品思维",
      lessons: [
        { id: 4, name: "什么是好产品：用户要的和你做的为什么不一样", duration: "约25分钟", free: false },
        { id: 5, name: "MVP方法论：为什么要先做最简单的版本", duration: "约20分钟", free: false },
        { id: 6, name: "定价策略：定价背后的心理学和逻辑", duration: "约25分钟", free: false },
        { id: 7, name: "产品迭代逻辑：用数据和反馈驱动改进", duration: "约20分钟", free: false },
      ],
    },
    {
      name: "模块三：五种变现模式深度拆解",
      lessons: [
        { id: 8, name: "广告变现：单条广告报价 = 粉丝量 × 0.01-0.05元", duration: "约25分钟", free: false },
        { id: 9, name: "知识付费：最适合路人的变现方式", duration: "约25分钟", free: false },
        { id: 10, name: "SaaS产品变现：最有价值的商业模式", duration: "约25分钟", free: false },
        { id: 11, name: "服务变现：咨询、代做、陪跑", duration: "约25分钟", free: false },
        { id: 12, name: "联盟营销：推荐别人的产品获得佣金", duration: "约20分钟", free: false },
      ],
    },
    {
      name: "模块四：路人的真实商业复盘",
      lessons: [
        { id: 13, name: "从离职到第一笔收入：完整时间线和数据", duration: "约30分钟", free: false },
        { id: 14, name: "我做过的错误决策和付出的代价", duration: "约25分钟", free: false },
        { id: 15, name: "产品定价的决策过程：为什么定这个价", duration: "约20分钟", free: false },
      ],
    },
  ],
};

function getCourseData(slug: string) {
  switch (slug) {
    case "ai": return aiCourseData;
    case "media": return mediaCourseData;
    case "business": return businessCourseData;
    case "full": return aiCourseData; // 全套从 AI 板块开始
    default: return null;
  }
}

interface Lesson {
  id: number;
  name: string;
  duration: string;
  free: boolean;
  lessonId?: string; // Supabase lessons 表的 UUID，有视频时才有
}

interface Module {
  name: string;
  lessons: Lesson[];
}

export default function LearnPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const course = getCourseData(slug);

  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [loading, setLoading] = useState(true);

  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentModuleIdx, setCurrentModuleIdx] = useState(0);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoInfo, setVideoInfo] = useState<{ fileId: string; appId: string; psign: string } | null>(null);
  const playerRef = useRef<any>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkAccess();
  }, [slug]);

  const checkAccess = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) {
      router.push("/login");
      return;
    }
    setUser({ id: authUser.id, email: authUser.email || "" });

    const { data: purchases } = await supabase
      .from("purchases")
      .select("course_id")
      .eq("user_id", authUser.id)
      .eq("payment_status", "completed");

    const courseIds = purchases?.map((p) => p.course_id) || [];
    const purchased = courseIds.includes(slug) || courseIds.includes("full");
    setHasPurchased(purchased);
    setLoading(false); // 页面加载完成，无论视频是否有签名

    // 默认播放第一节可播放的课
    if (course) {
      const firstLesson = course.modules[0].lessons[0] as Lesson;
      if (firstLesson.free || purchased) {
        setCurrentLesson(firstLesson);
        setCurrentModuleIdx(0);
        if (firstLesson.lessonId) {
          fetchVideoSign(firstLesson.lessonId);
        } else {
          setVideoLoading(false);
        }
      }
    }
  };

  const canPlay = (lesson: Lesson) => lesson.free || hasPurchased;

  // 获取腾讯云播放签名
  const fetchVideoSign = async (lessonId: string) => {
    setVideoLoading(true);
    setVideoInfo(null);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) return;

      const res = await fetch(`/api/video/sign?lesson_id=${lessonId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.file_id) {
        setVideoInfo({ fileId: data.file_id, appId: data.app_id, psign: data.psign });
      }
    } catch (e) {
      console.error("获取视频签名失败", e);
    } finally {
      setVideoLoading(false);
    }
  };

  // 初始化/更新 TCPlayer
  useEffect(() => {
    if (!videoInfo || !playerContainerRef.current) return;

    // 等 TCPlayer 脚本加载完再初始化
    const init = () => {
      const win = window as any;
      if (!win.TCPlayer) return;

      // 销毁旧播放器
      if (playerRef.current) {
        try { playerRef.current.dispose(); } catch {}
        playerRef.current = null;
      }

      playerContainerRef.current!.replaceChildren();
      const videoEl = document.createElement("video");
      videoEl.id = `tcplayer-${Date.now()}`;
      videoEl.style.width = "100%";
      videoEl.style.height = "100%";
      playerContainerRef.current!.appendChild(videoEl);

      playerRef.current = win.TCPlayer(videoEl.id, {
        fileID: videoInfo.fileId,
        appID: videoInfo.appId,
        psign: videoInfo.psign,
        autoplay: false,
      });
    };

    const win = window as any;
    if (win.TCPlayer) {
      init();
    } else {
      // 脚本还没加载完，等待
      const timer = setInterval(() => {
        if ((window as any).TCPlayer) {
          clearInterval(timer);
          init();
        }
      }, 200);
      return () => clearInterval(timer);
    }
  }, [videoInfo]);

  const handleSelectLesson = (lesson: Lesson, moduleIdx: number) => {
    if (!canPlay(lesson)) return;
    setCurrentLesson(lesson);
    setCurrentModuleIdx(moduleIdx);
    setSidebarOpen(false);
    if (lesson.lessonId) {
      fetchVideoSign(lesson.lessonId);
    } else {
      setVideoLoading(false);
    }
  };

  const toggleModule = (idx: number) => {
    setExpandedModules((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // 上一节 / 下一节
  const allLessons = course?.modules.flatMap((m, mi) =>
    m.lessons.map((l) => ({ ...l, moduleIdx: mi }))
  ) || [];
  const currentIdx = allLessons.findIndex((l) => l.id === currentLesson?.id && l.moduleIdx === currentModuleIdx);
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[#666]">加载中...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">课程不存在</h1>
        <Link href="/courses" className="text-[#666] mt-4 inline-block">返回课程列表</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 64px)" }}>
      {/* 顶部导航栏 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "52px",
          borderBottom: "1px solid #F0EDE8",
          background: "#fff",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/user"
            style={{ fontSize: "13px", color: "#999", display: "flex", alignItems: "center", gap: "4px" }}
          >
            ← 我的课程
          </Link>
          <span style={{ color: "#E8E8E8" }}>|</span>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "#1A1A2E" }}>{course.name}</span>
        </div>
        {currentLesson && (
          <span style={{ fontSize: "13px", color: "#999", maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {currentLesson.name}
          </span>
        )}
        {/* 移动端目录按钮 */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ display: "none" }}
          className="md-sidebar-toggle"
        >
          <Menu style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      {/* 主体：左侧目录 + 右侧播放区 */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* 左侧课程目录 */}
        <div
          style={{
            width: "300px",
            flexShrink: 0,
            borderRight: "1px solid #F0EDE8",
            overflowY: "auto",
            background: "#FAFAF9",
          }}
        >
          <div style={{ padding: "16px 16px 8px", borderBottom: "1px solid #F0EDE8" }}>
            <div style={{ fontSize: "11px", color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
              课程目录
            </div>
          </div>

          {course.modules.map((module: Module, mi: number) => (
            <div key={mi} style={{ borderBottom: "1px solid #F0EDE8" }}>
              {/* 模块标题 */}
              <button
                onClick={() => toggleModule(mi)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A2E", lineHeight: 1.4 }}>
                  {module.name}
                </span>
                <ChevronDown
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "#999",
                    flexShrink: 0,
                    transform: expandedModules.includes(mi) ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {/* 课时列表 */}
              {expandedModules.includes(mi) && (
                <div>
                  {module.lessons.map((lesson: Lesson) => {
                    const playable = canPlay(lesson);
                    const isActive = currentLesson?.id === lesson.id && currentModuleIdx === mi;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => handleSelectLesson(lesson, mi)}
                        disabled={!playable}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          padding: "10px 16px 10px 28px",
                          background: isActive ? "#1A1A2E" : "transparent",
                          border: "none",
                          cursor: playable ? "pointer" : "default",
                          textAlign: "left",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive && playable) (e.currentTarget as HTMLButtonElement).style.background = "#F0EDE8";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }}
                      >
                        <span style={{ marginTop: "2px", flexShrink: 0 }}>
                          {isActive ? (
                            <Play style={{ width: "12px", height: "12px", color: "#fff" }} />
                          ) : playable ? (
                            <Play style={{ width: "12px", height: "12px", color: "#999" }} />
                          ) : (
                            <Lock style={{ width: "12px", height: "12px", color: "#CCC" }} />
                          )}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: "13px",
                              color: isActive ? "#fff" : playable ? "#1A1A2E" : "#BBB",
                              lineHeight: 1.4,
                              marginBottom: "2px",
                            }}
                          >
                            {lesson.name}
                          </div>
                          <div style={{ fontSize: "11px", color: isActive ? "rgba(255,255,255,0.6)" : "#BBB" }}>
                            {lesson.duration}
                            {lesson.free && (
                              <span style={{ marginLeft: "6px", color: isActive ? "rgba(255,255,255,0.7)" : "#16a34a" }}>
                                免费
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 右侧播放区 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#fff" }}>
          {currentLesson ? (
            <>
              {/* 视频区域 */}
              <div style={{ background: "#000", position: "relative" }}>
                <div style={{ aspectRatio: "16/9", maxHeight: "calc(100vh - 200px)", position: "relative" }}>
                  {videoLoading && (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#000", zIndex: 1 }}>
                      <div style={{ width: "32px", height: "32px", border: "2px solid rgba(255,255,255,0.2)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    </div>
                  )}
                  {videoInfo ? (
                    <div ref={playerContainerRef} style={{ width: "100%", height: "100%" }} />
                  ) : !videoLoading && (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#111" }}>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>视频即将上线，敬请期待</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 课时信息 + 上下节导航 */}
              <div
                style={{
                  padding: "20px 28px",
                  borderBottom: "1px solid #F0EDE8",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div>
                  <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#1A1A2E", marginBottom: "4px" }}>
                    {currentLesson.name}
                  </h2>
                  <p style={{ fontSize: "13px", color: "#999" }}>
                    {course.modules[currentModuleIdx]?.name} · {currentLesson.duration}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                  {prevLesson && canPlay(prevLesson) && (
                    <button
                      onClick={() => handleSelectLesson(prevLesson, prevLesson.moduleIdx)}
                      style={{
                        padding: "8px 16px",
                        fontSize: "13px",
                        border: "1px solid #E8E8E8",
                        borderRadius: "6px",
                        background: "#fff",
                        cursor: "pointer",
                        color: "#666",
                      }}
                    >
                      ← 上一节
                    </button>
                  )}
                  {nextLesson && canPlay(nextLesson) && (
                    <button
                      onClick={() => handleSelectLesson(nextLesson, nextLesson.moduleIdx)}
                      style={{
                        padding: "8px 16px",
                        fontSize: "13px",
                        border: "none",
                        borderRadius: "6px",
                        background: "#1A1A2E",
                        cursor: "pointer",
                        color: "#fff",
                      }}
                    >
                      下一节 →
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* 未购买状态 */
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#F7F6F3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Lock style={{ width: "24px", height: "24px", color: "#999" }} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1A1A2E", marginBottom: "8px" }}>
                购买后解锁全部课程
              </h3>
              <p style={{ fontSize: "14px", color: "#999", marginBottom: "24px" }}>
                你可以免费试看每个模块的前2节课
              </p>
              <Link
                href={`/courses/${slug}`}
                style={{
                  padding: "12px 28px",
                  background: "#1A1A2E",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                立即购买 ¥{course.price}
              </Link>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
