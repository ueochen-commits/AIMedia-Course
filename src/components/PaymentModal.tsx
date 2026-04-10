"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Loader, QrCode } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: string;
    name: string;
    price: number;
  };
  userEmail: string | null;
  onSuccess?: () => void;
}

export function PaymentModal({ isOpen, onClose, course, userEmail, onSuccess }: PaymentModalProps) {
  const [orderId, setOrderId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [status, setStatus] = useState<"loading" | "waiting" | "success" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const [expireTime, setExpireTime] = useState(0);

  // 生成唯一订单号
  const generateOrderId = () => {
    return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  // 创建支付订单
  useEffect(() => {
    if (isOpen && course) {
      createPayment();
    }
  }, [isOpen, course]);

  // 轮询订单状态
  useEffect(() => {
    if (status === "waiting" && orderId) {
      const interval = setInterval(async () => {
        try {
          const res = await fetch(`/api/payment/create?order_id=${orderId}`);
          const data = await res.json();
          if (data.status === "success" || data.status === "payed") {
            setStatus("success");
            clearInterval(interval);
          }
        } catch (e) {
          console.error("Query error:", e);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [status, orderId]);

  // 倒计时
  useEffect(() => {
    if (status === "waiting" && expireTime > 0) {
      const timer = setInterval(() => {
        setExpireTime((prev) => {
          if (prev <= 1) {
            setStatus("error");
            setErrorMsg("订单已过期，请重新发起支付");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status, expireTime]);

  const createPayment = async () => {
    setStatus("loading");
    setErrorMsg("");

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: course.name,
          price: course.price,
          order_id: newOrderId,
          courseId: course.id,
          userId: userEmail || "guest",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setQrCode(data.qr);
        setExpireTime(data.expires_in || 7200);
        setStatus("waiting");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "支付创建失败");
      }
    } catch (e) {
      setStatus("error");
      setErrorMsg("网络错误，请重试");
    }
  };

  const handleRefresh = () => {
    createPayment();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md mx-4 bg-white rounded-lg overflow-hidden">
        {/* 标题 */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">支付订单</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 内容 */}
        <div className="p-6">
          {status === "loading" && (
            <div className="text-center py-8">
              <Loader className="w-8 h-8 mx-auto mb-4 text-gray-400 animate-spin" />
              <p className="text-gray-500">正在创建支付订单...</p>
            </div>
          )}

          {status === "waiting" && (
            <div>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-[#1A1A2E]">¥{course.price}</p>
                <p className="text-sm text-gray-500">请用支付宝扫码支付</p>
                {expireTime > 0 && (
                  <p className="text-xs text-orange-500 mt-1">
                    订单有效期: {Math.floor(expireTime / 60)}:{String(expireTime % 60).padStart(2, "0")}
                  </p>
                )}
              </div>

              <div className="flex justify-center mb-4">
                {qrCode && (
                  <img
                    src={`https://xorpay.com/qr?data=${encodeURIComponent(qrCode)}`}
                    alt="支付二维码"
                    className="w-48 h-48"
                  />
                )}
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">支付完成后，请等待页面自动更新</p>
                <button
                  onClick={handleRefresh}
                  className="mt-4 text-sm text-blue-500 hover:text-blue-600"
                >
                  重新发起支付
                </button>
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <p className="text-lg font-semibold text-green-600">支付成功！</p>
              <p className="text-sm text-gray-500 mt-2">你可以开始学习课程了</p>
              <button
                onClick={() => {
                  onSuccess?.();
                  onClose();
                }}
                className="btn btn-primary mt-6"
              >
                前往学习
              </button>
            </div>
          )}

          {status === "error" && (
            <div className="text-center py-8">
              <p className="text-red-500 mb-4">{errorMsg}</p>
              <button onClick={handleRefresh} className="btn btn-primary">
                重试
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}