-- 用户表
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_verified BOOLEAN DEFAULT FALSE
);

-- 课程表
CREATE TABLE courses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  modules JSONB DEFAULT '[]'
);

-- 购买记录表
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  course_id TEXT REFERENCES courses(id),
  order_id TEXT UNIQUE,
  aoid TEXT,
  amount NUMERIC(10, 2),
  payment_status TEXT DEFAULT 'pending',
  paid_at TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 课时表
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL REFERENCES courses(id),
  module_name TEXT NOT NULL,
  module_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  lesson_order INTEGER NOT NULL,
  tencent_file_id TEXT,
  duration TEXT,
  is_free BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用 RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- 插入课程数据
INSERT INTO courses (id, name, description, price) VALUES
('ai', 'AI板块', '从零基础到用AI开发产品', 499),
('media', '自媒体板块', '从自媒体认知到变现体系', 499),
('full', '全套课程', 'AI+自媒体全部课程', 799);