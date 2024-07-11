import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addItemToCart, deductCartItem } from "../services/CartItem.js";
import { useNavigate } from "react-router-dom";

const CardTitle = ({ CardDatas }) => {
  const CardData = CardDatas[0];
  const quant = CardDatas[1];
  const [cnt, setcnt] = useState(Number(quant));
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  const navigate = useNavigate();

  function handleAddToCart() {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    const item = {
      foodId: CardData._id,
      quantity: 1,
    };
    addItemToCart(item);

    setcnt((prev) => prev + 1);
  }

  const handleDecrementInCart = () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }
    setcnt(cnt - 1);
    deductCartItem(CardData._id);
  };

  

  return (
    <div className="card-titles" data-aos="fade-up">
      <div className="card-img-box">
        <img src={`${CardData.imgdata}`} alt={CardData.imgdata} />
        <div className="img-hover-box">
          <div className="shadow-box"></div>
        </div>
      </div>
      <div className="card-titles-content">
        <h1 className="food-name">{CardData.rname}</h1>
        <h1 className="food-price">Price : $ {CardData.price}</h1>
      </div>

      <div className="add-btn-box">
        {cnt === 0 ? (
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="counter-container border p-2">
            <button className="counter-button" onClick={handleDecrementInCart}>
              -
            </button>
            <span className="counter-display">{cnt}</span>
            <button className="counter-button" onClick={handleAddToCart}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTitle;
