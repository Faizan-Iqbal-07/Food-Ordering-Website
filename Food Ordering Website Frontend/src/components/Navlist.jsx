import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";

const Navlist = ({ toggleNav, setToggleNav, auth }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "https://food-ordering-website-vujx.onrender.com/api/logout",
      );
      dispatch(logout());
      toast.success(res.data.message);
      window.location.href = "/";
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <div className="hidden md:flex items-center gap-2">
        {auth ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
            <FiLogOut className="text-base" />
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              <FiLogIn className="text-base" />
              Login
            </Link>
            <Link
              to="/signup"
              className="btn-primary text-sm !py-2 !px-4 flex items-center gap-2">
              <FiUserPlus className="text-base" />
              Sign Up
            </Link>
          </>
        )}
      </div>

      {toggleNav && (
        <div
          className="md:hidden fixed inset-0 top-[120px] bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setToggleNav(false)}
        />
      )}

      <div
        className={`md:hidden fixed top-[120px] right-4 w-52 bg-white rounded-2xl border border-slate-100 shadow-xl p-2 z-40 transition-all duration-300 ${
          toggleNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}>
        {auth ? (
          <button
            onClick={() => {
              handleLogout();
              setToggleNav(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
            <FiLogOut className="text-base" />
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              onClick={() => setToggleNav(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
              <FiLogIn className="text-base" />
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setToggleNav(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-brand-600 hover:bg-brand-50 transition-colors">
              <FiUserPlus className="text-base" />
              Sign Up
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navlist;
