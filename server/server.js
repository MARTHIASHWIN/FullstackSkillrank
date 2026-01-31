import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

console.log("Connecting to MongoDB...");

await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB connected");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
