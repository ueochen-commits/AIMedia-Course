"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface UserData { id: string; email: string; created_at: string; }
interface Purchase { id: string; course_id: string; payment_status: string; }

const courseList = [
  { id: "ai", name: "AI 板块", progress: 100, progressLabel: "完成 100%", progressColor: "#16a34a" },
  { id: "media", name: "自媒体板块", progress: 45, progressLabel: "进度 45%", progressColor: "#18181b" },
  { id: "business", name: "商业思维板块", progress: 0, progressLabel: "未开始 0%", progressColor: "#18181b" },
];

const navItems = [
  {
    id: "courses", label: "我的课程",
    icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1.5" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.1"/><path d="M5 6h5M5 8.5h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    id: "progress", label: "学习进度",
    icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.1"/><path d="M7.5 4.5v3l2 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    id: "community", label: "学员群",
    icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="5.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.1"/><circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.1"/><path d="M1.5 12c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    id: "live", label: "直播日程",
    icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.1"/><path d="M5 1.5v1.5M10 1.5v1.5M1.5 6.5h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    id: "settings", label: "账号设置",
    icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.1"/><path d="M7.5 1.5v1M7.5 12.5v1M1.5 7.5h1M12.5 7.5h1M3.4 3.4l.7.7M10.9 10.9l.7.7M10.9 3.4l-.7.7M3.4 10.9l.7-.7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
];

export default function UserPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("courses");

  useEffect(() => { checkUser(); }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser({ id: user.id, email: user.email || "", created_at: user.created_at });
      const { data } = await supabase.from("purchases").select("*").eq("user_id", user.id).eq("payment_status", "completed");
      if (data) setPurchases(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const purchasedIds = purchases.map(p => p.course_id);
  const hasFullCourse = purchasedIds.includes("full");
  const isPurchased = (id: string) => purchasedIds.includes(id) || hasFullCourse || (id === "business" && hasFullCourse);
  const purchasedCount = courseList.filter(c => isPurchased(c.id)).length;
  const isPaidUser = purchasedCount > 0;
  const avatarLetter = user?.email?.[0]?.toUpperCase() || "U";

  if (loading) {
    return (
      <div style={{ background: "#f6f5f4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontSize: "13px", color: "#a39e98" }}>加载中...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ background: "#f6f5f4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", padding: "2rem", textAlign: "center", maxWidth: "360px", width: "100%" }}>
          <div style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>请先登录</div>
          <p style={{ fontSize: "13px", color: "#a39e98", marginBottom: "1.5rem" }}>登录后查看你的课程</p>
          <Link href="/login" style={{ display: "block", background: "#18181b", color: "#fff", fontSize: "14px", fontWeight: 500, padding: "11px", borderRadius: "7px", textDecoration: "none", textAlign: "center" }}>
            立即登录
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f6f5f4", minHeight: "100vh" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 20px" }}>

        {/* 页面标题 */}
        <div style={{ fontSize: "22px", fontWeight: 500, color: "#18181b", letterSpacing: "-0.4px", marginBottom: "1.25rem" }}>
          用户中心
        </div>

        {/* 主体网格 */}
        <div className="user-layout" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "1.25rem", alignItems: "start" }}>

          {/* 左侧 Sidebar */}
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden" }}>
            {/* 用户信息 */}
            <div style={{ padding: "1.5rem 1.25rem", borderBottom: "0.5px solid rgba(0,0,0,0.07)", textAlign: "center" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#18181b", color: "#fff", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                {avatarLetter}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 500, color: "#18181b", marginBottom: "8px", wordBreak: "break-all" }}>
                {user.email}
              </div>
              {isPaidUser ? (
                <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#e8f5ee", borderRadius: "3px", padding: "3px 8px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#16a34a", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", fontWeight: 500, color: "#16a34a" }}>付费学员</span>
                </div>
              ) : (
                <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#f0efed", borderRadius: "3px", padding: "3px 8px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a39e98", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98" }}>免费用户</span>
                </div>
              )}
            </div>

            {/* 导航列表 */}
            <div style={{ padding: "0.5rem 0" }}>
              {navItems.map((item, i) => {
                const isActive = activeNav === item.id;
                const isSeparatorBefore = item.id === "settings";
                return (
                  <div key={item.id}>
                    {isSeparatorBefore && <div style={{ height: "0.5px", background: "rgba(0,0,0,0.06)", margin: "0.25rem 0" }} />}
                    <button
                      onClick={() => setActiveNav(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "0.65rem 1.25rem",
                        background: isActive ? "#f6f5f4" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        position: "relative",
                        color: isActive ? "#18181b" : "#615d59",
                      }}
                    >
                      {isActive && (
                        <span style={{ position: "absolute", left: 0, top: "20%", height: "60%", width: "2px", background: "#18181b", borderRadius: "0 2px 2px 0" }} />
                      )}
                      <span style={{ color: isActive ? "#18181b" : "#a39e98", flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: "13px", fontWeight: isActive ? 500 : 400 }}>{item.label}</span>
                    </button>
                  </div>
                );
              })}

              {/* 分隔线 + 退出登录 */}
              <div style={{ height: "0.5px", background: "rgba(0,0,0,0.06)", margin: "0.25rem 0" }} />
              <button
                onClick={handleLogout}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "0.65rem 1.25rem", background: "transparent", border: "none", cursor: "pointer", color: "#dc2626" }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M5.5 2.5H3a1 1 0 00-1 1v8a1 1 0 001 1h2.5M10 10.5l2.5-3-2.5-3M12.5 7.5H6" stroke="#dc2626" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: "13px" }}>退出登录</span>
              </button>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* 卡片一：我的课程 */}
            <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.5rem", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1.5" y="2.5" width="12" height="10" rx="1.5" stroke="#18181b" strokeWidth="1.1"/><path d="M5 6h5M5 8.5h3" stroke="#18181b" strokeWidth="1.1" strokeLinecap="round"/></svg>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#18181b" }}>我的课程</span>
                </div>
                <span style={{ background: "#f0efed", color: "#a39e98", fontSize: "11px", padding: "3px 8px", borderRadius: "3px" }}>
                  {purchasedCount} 门已购
                </span>
              </div>

              {purchasedCount > 0 ? (
                courseList.map((course, i) => {
                  const purchased = isPurchased(course.id);
                  if (!purchased) return null;
                  return (
                    <div key={course.id} style={{ padding: "1rem 1.5rem", borderBottom: i < courseList.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>{course.name}</div>
                        <div style={{ maxWidth: "200px", height: "3px", background: "#f0efed", borderRadius: "2px", marginBottom: "4px" }}>
                          <div style={{ height: "3px", borderRadius: "2px", background: course.progressColor, width: `${course.progress}%` }} />
                        </div>
                        <div style={{ fontSize: "11px", color: "#a39e98" }}>{course.progressLabel}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                        <span style={{ background: "#e8f5ee", color: "#16a34a", fontSize: "11px", fontWeight: 500, padding: "2px 7px", borderRadius: "3px" }}>已购买</span>
                        <Link
                          href={`/learn/${course.id}`}
                          style={{ border: "0.5px solid rgba(0,0,0,0.15)", background: "transparent", fontSize: "12px", fontWeight: 500, color: "#18181b", borderRadius: "5px", padding: "5px 14px", textDecoration: "none" }}
                        >
                          {course.progress === 0 ? "开始学习" : "继续学习"}
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ padding: "2.5rem 1.5rem", textAlign: "center" }}>
                  <p style={{ fontSize: "13px", color: "#a39e98", marginBottom: "1rem" }}>你还没有购买任何课程</p>
                  <Link href="/courses" style={{ display: "inline-block", background: "#18181b", color: "#fff", fontSize: "13px", fontWeight: 500, padding: "9px 20px", borderRadius: "6px", textDecoration: "none" }}>
                    前往购买
                  </Link>
                </div>
              )}
            </div>

            {/* 卡片二：直播日程 */}
            <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.5rem", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="#18181b" strokeWidth="1.1"/><path d="M5 1.5v1.5M10 1.5v1.5M1.5 6.5h12" stroke="#18181b" strokeWidth="1.1" strokeLinecap="round"/></svg>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#18181b" }}>直播日程</span>
                </div>
                <span style={{ background: "#f0efed", color: "#a39e98", fontSize: "11px", padding: "3px 8px", borderRadius: "3px" }}>每周一次</span>
              </div>
              <div style={{ padding: "1rem 1.5rem" }}>
                <div style={{ background: "#f6f5f4", borderRadius: "7px", padding: "0.85rem 1rem", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8c4be", flexShrink: 0, marginTop: "5px" }} />
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 500, color: "#615d59", marginBottom: "3px" }}>下一场直播</div>
                    <div style={{ fontSize: "11px", color: "#a39e98" }}>时间待定，学员群内通知 · 时长1.5–2小时</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片三：学员群二维码 */}
            <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.5rem", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="5.5" cy="5" r="2" stroke="#18181b" strokeWidth="1.1"/><circle cx="10" cy="5" r="2" stroke="#18181b" strokeWidth="1.1"/><path d="M1.5 12c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4" stroke="#18181b" strokeWidth="1.1" strokeLinecap="round"/></svg>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#18181b" }}>学员群二维码</span>
                </div>
                <span style={{ background: "#f0efed", color: "#a39e98", fontSize: "11px", padding: "3px 8px", borderRadius: "3px" }}>购买后解锁</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <div style={{ width: "72px", height: "72px", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "7px", background: "#f6f5f4", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="#c8c4be" strokeWidth="1.2"/>
                    <rect x="4.5" y="4.5" width="5" height="5" rx="0.5" fill="#c8c4be"/>
                    <rect x="16" y="2" width="10" height="10" rx="1.5" stroke="#c8c4be" strokeWidth="1.2"/>
                    <rect x="18.5" y="4.5" width="5" height="5" rx="0.5" fill="#c8c4be"/>
                    <rect x="2" y="16" width="10" height="10" rx="1.5" stroke="#c8c4be" strokeWidth="1.2"/>
                    <rect x="4.5" y="18.5" width="5" height="5" rx="0.5" fill="#c8c4be"/>
                    <path d="M16 16h3v3h-3zM22 16h4v3h-4zM16 22h3v4h-3zM22 22h4v4h-4z" fill="#c8c4be"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", marginBottom: "6px" }}>加入学员专属社群</div>
                  <div style={{ fontSize: "12px", color: "#a39e98", lineHeight: 1.6 }}>
                    购买课程后自动解锁二维码<br />
                    群内有直播通知、答疑和学员交流
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .user-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
