import express from 'express';
import cookieParser from 'cookie-parser';
import { getUser } from "../service/auth.js";
import User from "../sample/user.js";



const router = express.Router();
router.use(cookieParser());

router.get('/', async (req, res) => {
    try {
        const token = req.cookies.uid;
        if (!token) {
          return res.status(201).json({ message: "You are not logged in" });
        }
        
        const user = getUser(token);
        
        if (user) {
          const dbUser = await User.findOne({email: user.email });
          return res.status(200).json({dbUser});
        } else {
          return res.status(201).json({ message: "You are not logged in" });
        }
        
      } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
});




export default router;