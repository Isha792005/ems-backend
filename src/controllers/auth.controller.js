import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const Hash = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: Hash });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
});
export const login = asyncHandler(async (req, res) => {
  console.log("LOGIN API HIT");

  const { email, password } = req.body;

  console.log("Email received:", email);

  const user = await User.findOne({ email });

  console.log("User found:", user ? "YES" : "NO");

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  console.log("Password checked");

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return res.status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
});

