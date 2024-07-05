import express from "express";
import RESTDATA from "../sample/restdata.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await RESTDATA.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { rname, imgdata, price } = req.body;

  try {
    const newCard = new RESTDATA({
      rname,
      imgdata,
      price,
    });

    const savedCard = await newCard.save();
    res.json(savedCard);
  } catch (error) {
    res.status(500).json({ error: "Failed to add card" });
  }
});

export default router;
