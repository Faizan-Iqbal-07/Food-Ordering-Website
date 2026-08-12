import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import axios from "axios";
axios.defaults.withCredentials = true;

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce(
    (totalQty, item) => totalQty + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const checkout = async () => {
    try {
      const res = await axios.get(
        "https://food-ordering-website-vujx.onrender.com/api/checkout",
      );
      const { url } = res.data;
      window.location.href = url;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {activeCart && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setActiveCart(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 w-full sm:w-[400px] h-full bg-white z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <HiOutlineShoppingBag className="text-brand-600 text-xl" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-800">
                My Order
              </h2>
              <p className="text-xs text-slate-400">{totalQty} items</p>
            </div>
          </div>
          <button
            onClick={() => setActiveCart(false)}
            className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors">
            <IoMdClose className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length > 0 ? (
            cartItems.map((food) => <ItemCard key={food.id} {...food} />)
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <FaShoppingCart className="text-3xl text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-2">
                Your cart is empty
              </h3>
              <p className="text-sm text-slate-400 max-w-[200px]">
                Add some delicious dishes to get started!
              </p>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-slate-100 px-6 py-5 bg-slate-50/50">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-slate-500">
                Subtotal ({totalQty} items)
              </span>
              <span className="text-sm font-semibold text-slate-700">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-bold text-slate-800">Total</span>
              <span className="text-xl font-extrabold text-brand-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={checkout}
              className="w-full btn-primary !py-3.5 text-base">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-6 right-6 z-30 w-16 h-16 rounded-2xl bg-brand-500 text-white shadow-xl shadow-brand-500/30 flex items-center justify-center hover:bg-brand-600 hover:scale-105 active:scale-95 transition-all duration-200 ${
          totalQty > 0 ? "animate-bounce" : ""
        }`}
        aria-label="Open cart">
        <FaShoppingCart className="text-2xl" />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent-500 text-white text-xs font-extrabold rounded-full flex items-center justify-center shadow-md border-2 border-white">
            {totalQty}
          </span>
        )}
      </button>
    </>
  );
};

export default Cart;
