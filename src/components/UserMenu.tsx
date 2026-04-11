"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { User, LogOut, ChevronDown } from "lucide-react";

export function UserMenu() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkUser();

    // 监听 Supabase auth 状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        checkUser();
      }
    });

    // 点击外部关闭菜单
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user ? { email: user.email || "" } : null);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) {
    return <div className="w-8"></div>;
  }

  if (!user) {
    return (
      <Link href="/login" className="btn btn-primary">
        登录
      </Link>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F7F6F3] transition"
      >
        <div className="w-8 h-8 bg-[#1A1A2E] rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm text-[#666] hidden md:inline">我的</span>
        <ChevronDown className={`w-4 h-4 text-[#666] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E8E8E8] py-2">
          <div className="px-4 py-2 border-b border-[#E8E8E8]">
            <p className="text-sm text-[#666]">已登录</p>
            <p className="text-sm font-medium truncate">{user.email}</p>
          </div>
          <Link
            href="/user"
            className="block px-4 py-2 text-sm hover:bg-[#F7F6F3] transition"
          >
            用户中心
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#F7F6F3] transition"
          >
            退出登录
          </button>
        </div>
      )}
    </div>
  );
}