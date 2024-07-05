import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      pass: pass,
    };


    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (response.ok) {
        console.log("user has been Login");
        navigate("/");
        // updateLogin
        
      } else {
        console.error("Failed to user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  

  return (
    <div className="login-container" data-aos="fade-up">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {/* <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="write name ..."
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        {/* <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="role"
              value="user"
              onClick={() => {
                setType(false);
              }}
            />{" "}
            User
          </label>
          <label
            className="radio-label"
            onClick={() => {
              setType(true);
            }}
          >
            <input type="radio" name="role" value="admin" /> Admin
          </label>
        </div> */}

        <button type="submit" className="add-button">
          Login
        </button>
        
      </form>
      
    </div>
  );
}

export default Login;
