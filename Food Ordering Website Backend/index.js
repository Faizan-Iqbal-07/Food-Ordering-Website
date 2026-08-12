const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectDb } = require("./connection");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

app.use(
  cors({
    origin: ["https://food-ordering-website-tau-lyart.vercel.app"],
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
