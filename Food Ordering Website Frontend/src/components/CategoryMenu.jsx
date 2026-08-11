import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 animate-slide-up">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800">
            Explore Menu
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Find the best food for your mood
          </p>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`category-pill ${selectedCategory === "All" && "category-pill-active"}`}
        >
          🍽️ All
        </button>
        {categories.map((category, index) => {
          const emoji =
            category === "Pizza"
              ? "🍕"
              : category === "Burger"
                ? "🍔"
                : category === "Pasta"
                  ? "🍝"
                  : category === "Salad"
                    ? "🥗"
                    : category === "Dessert"
                      ? "🍰"
                      : "🍴";
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`category-pill ${selectedCategory === category && "category-pill-active"}`}
            >
              {emoji} {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
