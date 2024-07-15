import React, { useEffect, useState} from "react";
import { fetchingCartItem } from "../services/CartItem.js";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isfetched, setfetched] = useState(false);
  const [totalAmount, setAmount] = useState(0);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await fetchingCartItem();
        if(data) {
          setCartItems(data.items);
          setAmount(data.totalPrice);
          setLogin(true);
        }
        setfetched(true);
      } catch (error) {
        console.error("Error fetching cart items:");
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

    if(!isLogin) {
      return (
        <div>404 not found</div>
      )
  
    }

  return (
    <div className="container-fluid ">
      <div className="cart-item row m-5 justify-content-center">
        <div className="alert alert-primary" role="alert">
          <div>

          <h5>Total Amount : {totalAmount}</h5>
          </div>
          <br />
          <p>Total Items : {cartItems.length}</p>
          <p></p>
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
