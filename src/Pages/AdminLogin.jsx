// src/pages/AdminLogin.jsx
import { useState } from "react";
import { api } from "../api/client.js";
import { useAuth } from "../auth/useAuth.js";
import { useNavigate, useLocation } from "react-router-dom";

export default function AdminLogin() {
  const [step, setStep] = useState("send"); // send | verify
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔁 Redirect target (important)
  const from = location.state?.from?.pathname || "/admin/waitlist";

  // 📩 Send OTP
  const sendOtp = async () => {
    try {
      setLoading(true);
      await api("/api/auth/admin/send-otp", { method: "POST" });
      setStep("verify");
    } catch (e) {
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Verify OTP
  const verifyOtp = async () => {
    try {
      setLoading(true);

      const data = await api("/api/auth/admin/verify-otp", {
        method: "POST",
        body: JSON.stringify({ otp }),
      });

      // ✅ Save token
      login(data.token);

      // ✅ Redirect to original page
      navigate(from, { replace: true });

    } catch (e) {
      alert("Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
      <div className="bg-white/5 p-8 rounded-xl w-full max-w-md border border-white/10">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        {step === "send" && (
          <button
            onClick={sendOtp}
            disabled={loading}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
          >
            {loading ? "Sending OTP..." : "Send OTP to Admin Mail"}
          </button>
        )}

        {step === "verify" && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mb-4 px-3 py-2 rounded bg-white/10 outline-none border border-white/10 focus:border-indigo-500"
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            {/* resend option */}
            <button
              onClick={sendOtp}
              className="mt-3 text-sm text-indigo-400 hover:underline"
            >
              Resend OTP
            </button>
          </>
        )}

      </div>
    </div>
  );
}