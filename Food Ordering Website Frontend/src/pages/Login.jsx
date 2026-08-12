import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://food-ordering-website-vujx.onrender.com/api/login",
        { email, password },
      );

      if (res.status === 200) {
        dispatch(loginUser());
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue ordering delicious food"
      footer={
        <>
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-brand-600 font-semibold hover:underline">
            Sign up
          </Link>
        </>
      }>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
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

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
            Password
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

        <Link
          to="/forgot-password"
          className="text-xs text-brand-600 font-semibold hover:underline -mt-1 self-end">
          Forgot password?
        </Link>

        <button type="submit" className="btn-primary w-full !py-3 mt-1">
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
