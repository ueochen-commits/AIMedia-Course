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
                全网拥有50-60万粉丝的自媒体博主，具备扎实的AI开发实战经验（已独立开发上线TradeGrail交易复盘工具）和丰富的自媒体运营经验。
              </p>
              <p className="text-[#666] mb-4">
                本产品旨在将其知识经验系统化，以课程+社群形式变现，面向AI零基础学员和有志于自媒体创业的人群。
              </p>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">核心数据</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">50万+</div>
                    <div className="text-sm text-[#666]">全网粉丝</div>
                  </div>
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-[#666]">付费学员</div>
                  </div>
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">3-5万</div>
                    <div className="text-sm text-[#666]">月收入</div>
                  </div>
                  <div className="bg-[#F7F6F3] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">2个</div>
                    <div className="text-sm text-[#666]">产品板块</div>
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