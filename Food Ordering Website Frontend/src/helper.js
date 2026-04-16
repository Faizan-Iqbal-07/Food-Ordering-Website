import axios from "axios";

export const getCart = async (user) => {
  const res = await axios.get(
    `http://localhost:3000/api/get-cart/${user._id}`,
  );
  const data = res.data;
  return data;
};
