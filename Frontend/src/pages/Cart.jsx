import React, { useEffect, useState } from "react";
import { fetchingCartItem } from "../services/CartItem.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isfetched, setfetched] = useState(false);
  const [totalAmount, setAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await fetchingCartItem();
        if(data) {
          setCartItems(data.items);
          setAmount(data.totalPrice);
        }
        setfetched(true);
      } catch (error) {
        // console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  if (!isfetched)
    return (
      <div className="conatiner-fluid justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border " role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container-fluid ">
      <div className="row">
        <button
          className="btn btn btn-outline-primary col-1 m-3"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>

      <div className="cart-item row m-5 justify-content-center">
        <div className="alert alert-primary" role="alert">
          Total Amount : {totalAmount}
        </div>
        {cartItems.map((item) => {
          return (
            <div className=" col-3 m-4 roundedm border rounded" key={item._id}>
              <img
                src={item.foodImg}
                className="card-img-top mt-2 mb-2"
                alt="asd"
              />
              <div className="card-body  p-2">
                <p>{item.name}</p>
                <p className="card-text">Price : $ {item.price}</p>
                <p>Quantity : {item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
