import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Navlist from "./Navlist";
import { setUser, loginUser } from "../redux/slices/AuthSlice";
import { getCart } from "../helper";
import axios from "axios";
import { setCart } from "../redux/slices/CartSlice";
axios.defaults.withCredentials = true;

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth.isAuth);

  const getUser = async () => {
    const res = await axios.get(
      "https://food-ordering-website-vujx.onrender.com/api/get-user",
      {
        withCredentials: true,
      },
    );
    const data = res.data;
    dispatch(setUser(data.user));
    dispatch(loginUser());
  };

  getCart(user).then((data) => {
    dispatch(setCart(data.cartItems));
  });

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-md shadow-brand-500/30 shrink-0">
            <span className="text-white text-lg font-extrabold">FK</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-extrabold text-slate-800 truncate">
              Faizan's Kitchen
            </h1>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Fresh food, fast delivery
            </p>
          </div>
        </div>

        <div className="relative flex-1 max-w-md hidden md:block">
          <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
          <input
            type="search"
            name="search"
            placeholder="Search dishes..."
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="input-field pl-11 py-2.5 text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          {auth && user?.name && (
            <span className="hidden lg:block text-sm font-semibold text-slate-600">
              Hi, {user.name.split(" ")[0]} 👋
            </span>
          )}

          <button
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setToggleNav(!toggleNav)}
            aria-label="Toggle menu">
            {toggleNav ? (
              <MdClose className="text-2xl text-slate-600" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-slate-600" />
            )}
          </button>

          <Navlist
            toggleNav={toggleNav}
            setToggleNav={setToggleNav}
            auth={auth}
          />
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
          <input
            type="search"
            name="search"
            placeholder="Search dishes..."
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="input-field pl-11 py-2.5 text-sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
