import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("🔹 MONGO_URI from .env:", process.env.MONGO_URI); // Check if .env is loading

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
  }
};

connectDB();
