export default function UserPage() {
  // 模拟用户数据
  const user = {
    email: "user@example.com",
    purchasedCourses: ["ai"],
    progress: {
      ai: 35,
    },
  };

  const courses = [
    {
      id: "ai",
      name: "AI 板块",
      price: 499,
      lessons: 12,
      completed: 4,
    },
    {
      id: "media",
      name: "自媒体板块",
      price: 499,
      lessons: 12,
      completed: 0,
    },
  ];

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
                  <span className="text-2xl font-bold">U</span>
                </div>
                <div className="font-semibold mb-1">{user.email}</div>
                <div className="text-sm text-[#666]">免费用户</div>
              </div>

              <div className="mt-6 space-y-2">
                <a
                  href="/user"
                  className="block p-3 bg-[#F7F6F3] rounded-lg font-medium"
                >
                  我的课程
                </a>
                <a
                  href="#"
                  className="block p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  学习进度
                </a>
                <a
                  href="#"
                  className="block p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  学员群
                </a>
                <a
                  href="#"
                  className="block p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  直播日程
                </a>
                <a
                  href="#"
                  className="block p-3 hover:bg-[#F7F6F3] rounded-lg text-[#666]"
                >
                  账号设置
                </a>
                <a
                  href="/login"
                  className="block p-3 hover:bg-[#F7F6F3] rounded-lg text-red-500"
                >
                  退出登录
                </a>
              </div>
            </div>

            {/* 主内容 */}
            <div className="md:col-span-2 space-y-6">
              <div className="card">
                <h2 className="text-xl font-semibold mb-6">我的课程</h2>

                {user.purchasedCourses.length > 0 ? (
                  <div className="space-y-4">
                    {courses
                      .filter((c) => user.purchasedCourses.includes(c.id))
                      .map((course) => (
                        <div
                          key={course.id}
                          className="border border-[#E8E8E8] rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">{course.name}</h3>
                            <span className="text-sm text-[#666]">
                              {course.completed}/{course.lessons} 节课
                            </span>
                          </div>
                          <div className="w-full bg-[#E8E8E8] rounded-full h-2 mb-3">
                            <div
                              className="bg-[#1A1A2E] rounded-full h-2"
                              style={{
                                width: `${
                                  (course.completed / course.lessons) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <a
                            href={`/courses/${course.id}`}
                            className="btn btn-secondary text-sm"
                          >
                            继续学习
                          </a>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-[#666] mb-4">你还没有购买任何课程</p>
                    <a href="/courses" className="btn btn-primary">
                      前往购买
                    </a>
                  </div>
                )}
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-6">推荐课程</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courses
                    .filter((c) => !user.purchasedCourses.includes(c.id))
                    .map((course) => (
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
                          <button className="btn btn-primary text-sm py-2 px-4">
                            购买
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-4">学员群二维码</h2>
                <p className="text-[#666] text-sm mb-4">
                  购买课程后会自动解锁学员群二维码
                </p>
                <div className="w-40 h-40 bg-[#F7F6F3] rounded-lg flex items-center justify-center">
                  <span className="text-[#666] text-sm">二维码</span>
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-4">直播日程</h2>
                <p className="text-[#666] text-sm mb-4">
                  每周一次直播答疑，时长1.5-2小时
                </p>
                <div className="p-4 bg-[#F7F6F3] rounded-lg">
                  <div className="font-medium">下一场直播</div>
                  <div className="text-sm text-[#666]">时间待定</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}