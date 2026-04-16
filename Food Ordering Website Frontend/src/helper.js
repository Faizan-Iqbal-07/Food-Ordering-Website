import axios from "axios";

export const getCart = async (user) => {
  const res = await axios.get(
    `https://food-ordering-website-9yle.onrender.com/api/get-cart/${user._id}`,
  );
  const data = res.data;
  return data;
};
