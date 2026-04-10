import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center">关于创始人</h1>

          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">路人</h2>
              <p className="text-[#666] mb-4">
                全网粉丝接近60万的自媒体博主，2018年开始深耕多个平台，擅长各平台从零起号。英国留学9年，通过CFA一级考试。快手一周涨粉30万，小红书单日涨粉3500，公众号「Hello我是路人」持续更新。从体制内辞职后独立开发AI产品TradeGrail，全程Build in Public公开记录。
              </p>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">核心数据</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">60万+</div>
                    <div className="text-sm text-[#666]">全网粉丝</div>
                  </div>
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-[#666]">内测用户</div>
                  </div>
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">3-5万</div>
                    <div className="text-sm text-[#666]">月收入</div>
                  </div>
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">2个</div>
                    <div className="text-sm text-[#666]">上线产品</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#E8E8E8]">
                <h3 className="font-semibold mb-4">现有产品</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#F7F6F3] rounded-lg">
                    <div>
                      <div className="font-medium">TradeGrail 交易复盘工具</div>
                      <div className="text-sm text-[#666]">独立开发的AI产品</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/courses" className="btn btn-primary">
                开始学习
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}