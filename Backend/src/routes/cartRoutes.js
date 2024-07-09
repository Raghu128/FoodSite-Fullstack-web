import express from 'express';
import {addToCart, removeToCart, getCartItem} from '../controllers/cartController.js';
import cookieParser from 'cookie-parser'
const router = express.Router();
router.use(cookieParser());

router.get('/', getCartItem);
router.post('/add-to-cart', addToCart);
router.post('/remove-to-cart', removeToCart);


export default router;
