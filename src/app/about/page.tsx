import Link from "next/link";

const platforms = [
  { name: "抖音", fans: "18.2万", likes: "获赞 147.4万", hit: "爆款 793.9万播放" },
  { name: "快手", fans: "26.1万", likes: "获赞 22.8万", hit: "爆款 219万播放" },
  { name: "视频号", fans: "1.37万", likes: "均播 5k–5万", hit: "15条视频内达成" },
  { name: "小红书", fans: "3,865", likes: "获赞 5,403", hit: "刚起步·最高 6.7万" },
];

const timeline = [
  {
    year: "2015",
    title: "初三只身出国，前往英国",
    desc: "机械工程本科 + 商业管理研究生，英国独立生活9年。大学期间自学CFA通过一级考试，对金融的热爱从这里开始。动手能力极强——曾和朋友做过自动挤牙膏的牙刷、贝斯调音装置等小产品。",
    tag: "跨学科底色：工程 + 金融 + 商业",
    tagBg: "#ede9fe", tagColor: "#5b21b6",
  },
  {
    year: "2018",
    title: "大学期间开始做自媒体，三个月涨粉10万",
    desc: "分享SQ3R学习法、iPad学习技巧、iCalendar时间管理……内容帮助了大量备考高考、考研的学生。很多粉丝说那段时间天天看我视频来激励自己，这是我最有成就感的事之一。",
    tag: "首次验证内容影响力",
    tagBg: "#e8f5ee", tagColor: "#166534",
  },
  {
    year: "2020",
    title: "回国，进入体制内——人生最难的一段",
    desc: "所有人以为回国后会一帆风顺，但体制内的日子让我经历了真正的失落和崩溃。我哭过，也感觉很难受。自媒体断更，粉丝从30万掉到18万。但同期开了医疗公司，5个月赚了30–40万，积累了真实商业经验。",
    tag: "最大的弯路，也是最深的积累",
    tagBg: "#fee2e2", tagColor: "#991b1b",
  },
  {
    year: "2025",
    title: "押注 AI，重新起势",
    desc: "系统研究AI工具、提示词工程、Vibe Coding，重启自媒体。快手一周涨粉30万，验证了内容能力没有消失，只是在等一个更好的赛道。",
    tag: "重新起势",
    tagBg: "#fef3c7", tagColor: "#92400e",
  },
  {
    year: "2026",
    title: "辞职，全职打造一人公司——现在进行时",
    desc: "下定决心出来做自己的事。上线第一个AI产品TradeGrail（交易复盘工具），创办本课程，全程Build in Public公开记录每一步。我从来不认为自己会失败，因为已经积累了够多，也输得够惨过。",
    tag: "现在进行时",
    tagBg: "#e8f5ee", tagColor: "#166534",
  },
];

const skills = [
  { title: "AI 产品开发", desc: "Cursor · Vibe Coding · 已有上线产品" },
  { title: "自媒体运营", desc: "多平台60万粉 · 爆款方法论" },
  { title: "金融与商业", desc: "CFA一级 · 美股外汇 · 创业经历" },
  { title: "工程动手能力", desc: "机械工程背景 · 强执行力" },
  { title: "内容教学", desc: "学习方法 · 效率工具 · 真实影响力" },
  { title: "Build in Public", desc: "全程公开 · 不卖幻觉 · 真实记录" },
];

const tags = [
  "机械工程本科", "商业管理研究生", "CFA一级通过",
  "英国留学9年", "美股&外汇4年+", "AI独立开发者",
];

