import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import handleLogout from "../services/logout.js";
import { useNavigate } from "react-router-dom";

function LoginDropDown() {
  const userName = useSelector((state) => state.userLogin.userName);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  const navigate = useNavigate();
  if (isLogin === true)
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-danger"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => navigate('/')}
        >
          {userName}
        </a>

        <ul className="dropdown-menu bg-black ">
          <li>
            <a
              className="dropdown-item text-danger rounded"
              onClick={() => {
                handleLogout(dispatch);
                navigate('/login');
                // window.location.reload();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </li>
    );

  return (
    <li className="nav-item dropdown dropdown-menu-dark">
      <a
        className="nav-link dropdown-toggle text-danger"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Bot
      </a>

      <ul className="dropdown-menu bg-black">
        <li>
          <a className="dropdown-item text-danger rounded" onClick={() => navigate("/login")}>
            LogIn
          </a>
        </li>
        <li>
          <a className="dropdown-item text-danger rounded" onClick={() => navigate("/signup")}>
            Create new user
          </a>
        </li>
      </ul>
    </li>
  );
}

export default LoginDropDown;
