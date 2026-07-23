import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import asyncHandler from "../middleware/asyncHandler.js";
export const register = asyncHandler(
  async (req, res) => {
  
    const { name, email, password } = req.body;
    const Hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: Hash });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  
    res.status(500).json({
      success: false,
      message: error.message,
    });
}
)
export const login = asyncHandler(
  async (req, res) => {
 
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const hashpass = await bcrypt.compare(password, user.password);
    if (!hashpass) {
      return res.status(400).json("invalid cradintials");
    

    const token = jwt.sign({ id: user._id,email:user.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  return res.status(200).json({msg:"user login successfully",email:{email},token})
  } 
}

)