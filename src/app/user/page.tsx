"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { User, BookOpen, Users, Calendar, Settings, LogOut, ChevronRight, Play, Award, Clock } from "lucide-react";

interface UserData {
  id: string;
  email: string;
  created_at: string;
}

interface Purchase {
  id: string;
  course_id: string;
  created_at: string;
  payment_status: string;
}

export default function UserPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser({ id: user.id, email: user.email || "", created_at: user.created_at });
      // 获取购买记录
      const { data: purchases } = await supabase
        .from("purchases")
        .select("*")
        .eq("user_id", user.id)
        .eq("payment_status", "completed");
      if (purchases) setPurchases(purchases);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  // 用户已购买的课程ID列表
  const purchasedCourseIds = purchases.map(p => p.course_id);

  const courses = [
    { id: "ai", name: "AI 板块", price: 0.01, lessons: 12, completed: 0, purchased: purchasedCourseIds.includes('ai') },
    { id: "media", name: "自媒体板块", price: 0.01, lessons: 12, completed: 0, purchased: purchasedCourseIds.includes('media') },
    { id: "full", name: "全套课程", price: 0.01, lessons: 24, completed: 0, purchased: purchasedCourseIds.includes('full') },
  ];

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p className="text-[#666]">加载中...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container py-16 text-center">
        <div className="card max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">请先登录</h2>
          <p className="text-[#666] mb-6">登录后查看你的课程</p>
          <Link href="/login" className="btn btn-primary w-full">
            立即登录
          </Link>
        </div>
      </div>
    );
  }

  const purchasedCourses = courses.filter(c => c.purchased);
  const unpurchasedCourses = courses.filter(c => !c.purchased);

  return (
    <div>
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">用户中心</h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 侧边栏 */}
            <div className="card h-fit">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F7F6F3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-[#666]" />
                </div>
                <div className="font-semibold mb-1 truncate">{user.email}</div>
                <div className="text-sm text-[#666]">
                  {purchasedCourses.length > 0 ? "付费学员" : "免费用户"}
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <Link
                  href="/user"
                  className="flex items-center justify-between p-3 bg-[#F7F6F3] rounded-lg font-medium"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> 我的课程
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" /> 学习进度
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> 学员群
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> 直播日程
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  <span className="flex items-center gap-2">
                    <Settings className="w-4 h-4" /> 账号设置
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-between w-full p-3 hover:bg-[#F7F6F3] rounded-lg text-red-500"
                >
                  <span className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" /> 退出登录
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 主内容 */}
            <div className="md:col-span-2 space-y-6">
              <div className="card">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> 我的课程
                </h2>

                {purchasedCourses.length > 0 ? (
                  <div className="space-y-4">
                    {purchasedCourses.map((course) => (
                      <div
                        key={course.id}
                        className="border border-[#E8E8E8] rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{course.name}</h3>
                          <span className="text-sm text-[#666]">
                            已购买
                          </span>
                        </div>
                        <div className="w-full bg-[#E8E8E8] rounded-full h-2 mb-3">
                          <div
                            className="bg-[#1A1A2E] rounded-full h-2"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <Link
                          href={`/courses/${course.id}`}
                          className="btn btn-secondary text-sm flex items-center gap-2"
                        >
                          <Play className="w-4 h-4" /> 开始学习
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="w-12 h-12 text-[#E8E8E8] mx-auto mb-4" />
                    <p className="text-[#666] mb-4">你还没有购买任何课程</p>
                    <Link href="/courses" className="btn btn-primary">
                      前往购买
                    </Link>
                  </div>
                )}
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5" /> 推荐课程
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {unpurchasedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="border border-[#E8E8E8] rounded-lg p-4"
                    >
                      <h3 className="font-semibold mb-2">{course.name}</h3>
                      <p className="text-sm text-[#666] mb-3">
                        {course.lessons}节课程
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">
                          ¥{course.price}
                        </span>
                        <Link href={`/courses/${course.id}`} className="btn btn-primary text-sm py-2 px-4">
                          购买
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" /> 学员群二维码
                </h2>
                <p className="text-[#666] text-sm mb-4">
                  购买课程后会自动解锁学员群二维码
                </p>
                <div className="w-40 h-40 bg-[#F7F6F3] rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#666]" />
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> 直播日程
                </h2>
                <p className="text-[#666] text-sm mb-4">
                  每周一次直播答疑，时长1.5-2小时
                </p>
                <div className="p-4 bg-[#F7F6F3] rounded-lg">
                  <div className="font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 下一场直播
                  </div>
                  <div className="text-sm text-[#666]">时间待定，学员群内通知</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}