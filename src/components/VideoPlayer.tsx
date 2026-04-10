"use client";

import { useState } from "react";
import { X, Play, Loader } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoPlayer({ videoUrl, title, isOpen, onClose }: VideoPlayerProps) {
  const [loading, setLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 遮罩层 */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* 播放器容器 */}
      <div className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden">
        {/* 标题栏 */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A2E]">
          <h3 className="text-white font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 视频区域 */}
        <div className="relative aspect-video bg-black">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="w-8 h-8 text-white/50 animate-spin" />
            </div>
          )}
          <video
            src={videoUrl}
            controls
            className="w-full h-full"
            onCanPlay={() => setLoading(false)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
}