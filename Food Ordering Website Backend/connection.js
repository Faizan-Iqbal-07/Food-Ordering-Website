const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_PATH);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1); // Exit if DB connection fails
  }
};

module.exports = { connectDb };
