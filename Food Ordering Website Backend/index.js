const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectDb } = require("./connection");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://food-ordering-website-opal.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
});
