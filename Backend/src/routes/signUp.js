import express from "express";
import User from "../sample/user.js";
import bcrypt from "bcrypt";
import { setUser } from "../service/auth.js";

const router = express.Router();


router.post("/", async (req, res) => {
  const { name, email, pass, type } = req.body;
  const role = type === false ? "customer" : "admin";
  const password = String(pass);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    
    const savedUser = await newUser.save();
    const token = setUser(savedUser);
    res.cookie("uid", token,  { httpOnly: true, secure: false, sameSite: 'lax' });
    res.status(201).json(savedUser);
  } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to sign up" });
  }
});

export default router;
