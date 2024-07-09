import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import handleLogout from "../services/logout.js";

function LoginDropDown() {
  const userName = useSelector((state) => state.userLogin.userName);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userLogin.isLogin);

  if (isLogin === true)
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-danger"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {userName}
        </a>

        <ul className="dropdown-menu bg-black ">
          <li>
            <a
              className="dropdown-item text-danger rounded"
              onClick={() => handleLogout(dispatch)}
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
        href="/login"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Bot
      </a>

      <ul className="dropdown-menu bg-black">
        <li>
          <a className="dropdown-item text-danger rounded" href="/signup">
            SignUp
          </a>
        </li>
        <li>
          <a className="dropdown-item text-danger rounded" href="/login">
            SignIn
          </a>
        </li>
      </ul>
    </li>
  );
}

export default LoginDropDown;
