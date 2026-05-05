// src/pages/AdminLogin.jsx

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client.js";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  const otpInputRef = useRef(null);

  useEffect(() => {
    if (otpInputRef.current) {
      otpInputRef.current.value = "";
    }
  }, [step]);

  const startTimer = () => {
    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  /**
   * ✅ SEND OTP
   */
  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!email) {
      return Swal.fire({
        title: "Error",
        text: "Please enter your email",
        icon: "error",
        background: "#1f2937",
        color: "#fff",
      });
    }

    setLoading(true);

    try {
      const data = await api("/api/admin/auth/send-otp", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (data.success) {
        setStep("otp");
        setOtp("");
        startTimer();

        // Only show generic success message, no OTP popup
        Swal.fire({
          title: "OTP Sent",
          text: "Check your email for the OTP",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          background: "#1f2937",
          color: "#fff",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to send OTP",
        icon: "error",
        background: "#1f2937",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * ✅ VERIFY OTP
   */
  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      return Swal.fire({
        title: "Error",
        text: "Enter valid 6-digit OTP",
        icon: "error",
        background: "#1f2937",
        color: "#fff",
      });
    }

    setLoading(true);

    try {
      const data = await api("/api/admin/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify({ email, otp }),
      });

      if (data.success) {
        localStorage.setItem("adminToken", data.data.token);

        Swal.fire({
          title: "Success",
          text: "Login successful",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#1f2937",
          color: "#fff",
        });

        setTimeout(() => {
          navigate("/admin/waitlist");
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Invalid OTP",
        icon: "error",
        background: "#1f2937",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * ✅ RESEND OTP
   */
  const handleResendOTP = async () => {
    if (timer > 0) {
      return Swal.fire({
        title: "Wait",
        text: `Retry in ${timer}s`,
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
        background: "#1f2937",
        color: "#fff",
      });
    }

    setLoading(true);

    try {
      const data = await api("/api/admin/auth/resend-otp", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (data.success) {
        startTimer();

        Swal.fire({
          title: "OTP Resent",
          text: "Check your email for the new OTP",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          background: "#1f2937",
          color: "#fff",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to resend OTP",
        icon: "error",
        background: "#1f2937",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#0F172A] flex items-center justify-center p-4">
      <div className="bg-[#111827] rounded-2xl p-8 max-w-md w-full border border-gray-800">

        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Admin Login
        </h1>

        {step === "email" ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@velsaka.com"
              className="w-full p-2 bg-gray-800 text-white rounded"
              required
            />

            <button
              disabled={loading}
              className="w-full bg-indigo-500 p-2 rounded text-white"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <input
              value={email}
              disabled
              className="w-full p-2 bg-gray-800 text-gray-400 rounded"
            />

            <input
              ref={otpInputRef}
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className="w-full p-2 text-center text-xl tracking-widest bg-gray-800 text-white rounded"
              placeholder="XXXXXX"
            />

            <button
              disabled={loading}
              className="w-full bg-green-500 p-2 rounded text-white"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>

            <button
              type="button"
              onClick={handleResendOTP}
              disabled={timer > 0}
              className="w-full text-indigo-400"
            >
              {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;