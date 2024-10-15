import dotenv from "dotenv";
import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

// Load environment variables from .env file
dotenv.config();

connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,  // corrected typo from APT to API
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
