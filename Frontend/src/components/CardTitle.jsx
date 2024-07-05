import React, { useState } from "react";
import { addCartItem, removeCartItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const CardTitle = (props) => {
  const dispatch = useDispatch();
  const [cnt, setcnt] = useState(0);

  function handleAddToCart() {
    dispatch(addCartItem(props.CardData));
    setcnt((prev) => prev+1);
  };


  const handleDecrementInCart = () => {
      setcnt(cnt - 1);
      dispatch(removeCartItem(props.CardData));
  };


  return (
    <div className="card-titles" data-aos="fade-up">
      <div className="card-img-box">
        <img src={`${props.CardData.imgdata}`} alt={props.imgdata} />
        
        <div className="img-hover-box">
          <div className="shadow-box"></div>
        </div>


      </div>
      <div className="card-titles-content">
        <h1 className="food-name">{props.CardData.rname}</h1>
        <h1 className="food-price">Price : $ {props.CardData.price}</h1>
      </div>

      <div className="add-btn-box">
        {/* <button
          className="add-btn"
          onClick={handleAddToCart}
        >
          {cnt == 0 ? "Add-to-cart" : "-    " + cnt + "    +"}
          
        </button> */}

      {cnt === 0 ? (
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      ) : (
        <div className="counter-container">
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
