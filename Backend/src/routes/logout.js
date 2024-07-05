import express from 'express'



const route = express.Router();


route.post('/', (req, res) => {
    try {
      res.clearCookie('uid', { httpOnly: true, secure: false, sameSite: 'strict' });
      return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error("Error logging out:", error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  


export default route;