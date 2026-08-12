import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthLayout from "../components/AuthLayout";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "https://food-ordering-website-vujx.onrender.com/api/verify-otp",
        { otp, newPassword: password },
      );
      const data = res.data;

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the code sent to your email and set a new password"
      footer={
        <>
          Back to{" "}
          <Link
            to="/login"
            className="text-brand-600 font-semibold hover:underline">
            Sign in
          </Link>
        </>
      }>
      <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="otp"
            className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
            OTP Code
          </label>
          <input
            type="tel"
            id="otp"
            className="input-field tracking-widest text-center text-lg font-bold"
            autoComplete="off"
            placeholder="1234"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            autoComplete="off"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary w-full !py-3 mt-1">
          Reset Password
        </button>
      </form>
    </AuthLayout>
  );
};

export default VerifyOtp;
