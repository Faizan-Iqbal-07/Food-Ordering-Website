import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { MdSearchOff } from "react-icons/md";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const filteredFood = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    }
    return (
      category === food.category &&
      food.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "12px",
            background: "#1e293b",
            color: "#fff",
            fontWeight: "600",
            fontSize: "14px",
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {filteredFood.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFood.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <MdSearchOff className="text-4xl text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">
              No dishes found
            </h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Try a different search term or browse another category.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FoodItems;
