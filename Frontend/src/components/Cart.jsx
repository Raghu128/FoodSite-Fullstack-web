import React from "react";
import { useSelector } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const blocked = useSelector((state) => state.cart.block);
  const totalMoney = useSelector((state) => state.cart.totalAmount);

  
  return (
    <div className={`cart-item-container ${blocked === true ? "blocked" : "visible"}`}>
      {cartItems.length !== 0? (
        <div className="cart-items-box">
          <div className="cart-header-box">
            <div className="cart-item-left-header">
              <h1>Photo</h1>
            </div>

            <div className="cart-item-right-header">
              <h1>Restaurant</h1>
            </div>
          </div>

          <div className="all-cart-items">
            {cartItems.map((item) => (
              <div key={item[1]._id} className="cart-sub-items-box">
                <div className="cart-sub-items-img-box">
                  <img src={`${item[1].imgdata}`} alt="" />
                </div>

                <div className="cart-sub-items-content-box">
                  <h1 >{item[1].rname}</h1>
                  <h1>Price : $ {item[1].price}</h1>
                  <h1 >Quantity : {item[0]}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-items-total">
              <h1>Total : {totalMoney}</h1>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1 >Cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
