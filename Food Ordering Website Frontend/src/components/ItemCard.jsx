import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import { getCart } from "../helper";
import { setCart } from "../redux/slices/CartSlice";

const ItemCard = ({ name, quantity, price, image, _id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const refreshCart = () => {
    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };

  const removeFromCart = async (id) => {
    const res = await axios.delete(
      `https://food-ordering-website-vujx.onrender.com/api/remove-from-cart/${id}`,
    );
    toast.success(res.data.message);
    refreshCart();
  };

  const incrementQuantity = async (id) => {
    await axios.put(
      `https://food-ordering-website-vujx.onrender.com/api/increment-quantity/${id}`,
    );
    refreshCart();
  };

  const decrementQuantity = async (id) => {
    await axios.put(
      `https://food-ordering-website-vujx.onrender.com/api/decrement-quantity/${id}`,
    );
    refreshCart();
  };

  return (
    <div className="relative flex gap-4 bg-white border border-slate-100 rounded-2xl p-3 mb-3 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-xl object-cover shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-slate-800 text-sm truncate">{name}</h3>
          <button
            onClick={() => removeFromCart(_id)}
            className="shrink-0 p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            aria-label="Remove item">
            <MdDelete className="text-lg" />
          </button>
        </div>

        <p className="text-brand-600 font-extrabold text-sm mt-0.5">${price}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-400 font-medium">
            ${(price * quantity).toFixed(2)} total
          </span>
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-1 py-0.5">
            <button
              onClick={() => quantity > 1 && decrementQuantity(_id)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-white transition-colors disabled:opacity-40"
              disabled={quantity <= 1}>
              <AiOutlineMinus className="text-sm" />
            </button>
            <span className="text-sm font-bold text-slate-700 w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={() => incrementQuantity(_id)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-white transition-colors">
              <AiOutlinePlus className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
