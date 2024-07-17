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
  }, [dispatch]);

  const fetchCartItems = async () => {
    try {
      const data = await fetchingCartItem();
      if (data) setCartItems(data.items);
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
    );
  }

  return (
    <div className="card-container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {cardData.map((card, idx) => {
            if (idx === 0)
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  key={card._id}
                ></button>
              );
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={idx}
                aria-label={`Slide ${idx}`}
                key={card._id}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {cardData && cardData.map((data, idx) => {
            if (idx === 0)
              return (
                <div className="carousel-item active" key={data._id}>
                  <img src={data.imgdata} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="text-danger">
                      {data.rname}
                    </h1>
                  </div>
                </div>
              );
            return (
              <div className="carousel-item" key={data._id}>
                <img src={data.imgdata} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-black">
                    {data.rname}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="images/404-error.png" className="d-block w-100" alt="..." />
          </div>
          {cardData.map((data) => {
            return (
              <div className="carousel-item" data-bs-interval="2000">
                <img src={data.imgdata} className="d-block w-100" alt="..." />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className="all-cards">
        {cardData.map((card) => {
          const cartItem = cartItems.find((item) => item.foodId === card._id);
          const quantity =
            cartItem && cartItem.quantity ? cartItem.quantity : 0;

          return <CardTitle key={`${card._id}`} CardDatas={[card, quantity]} />;
        })}

        {role === "admin" ? <AddFoodCard /> : ""}
      </div>
    </div>
  );
}

export default Cards;
