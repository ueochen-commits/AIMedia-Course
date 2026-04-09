"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Play, Check, Lock } from "lucide-react";

const courseData: Record<string, any> = {
  ai: {
    name: "AI 板块",
    description: "从零基础到用AI开发产品",
    price: 499,
    modules: [
      {
        name: "模块一：入门准备",
        lessons: [
          { id: 1, name: "科学上网与注册谷歌账号", duration: "约15分钟", free: true },
          { id: 2, name: "注册ChatGPT、Claude、Gemini账号", duration: "约20分钟", free: true },
          { id: 3, name: "注册虚拟Visa卡，购买海外AI会员", duration: "约15分钟", free: false },
        ],
      },
      {
        name: "模块二：AI工具基础使用",
        lessons: [
          { id: 4, name: "认识主流大模型，了解各自特点和适用场景", duration: "约20分钟", free: false },
          { id: 5, name: "提示词工程入门，如何更好地和AI对话", duration: "约25分钟", free: false },
          { id: 6, name: "Markdown和JSON基础，看懂AI输出的格式", duration: "约15分钟", free: false },
        ],
      },
      {
        name: "模块三：AI进阶应用",
        lessons: [
          { id: 7, name: "用Obsidian或Notion构建个人AI知识库", duration: "约30分钟", free: false },
          { id: 8, name: "AI生成图片与设计，制作风格化海报", duration: "约25分钟", free: false },
          { id: 9, name: "AI视频生成入门，用Google Veo 2.0制作短片", duration: "约25分钟", free: false },
        ],
      },
      {
        name: "模块四：用AI开发产品",
        lessons: [
          { id: 10, name: "注册GitHub，配置代码仓库", duration: "约20分钟", free: false },
          { id: 11, name: "用Cursor或Claude开发个人网页", duration: "约40分钟", free: false },
          { id: 12, name: "Vibe Coding实战，用AI做一个App小程序", duration: "约45分钟", free: false },
        ],
      },
    ],
  },
  media: {
    name: "自媒体板块",
    description: "从自媒体认知到变现体系搭建",
    price: 499,
    modules: [
      {
        name: "模块一：自媒体认知与定位",
        lessons: [
          { id: 1, name: "什么是真正的一人公司，和打工人的区别", duration: "", free: true },
          { id: 2, name: "如何找到你的内容定位，避免同质化", duration: "", free: true },
          { id: 3, name: "Build in Public方法论，用真实记录建立信任", duration: "", free: false },
        ],
      },
      {
        name: "模块二：内容创作方法论",
        lessons: [
          { id: 4, name: "爆款视频结构拆解，钩子+内容+悬念", duration: "", free: false },
          { id: 5, name: "脚本写作方法，从日报到视频文案的转化", duration: "", free: false },
          { id: 6, name: "封面设计原则，提升点击率的关键要素", duration: "", free: false },
        ],
      },
      {
        name: "模块三：平台运营策略",
        lessons: [
          { id: 7, name: "抖音、小红书、视频号的算法逻辑差异", duration: "", free: false },
          { id: 8, name: "多平台同步发布，提升内容曝光效率", duration: "", free: false },
          { id: 9, name: "私域流量运营，从粉丝到付费用户的转化", duration: "", free: false },
        ],
      },
      {
        name: "模块四：变现体系搭建",
        lessons: [
          { id: 10, name: "一人公司常见变现方式对比分析", duration: "", free: false },
          { id: 11, name: "知识付费产品设计，定价策略与产品矩阵", duration: "", free: false },
          { id: 12, name: "真实案例复盘：我是如何用AI做出第一个付费产品的", duration: "", free: false },
        ],
      },
    ],
  },
  full: {
    name: "全套课程",
    description: "AI板块 + 自媒体板块，一次买断",
    price: 799,
    modules: [],
  },
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = courseData[slug];
  const [hasPurchased] = useState(false); // TODO: 从后端获取购买状态

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
      <section className="py-8">
        <div className="container">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-sm text-[#666] mb-6">
            <Link href="/" className="hover:text-[#1A1A2E]">首页</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-[#1A1A2E]">课程</Link>
            <span>/</span>
            <span className="text-[#1A1A2E]">{course.name}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 课程内容 */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
              <p className="text-[#666] mb-8">{course.description}</p>

              {/* 试看提示 */}
              <div className="bg-[#F7F6F3] rounded-lg p-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">免费试看</div>
                    <div className="text-sm text-[#666]">每个板块前2节课免费试看</div>
                  </div>
                </div>
              </div>

              {!isFullCourse && (
                <div className="space-y-4">
                  {course.modules.map((module: any, idx: number) => (
                    <details key={idx} className="card">
                      <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                        <span>{module.name}</span>
                        <span className="text-sm text-[#666]">
                          {module.lessons.length}节课程
                        </span>
                      </summary>
                      <div className="mt-4 pt-4 border-t border-[#E8E8E8] space-y-2">
                        {module.lessons.map((lesson: any, i: number) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-3 border-t border-[#E8E8E8]"
                          >
                            <div className="flex items-center gap-3">
                              {lesson.free || hasPurchased ? (
                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                                  <Check className="w-3 h-3" />
                                </span>
                              ) : (
                                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                                  <Lock className="w-3 h-3" />
                                </span>
                              )}
                              <span className="text-sm">{lesson.name}</span>
                            </div>
                            <span className="text-xs text-[#666]">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              )}

              {isFullCourse && (
                <div className="card">
                  <p className="text-[#666]">
                    全套课程包含 AI 板块和自媒体板块的所有课程，共24节。
                    一次购买，永久可看。
                  </p>
                </div>
              )}
            </div>

            {/* 购买侧边栏 */}
            <div>
              <div className="card sticky top-24">
                <div className="text-3xl font-bold mb-2">¥{course.price}</div>
                <p className="text-sm text-[#666] mb-6">
                  {isFullCourse ? "AI + 自媒体全部课程" : "12节课程"}
                </p>

                {hasPurchased ? (
                  <button className="btn btn-primary w-full mb-4">
                    开始学习
                  </button>
                ) : (
                  <>
                    <button className="btn btn-primary w-full mb-4">
                      立即购买
                    </button>
                    <div className="text-sm text-[#666] space-y-2">
                      <div>✓ 永久可看</div>
                      <div>✓ 进入学员群</div>
                      <div>✓ 每周直播答疑</div>
                    </div>
                  </>
                )}

                <div className="mt-6 pt-6 border-t border-[#E8E8E8]">
                  <p className="text-sm text-[#666]">
                    <span className="text-green-500">✓</span> 支持微信/支付宝支付
                  </p>
                  <p className="text-sm text-[#666] mt-2">
                    <span className="text-green-500">✓</span> 3分钟试看免费
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}