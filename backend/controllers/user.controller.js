import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, bio, avatar } = req.body;

    const existingUser = await User.findOne({ email }); // checks if email exists
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10); // encrypting password

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      bio: bio || "",
      avatar: avatar || "",
      role: "user", // only set role from the backend or db
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); // checks if email exists
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password); // compares password
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Incorrect password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
