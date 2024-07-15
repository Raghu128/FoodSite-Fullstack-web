import React, { useState, useEffect } from "react";
import CardTitle from "./CardTitle.jsx";
import AddFoodCard from "./AddFoodCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchingCartItem } from "../services/CartItem.js";
import { updateIsSearch } from "../redux/searchFood.js";

function Cards() {
  const cardData = useSelector((state) => state.cardData.data);
  const role = useSelector((state) => state.userLogin.role);
  const [cartItems, setCartItems] = useState([]);
  const [fetched, setfetched] = useState(false);
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updateIsSearch(false));
  }, [dispatch])

  const fetchCartItems = async () => {
    try {
      const data = await fetchingCartItem();
      if(data) setCartItems(data.items);
      setfetched(true);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
     fetchCartItems();
  }, []);

  if (!fetched && isLogin === true) {
    return (
      <div className="conatiner-fluid justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border " role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card-container">
      <h1 id="card-container-header">ADD Foods into your Cart</h1>

      <div className="all-cards">
        {cardData.map((card) => {
          const cartItem = cartItems.find((item) => item.foodId === card._id);
          const quantity = cartItem && cartItem.quantity ? cartItem.quantity : 0;
          
          return <CardTitle key={`${card._id}`} CardDatas={[card, quantity]} />;
        })}

        {role === "admin" ? <AddFoodCard /> : ""}
      </div>
    </div>
  );
}

export default Cards;
