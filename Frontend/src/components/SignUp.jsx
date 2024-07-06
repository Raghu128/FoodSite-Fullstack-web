import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [type, setType] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();
  const adminSecretcode = process.env.REACT_APP_ADMIN_SECRET_CODE;
  const [message, setMess] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(type && adminCode !== adminSecretcode) {
      setMess("Invalide input");
      return;
    }

    const data = {
      name: name,
      email: email,
      pass: pass,
      type: type,
    };

    try {
      const response = await fetch("http://localhost:3000/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (response.ok) {
        console.log("user has been created");
      } else {
        console.error("Failed to make user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    navigate("/");
  };

  return (
    <div className="login-container" data-aos="fade-up">
      <form className="login-form" onSubmit={handleSubmit}>
      <h1 id="signup-mess">{message}</h1>
        <h2>SignUp</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Write name ..."
          />
        </div>
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
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="role"
              value="user"
              // checked 
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
        </div>
        {type !== true ? (
          ""
        ) : (
          <div className="admin-secret-code">
            <label htmlFor="admin-password" >Secret code : </label>
            <input
            className="admin-secret-pass"
              type="text"
              id="admin-password"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
        )}
        <button type="submit" className="add-button">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default SignUp;
