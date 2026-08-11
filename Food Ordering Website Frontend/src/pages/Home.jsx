import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import { MdDeliveryDining, MdRestaurant } from "react-icons/md";

const Home = () => {
  return (
    <div className="min-h-screen pb-24">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-8 sm:p-10 shadow-xl shadow-brand-500/20 animate-fade-in">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-400/20 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <MdRestaurant className="text-sm" />
              Order now & enjoy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Delicious food delivered to your door
            </h2>
            <p className="text-brand-100 text-sm sm:text-base mb-6 leading-relaxed">
              Browse our menu, pick your favorites, and get fresh meals delivered
              in minutes. Fast, tasty, and hassle-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <MdDeliveryDining className="text-white text-xl" />
                <div>
                  <p className="text-white text-xs font-bold">Free Delivery</p>
                  <p className="text-brand-100 text-[10px]">On orders $20+</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="text-white text-xs font-bold">4.8 Rating</p>
                  <p className="text-brand-100 text-[10px]">500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  );
};

export default Home;
