import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-green-500">
            Oops!
          </p>
          <h1 className="mt-4 text-6xl font-bold text-slate-900">404</h1>
          <p className="mt-4 text-xl font-semibold text-slate-800">
            Page not found
          </p>
          <p className="mt-3 text-slate-500">
            The Food item you're looking for isn't available. Let's bring you
            back to the kitchen.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-5 text-center">
            <p className="text-sm font-semibold text-slate-600">Home</p>
            <p className="mt-2 text-sm text-slate-400">
              Browse fresh dishes and start a new order.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 text-center">
            <p className="text-sm font-semibold text-slate-600">Cart</p>
            <p className="mt-2 text-sm text-slate-400">
              Your saved items are still waiting for you.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 text-center">
            <p className="text-sm font-semibold text-slate-600">Support</p>
            <p className="mt-2 text-sm text-slate-400">
              Refresh the page or choose another section.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-300 transition "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
