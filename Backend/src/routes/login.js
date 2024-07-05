import express from "express";
import User from "../sample/user.js";
import bcrypt from "bcrypt";
import { getUser, setUser } from "../service/auth.js";
import cookieParser from "cookie-parser";


const router = express.Router();

router.use(cookieParser());

router.get('/', (req, res) => {
  const token = req.cookies.uid;
  console.log(token);
  const user =  getUser(token);

    res.status(200).json({ user: user });
});


router.post("/", async (req, res) => {
  const { email, pass } = req.body;
  const password = String(pass);


  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = setUser(user);
    res.cookie("uid", token, { httpOnly: true, secure: false, sameSite: 'lax' });

    res.status(200).json({ message: 'Login successful' });
  
  } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to Login" });
  }
});

export default router;
