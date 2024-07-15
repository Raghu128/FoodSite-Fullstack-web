import React, { useState }  from "react";
import {useNavigate} from 'react-router-dom'
import LoginDropDown from "./LoginDropDown.jsx";
import {FetchingSearchedFood} from '../services/Foodsearching.js'
import { fetchingLogin } from "../services/isLogin.js";
import { useSelector, useDispatch} from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  const isSearch = useSelector((state) => state.searchFood.isSearch);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  fetchingLogin(dispatch);

 
 
    FetchingSearchedFood(query);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand text-black" href="/">
            Foodify
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <LoginDropDown />
            </ul>
            <form className="d-flex" role="search">
              {isSearch === true ? <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={query}
                aria-label="Search"
                onChange={(e) => {
                  if(query.length === 0 && e.target.value === " ") return;
                  setQuery(e.target.value);
                }}
              /> :
              <div></div>}
              <button className="btn btn-outline-success" onClick={() => {
                navigate('/search')
              }} type="submit">
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
