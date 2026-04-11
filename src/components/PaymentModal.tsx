"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader } from "lucide-react";

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
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [status, setStatus] = useState<"loading" | "waiting" | "success" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const [expireTime, setExpireTime] = useState(0);

  const generateOrderId = () => {
    return `order_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  };

  useEffect(() => {
    if (isOpen && course) {
      createPayment();
    }
  }, [isOpen, course]);

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  const handleRefresh = () => {
    createPayment();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.35)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#ffffff",
          border: "0.5px solid rgba(0,0,0,0.1)",
          borderRadius: "12px",
          maxWidth: "380px",
          width: "100%",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: 500, color: "#18181b" }}>支付订单</span>
          <button
            onClick={onClose}
            style={{
              width: "24px",
              height: "24px",
              border: "0.5px solid rgba(0,0,0,0.1)",
              borderRadius: "5px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 2.5L9.5 9.5M2.5 9.5L9.5 2.5" stroke="#a39e98" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Loading State */}
        {status === "loading" && (
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <Loader style={{ width: "24px", height: "24px", color: "#a39e98", animation: "spin 1s linear infinite" }} />
            <p style={{ fontSize: "13px", color: "#615d59", marginTop: "16px" }}>正在创建支付订单...</p>
          </div>
        )}

        {/* Waiting State */}
        {status === "waiting" && (
          <div style={{ padding: "24px 20px" }}>
            {/* 金额区 */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <p style={{ fontSize: "11px", color: "#a39e98", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                应付金额
              </p>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "2px" }}>
                <span style={{ fontSize: "20px", color: "#615d59" }}>¥</span>
                <span style={{ fontSize: "40px", fontWeight: 500, color: "#18181b", letterSpacing: "-1.5px" }}>{course.price}</span>
              </div>
              {expireTime > 0 && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#f6f5f4",
                    borderRadius: "4px",
                    padding: "3px 10px",
                    marginTop: "12px",
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#16a34a" }}></span>
                  <span style={{ fontSize: "11px", color: "#615d59", fontWeight: 500 }}>
                    订单有效期 {formatTime(expireTime)}
                  </span>
                </div>
              )}
            </div>

            {/* 二维码区 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  border: "0.5px solid rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "12px",
                }}
              >
                {qrCode && (
                  <img
                    src={`https://xorpay.com/qr?data=${encodeURIComponent(qrCode)}`}
                    alt="支付二维码"
                    width="160"
                    height="160"
                    style={{ display: "block" }}
                  />
                )}
              </div>
              <p style={{ fontSize: "13px", color: "#615d59" }}>
                请用<span style={{ fontWeight: 500, color: "#18181b" }}>支付宝</span>扫码完成支付
              </p>
              <p style={{ fontSize: "12px", color: "#a39e98", marginTop: "6px" }}>支付完成后页面将自动更新</p>
            </div>
          </div>
        )}

        {/* Success State */}
        {status === "success" && (
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <CheckCircle style={{ width: "48px", height: "48px", color: "#16a34a", margin: "0 auto" }} />
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#16a34a", marginTop: "16px" }}>支付成功</p>
            <p style={{ fontSize: "13px", color: "#615d59", marginTop: "4px" }}>你可以开始学习课程了</p>
            <button
              onClick={() => {
                onSuccess?.();
                onClose();
                router.push(`/learn/${course.id}`);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
                background: "#18181b",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "24px",
              }}
            >
              前往学习
            </button>
          </div>
        )}

        {/* Error State */}
        {status === "error" && (
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#dc2626", marginBottom: "16px" }}>{errorMsg}</p>
            <button
              onClick={handleRefresh}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
                background: "#18181b",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              重试
            </button>
          </div>
        )}

        {/* Footer - Only show in waiting state */}
        {status === "waiting" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderTop: "0.5px solid rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "12px", color: "#a39e98" }}>遇到问题？</span>
            <button
              onClick={handleRefresh}
              style={{
                border: "0.5px solid rgba(0,0,0,0.15)",
                background: "transparent",
                borderRadius: "5px",
                padding: "5px 12px",
                fontSize: "12px",
                fontWeight: 500,
                color: "#18181b",
                cursor: "pointer",
              }}
            >
              重新发起支付
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}