const stats = [
  { num: "60万+", label: "全网粉丝" },
  { num: "793万", label: "单条最高播放" },
  { num: "2个", label: "上线AI产品" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#f6f5f4", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "56px 20px 80px",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >

        {/* 第一区：深色身份卡 */}
        <div style={{ background: "#18181b", borderRadius: "10px", padding: "2rem" }}>
          <div className="about-identity-inner" style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            {/* 左栏 */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "22px", fontWeight: 500, color: "#fff", letterSpacing: "-0.5px", marginBottom: "4px" }}>路人</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
                一人公司创始人 · AI 独立开发者 · Build in Public
              </div>
              <div style={{ borderLeft: "2px solid rgba(255,255,255,0.15)", paddingLeft: "1rem", marginBottom: "1.25rem" }}>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, margin: 0 }}>
                  「我不想再等了。我积累了足够多的经验，也输得够惨过。现在是时候为自己做一件真正的事了。」
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {tags.map((t) => (
                  <span key={t} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "3px", padding: "3px 8px", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* 右栏 */}
            <div className="about-stats" style={{ flexShrink: 0, minWidth: "110px", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "26px", fontWeight: 500, color: "#fff", letterSpacing: "-1px", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "3px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 第二区：平台数据 */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            各平台数据
          </div>
          <div
            className="about-platforms"
            style={{
              background: "#fff",
              border: "0.5px solid rgba(0,0,0,0.08)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            {platforms.map((p, i) => (
              <div
                key={p.name}
                style={{
                  padding: "1.25rem",
                  borderRight: i < platforms.length - 1 ? "0.5px solid rgba(0,0,0,0.07)" : "none",
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.04em", marginBottom: "6px" }}>{p.name}</div>
                <div style={{ fontSize: "22px", fontWeight: 500, color: "#18181b", letterSpacing: "-0.8px", lineHeight: 1, marginBottom: "3px" }}>{p.fans}</div>
                <div style={{ fontSize: "11px", color: "#c8c4be", lineHeight: 1.5 }}>{p.likes}</div>
                <div style={{ fontSize: "11px", fontWeight: 500, color: "#16a34a", marginTop: "4px" }}>{p.hit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 第三区：人生时间线 */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            人生轨迹
          </div>
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden" }}>
            {/* header */}
            <div style={{ background: "#18181b", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>不是一帆风顺，但每一步都算数</span>
              <span style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", fontSize: "11px", padding: "3px 8px", borderRadius: "3px" }}>真实经历</span>
            </div>
            {timeline.map((row, i) => (
              <div key={row.year} style={{ display: "flex", borderBottom: i < timeline.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none" }}>
                <div style={{ width: "82px", flexShrink: 0, padding: "1.1rem 1.25rem", fontSize: "12px", fontWeight: 500, color: "#a39e98", borderRight: "0.5px solid rgba(0,0,0,0.06)" }}>
                  {row.year}
                </div>
                <div style={{ padding: "1.1rem 1.5rem" }}>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", marginBottom: "4px" }}>{row.title}</div>
                  <div style={{ fontSize: "12px", color: "#615d59", lineHeight: 1.7 }}>{row.desc}</div>
                  <span style={{ display: "inline-block", fontSize: "10px", fontWeight: 500, padding: "2px 7px", borderRadius: "3px", marginTop: "6px", background: row.tagBg, color: row.tagColor }}>
                    {row.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 第四区：能力矩阵 */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            跨界能力体系
          </div>
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ padding: "1rem 1.5rem", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#18181b" }}>为什么这门课程值得信任</span>
              <span style={{ background: "#f0efed", color: "#a39e98", fontSize: "11px", padding: "3px 8px", borderRadius: "3px" }}>能力矩阵</span>
            </div>
            <div
              className="about-skills"
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
            >
              {skills.map((s, i) => {
                const isLastRow = i >= 3;
                const isRightEdge = (i + 1) % 3 === 0;
                return (
                  <div
                    key={s.title}
                    style={{
                      padding: "1.1rem 1.5rem",
                      borderRight: isRightEdge ? "none" : "0.5px solid rgba(0,0,0,0.06)",
                      borderBottom: isLastRow ? "none" : "0.5px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", marginBottom: "3px" }}>
                      <span style={{ color: "#c8c4be", marginRight: "6px" }}>·</span>{s.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "#615d59", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 第五区：粉丝声音 */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#a39e98", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            粉丝怎么说
          </div>
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "10px", padding: "1.5rem" }}>
            <div style={{ paddingBottom: "1.25rem", borderBottom: "0.5px solid rgba(0,0,0,0.06)", marginBottom: "1.25rem" }}>
              <p style={{ borderLeft: "2px solid #e5e7eb", paddingLeft: "1rem", fontSize: "13px", color: "#18181b", lineHeight: 1.8, margin: "0 0 6px" }}>
                「高考备考那段时间，天天看你的视频。你的陪伴真的给了我很大的力量，谢谢你。」
              </p>
              <div style={{ fontSize: "11px", color: "#a39e98", paddingLeft: "1rem" }}>— 抖音粉丝私信</div>
            </div>
            <div>
              <p style={{ borderLeft: "2px solid #e5e7eb", paddingLeft: "1rem", fontSize: "13px", color: "#18181b", lineHeight: 1.8, margin: "0 0 6px" }}>
                「考研那段时间一直在看你的学习方法视频，感觉是你陪我度过的。现在看到你回来了，真的很开心。」
              </p>
              <div style={{ fontSize: "11px", color: "#a39e98", paddingLeft: "1rem" }}>— 老粉丝留言</div>
            </div>
          </div>
        </div>

        {/* 第六区：底部 CTA */}
        <div
          className="about-cta"
          style={{
            background: "#fff",
            border: "0.5px solid rgba(0,0,0,0.08)",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: "#18181b", marginBottom: "3px" }}>
              跟着路人，从 AI 工具到一人公司
            </div>
            <div style={{ fontSize: "12px", color: "#a39e98" }}>
              已有 100+ 内测用户完成学习 · 2节免费试看
            </div>
          </div>
          <Link
            href="/courses"
            style={{
              background: "#18181b",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 500,
              padding: "10px 22px",
              borderRadius: "6px",
              textDecoration: "none",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            开始学习 →
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-identity-inner {
            flex-direction: column !important;
          }
          .about-stats {
            flex-direction: row !important;
            min-width: unset !important;
            gap: 1.5rem !important;
          }
          .about-platforms {
            grid-template-columns: repeat(2,1fr) !important;
          }
          .about-platforms > div:nth-child(2) {
            border-right: none !important;
          }
          .about-platforms > div:nth-child(1),
          .about-platforms > div:nth-child(2) {
            border-bottom: 0.5px solid rgba(0,0,0,0.07);
          }
          .about-skills {
            grid-template-columns: repeat(2,1fr) !important;
          }
          .about-skills > div:nth-child(2n) {
            border-right: none !important;
          }
          .about-cta {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .about-cta a {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
