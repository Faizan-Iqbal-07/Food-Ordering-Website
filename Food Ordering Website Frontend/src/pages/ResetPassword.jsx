import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthLayout from "../components/AuthLayout";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "https://food-ordering-website-9yle.onrender.com/api/reset-password",
        { email },
      );
      const data = res.data;

      if (data.success) {
        toast.success(data.message);
        navigate("/verify-otp");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthLayout
      title="Reset password"
      subtitle="Enter your email and we'll send you a verification code"
      footer={
        <>
          Remember your password?{" "}
          <Link to="/login" className="text-brand-600 font-semibold hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            autoComplete="off"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary w-full !py-3 mt-1">
          Send OTP
        </button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
