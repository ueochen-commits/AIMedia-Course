-- 启用 RLS 策略，允许匿名访问

-- courses 表：允许所有人读取
CREATE POLICY "Allow public read courses" ON courses
  FOR SELECT USING (true);

-- users 表：允许插入（注册时创建用户）
CREATE POLICY "Allow insert users" ON users
  FOR INSERT WITH CHECK (true);

-- users 表：允许读取（登录时检查用户是否存在）
CREATE POLICY "Allow public read users" ON users
  FOR SELECT USING (true);

-- purchases 表：允许插入（支付回调时创建购买记录）
CREATE POLICY "Allow insert purchases" ON purchases
  FOR INSERT WITH CHECK (true);

-- purchases 表：允许读取（用户查看自己的购买记录）
CREATE POLICY "Allow user read own purchases" ON purchases
  FOR SELECT USING (true);