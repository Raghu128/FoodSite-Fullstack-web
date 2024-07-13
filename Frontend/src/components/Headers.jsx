import React from "react";
import {useNavigate} from 'react-router-dom'
import LoginDropDown from "./LoginDropDown.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  let navigate = useNavigate();
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Foodify
          </a>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <LoginDropDown />
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

              <button className="btn btn-outline-success ms-2" onClick={() => {
                if(isLogin)
                    navigate('/cart');
                else navigate('/login')
              }}>Cart</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
