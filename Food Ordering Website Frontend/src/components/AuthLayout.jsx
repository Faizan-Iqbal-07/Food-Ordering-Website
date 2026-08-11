import { Link } from "react-router-dom";

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-white max-w-md">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8">
            <span className="text-2xl font-extrabold">FK</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Faizan's Kitchen
          </h1>
          <p className="text-brand-100 text-lg leading-relaxed">
            Order your favorite meals with ease. Fresh ingredients, fast delivery,
            and flavors you'll love.
          </p>
          <div className="mt-10 flex gap-6">
            <div>
              <p className="text-3xl font-extrabold">50+</p>
              <p className="text-brand-200 text-sm">Dishes</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">4.8★</p>
              <p className="text-brand-200 text-sm">Rating</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">30m</p>
              <p className="text-brand-200 text-sm">Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md animate-slide-up">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold">FK</span>
            </div>
            <span className="text-xl font-extrabold text-slate-800">
              Faizan's Kitchen
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-slate-400 mb-6">{subtitle}</p>
            )}
            {!subtitle && <div className="mb-6" />}

            {children}

            {footer && (
              <div className="mt-6 pt-4 border-t border-slate-100 text-center text-sm text-slate-500">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
