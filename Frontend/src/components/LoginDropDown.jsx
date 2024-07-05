import React, {  useState } from "react";
import { useSelector } from "react-redux";
import handleLogout from '../services/logout.js'
import { useDispatch } from "react-redux";

function LoginDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = useSelector((state) => state.userLogin.userName);
  const dispatch = useDispatch();



  return (
    <div className="dropdown">
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
        {userName} ▼
      </button>
      {dropdownOpen && (
        <div className="dropdown-content">
          <button onClick={() => handleLogout(dispatch)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginDropDown;
