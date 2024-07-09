import Cart from "../sample/cart.js";
import Food from "../sample/restdata.js";
import User from "../sample/user.js";
import { getUser } from "../service/auth.js";

async function getUserId(req, res) {
  const token = req.cookies.uid;
  if (!token) {
    return null;
  }
  const user = getUser(token);

  if (user) {
    const dbUser = await User.findOne({ email: user.email });
    if (dbUser === null) return null;
    return dbUser._id;
  }

  return null;
}

const getCartItem = async (req, res) => {
  const userId = await getUserId(req, res);
  if (userId === null) {
    return res.status(404).json({ message: "user is not login" });
  }

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removeToCart = async (req, res) => {
  const { foodId } = req.body;
  const userId = await getUserId(req, res);
  if (userId === null) {
    return res.status(404).json({ message: "user is not login" });
  }
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.foodId.toString() === foodId
    );
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    const item = cart.items[itemIndex];

    if (item.quantity > 1) {
      item.quantity -= 1;
      item.total = item.quantity * item.price;
    } else {
      cart.items.splice(itemIndex, 1);
    }

    cart.totalPrice = cart.items.reduce((acc, item) => acc + item.total, 0);

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addToCart = async (req, res) => {
  try {
    const { foodId, quantity } = req.body.item;

    if (!foodId || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userId = await getUserId(req, res);

    const foodItem = await Food.findById(foodId);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.foodId.toString() === foodId
    );
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity;
      cart.items[existingItemIndex].total =
        cart.items[existingItemIndex].quantity *
        cart.items[existingItemIndex].price;
      cart.items[existingItemIndex].quantity *
        cart.items[existingItemIndex].price;
    } else {
      const newItem = {
        foodId: foodItem._id,
        foodImg: foodItem.imgdata,
        name: foodItem.rname,
        quantity,
        price: foodItem.price,
        total: quantity * foodItem.price,
      };
      cart.items.push(newItem);
      cart.totalPrice = cart.items.reduce(
        (accumulator, item) => accumulator + item.total,
        0
      );
    }

    await cart.save();

    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { addToCart, removeToCart, getCartItem, getUserId};
