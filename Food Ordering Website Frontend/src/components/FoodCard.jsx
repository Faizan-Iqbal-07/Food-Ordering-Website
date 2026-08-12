import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../helper";
import { setCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const addToCart = async ({ id, name, img, price, rating, quantity }) => {
    const res = await axios.post(
      `https://food-ordering-website-vujx.onrender.com/api/add-to-cart/${user._id}`,
      {
        id,
        image: img,
        name,
        price,
        rating,
        quantity,
      },
    );

    const data = res.data;
    toast.success(data.message);

    getCart(user).then((data) => {
      dispatch(setCart(data.cartItems));
    });
  };

  return (
    <div className="group w-full sm:w-[280px] bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100">
      <div className="relative overflow-hidden h-[160px]">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
          <AiFillStar className="text-amber-400 text-sm" />
          <span className="text-xs font-bold text-slate-700">{rating}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <h2 className="font-bold text-slate-800 text-base leading-snug">
            {name}
          </h2>
          <span className="text-brand-600 font-extrabold text-lg shrink-0">
            ${price}
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
          {desc}
        </p>

        <button
          onClick={() => {
            !user
              ? toast.error("Please Login to add items to cart")
              : addToCart({ id, name, img, price, rating, quantity: 1 });
          }}
          className="mt-1 w-full flex items-center justify-center gap-2 btn-primary text-sm !py-2.5">
          <FiShoppingCart className="text-base" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
