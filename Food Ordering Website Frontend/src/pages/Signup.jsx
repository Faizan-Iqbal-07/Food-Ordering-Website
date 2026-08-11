import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthLayout from "../components/AuthLayout";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://food-ordering-website-9yle.onrender.com/api/signup",
      { name, email, password },
    );

    const data = res.data;

    if (res.status === 201) {
      toast.success(data.message);
      navigate("/login");
    } else if (res.status === 400 || res.status === 500) {
      toast.error(data);
    }
  };

  return (
    <AuthLayout
      title="Create account"
      subtitle="Join us and start ordering your favorite meals"
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-brand-600 font-semibold hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            autoComplete="off"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <div>
          <label htmlFor="password" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
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

        <button type="submit" className="btn-primary w-full !py-3 mt-1">
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
