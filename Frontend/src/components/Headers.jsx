import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlock } from "../redux/cartSlice";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import LoginDropDown from "./LoginDropDown";



const Header = () => {
  const dispatch = useDispatch();
  const blocked = useSelector((state) => state.cart.block);
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.userLogin.isLogin);

 
  return (
    <div className="header-conainer">

    <div className="header">
      <div className="pages-link">
        <button>Foodify</button>
        {isLogin === false ? (<button onClick={() => {
          navigate('/login')
        }}>Login</button>) : <LoginDropDown/>}
      </div>

      <div className="cart">
        <h1
          onClick={() => {
            dispatch(updateBlock());
          }}
          >
          {(blocked === true ? "Cart" : "X")}
        </h1>
        <Cart />

      </div>
    </div>
          </div>
  );
};

export default Header;
