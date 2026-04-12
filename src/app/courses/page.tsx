import Link from "next/link";

const aiAudience = [
  "完全零基础，从未接触过AI工具，甚至不会翻墙",
  "想用Claude Code开发并上线自己的网站产品",
  "想掌握完整一人公司技术栈，不懂编程也能做产品",
  "想构建个人AI工作流，大幅提升效率",
];

const mediaAudience = [
  "有账号但一直涨不了粉，内容没人看",
  "不知道如何选题、写脚本、做封面、剪视频",
  "想建立私域流量，实现多平台变现",
  "想以一人公司模式独立运营并盈利",
];

const fullIncludes = [
  "AI 板块 · 约32节",
  "自媒体板块 · 约28节",
  "商业思维加餐",
  "学员专属社群",
];

export default function CoursesPage() {
  return (
    <div style={{ background: "#f6f5f4", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "56px", paddingBottom: "80px", maxWidth: "760px" }}>

        {/* 标题区 */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
            选择课程
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#18181b", letterSpacing: "-0.5px", marginBottom: "10px", lineHeight: 1.3 }}>
            哪个板块适合你？
          </h1>
          <p style={{ fontSize: "14px", color: "#615d59", lineHeight: 1.6 }}>
            两个板块解决不同问题，可以单独学，也可以全套一起
          </p>
        </div>

        {/* 第一区：两列对比 */}
        <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "10px", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

            {/* AI 板块 */}
            <div style={{ borderRight: "0.5px solid rgba(0,0,0,0.08)" }}>
              {/* header */}
              <div style={{ padding: "20px 24px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.06em", marginBottom: "6px" }}>AI 板块</div>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#18181b", lineHeight: 1.4 }}>适合这类人</div>
              </div>
              {/* 适合人群 */}
              {aiAudience.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "13px 24px",
                    borderBottom: i < aiAudience.length - 1 ? "0.5px solid rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16a34a", flexShrink: 0, marginTop: "6px" }} />
                  <span style={{ fontSize: "13px", color: "#18181b", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
              {/* footer */}
              <div style={{ padding: "16px 24px", borderTop: "0.5px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: "20px", fontWeight: 500, color: "#18181b" }}>¥499</div>
                <Link
                  href="/courses/ai"
                  style={{ fontSize: "13px", color: "#615d59", border: "0.5px solid rgba(0,0,0,0.15)", borderRadius: "5px", padding: "6px 14px", background: "transparent", textDecoration: "none" }}
                >
                  查看详情
                </Link>
              </div>
            </div>

            {/* 自媒体板块 */}
            <div>
              {/* header */}
              <div style={{ padding: "20px 24px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.06em", marginBottom: "6px" }}>自媒体板块</div>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#18181b", lineHeight: 1.4 }}>适合这类人</div>
              </div>
              {/* 适合人群 */}
              {mediaAudience.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "13px 24px",
                    borderBottom: i < mediaAudience.length - 1 ? "0.5px solid rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16a34a", flexShrink: 0, marginTop: "6px" }} />
                  <span style={{ fontSize: "13px", color: "#18181b", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
              {/* footer */}
              <div style={{ padding: "16px 24px", borderTop: "0.5px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: "20px", fontWeight: 500, color: "#18181b" }}>¥499</div>
                <Link
                  href="/courses/media"
                  style={{ fontSize: "13px", color: "#615d59", border: "0.5px solid rgba(0,0,0,0.15)", borderRadius: "5px", padding: "6px 14px", background: "transparent", textDecoration: "none" }}
                >
                  查看详情
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 第二区：全套课程深色卡 */}
        <div
          style={{
            background: "#18181b",
            borderRadius: "10px",
            padding: "28px 32px",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* 左侧 */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
              推荐 · 最受欢迎
            </div>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#fff", marginBottom: "6px" }}>全套课程</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "20px", lineHeight: 1.5 }}>
              AI + 自媒体 + 商业思维，一次购买，完整体系
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {fullIncludes.map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "4px",
                    padding: "4px 10px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* 右侧 */}
          <div style={{ flexShrink: 0, textAlign: "right" }}>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", textDecoration: "line-through", marginBottom: "4px" }}>¥998</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", justifyContent: "flex-end", marginBottom: "16px" }}>
              <span style={{ fontSize: "36px", fontWeight: 500, color: "#fff", letterSpacing: "-1px" }}>¥799</span>
              <span style={{ fontSize: "12px", color: "#4ade80", background: "rgba(74,222,128,0.15)", borderRadius: "4px", padding: "2px 8px" }}>省¥199</span>
            </div>
            <Link
              href="/courses/full"
              style={{ display: "inline-block", background: "#fff", color: "#18181b", fontSize: "14px", fontWeight: 500, borderRadius: "6px", padding: "10px 24px", textDecoration: "none" }}
            >
              立即购买
            </Link>
          </div>
        </div>

        {/* 第三区：免费试看保障条 */}
        <div
          style={{
            background: "#fff",
            border: "0.5px solid rgba(0,0,0,0.08)",
            borderRadius: "10px",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#f6f5f4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="#615d59" strokeWidth="0.8" />
                <path d="M5.5 4.5L10 7L5.5 9.5V4.5Z" fill="#615d59" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#18181b", marginBottom: "2px" }}>每个板块前 2 节免费试看</div>
              <div style={{ fontSize: "12px", color: "#a39e98" }}>无需购买，直接点击课时即可播放</div>
            </div>
          </div>
          <Link
            href="/courses/ai"
            style={{ fontSize: "13px", color: "#615d59", border: "0.5px solid rgba(0,0,0,0.15)", borderRadius: "5px", padding: "7px 16px", background: "transparent", textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap" }}
          >
            立即免费试看 →
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .courses-compare-grid {
            grid-template-columns: 1fr !important;
          }
          .courses-full-card {
            flex-direction: column !important;
          }
          .courses-full-card-right {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
