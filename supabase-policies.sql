-- 用户表 RLS 策略
-- users 表使用 auth.uid() 进行数据隔离

-- 允许公开读取用户（登录时检查用户是否存在）
CREATE POLICY "Allow public read users" ON users
  FOR SELECT USING (true);

-- 允许插入新用户
CREATE POLICY "Allow insert users" ON users
  FOR INSERT WITH CHECK (true);

-- 用户只能更新自己的记录（通过 auth.uid() 匹配）
CREATE POLICY "Allow update own user" ON users
  FOR UPDATE USING (auth.uid() = id);

-- 课程表 RLS 策略 - 公开可读
CREATE POLICY "Allow public read courses" ON courses
  FOR SELECT USING (true);

-- 购买记录表 RLS 策略
-- 用户只能查看自己的购买记录
CREATE POLICY "Allow user read own purchases" ON purchases
  FOR SELECT USING (auth.uid() = user_id);

-- 允许服务端插入购买记录（支付回调）
CREATE POLICY "Allow service role insert purchases" ON purchases
  FOR INSERT WITH CHECK (true);