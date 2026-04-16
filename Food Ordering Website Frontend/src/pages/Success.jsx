import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
axios.defaults.withCredentials = true;

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const clearCart = async () => {
    const res = await axios.get(
      "https://food-ordering-website-9yle.onrender.com/api/clear-cart",
    );
    const data = await res.data;
    toast.success(data.message);
  };

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-100 flex items-center justify-center px-4 py-10">
      {loading ? (
        <div className="max-w-xl w-full bg-white/95 border border-emerald-100 shadow-2xl shadow-emerald-200 rounded-[32px] p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-700 mb-4">
            Wrapping up your order...
          </h2>
          <p className="text-slate-500 mb-8">
            Please wait while we clear your cart and confirm your order.
          </p>
          <div className="flex justify-center">
            <PropagateLoader color="#10b981" />
          </div>
        </div>
      ) : (
        <div className="max-w-xl w-full bg-white/95 border border-emerald-100 shadow-2xl shadow-emerald-200 rounded-[32px] p-10 text-center">
          <div className="mx-auto mb-6 h-28 w-28 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
            Order Successful!
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-8">
            Your order has been successfully placed. Thank you for choosing us!
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-500 transition duration-200"
          >
            Back to Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Success;
