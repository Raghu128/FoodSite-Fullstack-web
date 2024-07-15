import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsSearch } from "../redux/searchFood.js";
import CardTitle from "./CardTitle.jsx";
import { fetchingCartItem } from "../services/CartItem.js";

function Search() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.searchFood.result);
  const [cartItems, setCartItems] = useState([]);
  const isFetched = useSelector((state) => state.searchFood.isFetched);
  const [fetched, setfetched] = useState(isFetched);

  const fetchCartItems = async () => {
    try {
      setfetched(false);
      const data = await fetchingCartItem();
      if (data) setCartItems(data.items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
    setfetched(true);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    dispatch(updateIsSearch(true));
  }, [dispatch]);

  if (fetched === false)
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
    <>
      <div className="card-container">
        <h1 id="card-container-header">Searched food</h1>

        <div className="all-cards">
          {result.map((card) => {
            const cartItem = cartItems.find((item) => item.foodId === card._id);
            const quantity =
              cartItem && cartItem.quantity ? cartItem.quantity : 0;

            return (
              <CardTitle key={`${card._id}`} CardDatas={[card, quantity]} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
