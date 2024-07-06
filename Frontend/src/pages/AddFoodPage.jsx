import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardData } from "../redux/cardData";

function AddFoodPage() {
  const [restaurantName, setRestName] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.userLogin.isLogin);

  if(!isLogin) return (
    <div className="not-auth">
      <h1>You are not authorized to this link</h1>
    </div>
  )



  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      rname: restaurantName,
      imgdata: imgUrl,
      price: foodPrice
    };
    
    try {
      const response = await fetch("http://localhost:3000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      if (response.ok) {
      } else {
        console.error("Failed to add card");
      }


    } catch (error) {
      console.error("Error:", error);
    }


    dispatch(fetchCardData());
    navigate('/');
  };

  return (
    <div className="login-container" data-aos="fade-up">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>ADD ITEM</h2>
        <div className="form-group">
          <label htmlFor="img-url">Img-url</label>
          <input
            type="text"
            id="img-url"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
            placeholder="https:www.img.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="restaurant-name">Restaurant Name</label>
          <input
            type="text"
            id="restaurant-name"
            value={restaurantName}
            onChange={(e) => setRestName(e.target.value)}
            required
            placeholder="Dhaba"
          />
        </div>
        <div className="form-group">
          <label htmlFor="food-price">Price</label>
          <input
            type="number"
            id="food-price"
            value={foodPrice}
            onChange={(e) => setFoodPrice(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddFoodPage;
