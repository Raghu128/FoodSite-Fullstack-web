const addItemToCart = async (item) => {
  try {
    const response = await fetch("http://localhost:3000/api/cart/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ item }),
    });

    if (response.ok) {
      // const data = await response.json();
    } else {
      console.error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error:");
  }
};

async function deductCartItem(foodId) {
  try {
    const response = await fetch("http://localhost:3000/api/cart/remove-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ foodId }),
    });

    if (response.ok) {
      // const updatedCart = await response.json();
      console.log("Cart updated");
    } else {
      console.error("Failed to deduct item from cart");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchingCartItem() {
  try {
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      
    });

    if (response.ok) {
      const cartItem = await response.json();
      return cartItem;
    } else {
      console.error("Failed to fetch item from cart");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return null;
}

export { addItemToCart, deductCartItem, fetchingCartItem };
