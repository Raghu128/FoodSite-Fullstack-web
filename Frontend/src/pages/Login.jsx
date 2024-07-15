import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mess, setmess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === "" || pass === "") {
      setmess("Please Fill all Inputs");
      return;
    }

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
      } else {
        setmess("Invalide input");
        console.error("Failed to user");
      }
    } catch (error) {
      console.error("Error: During login");
    }
  };

  return (
    <>
      <div className="container-fluid login-form-container">
        <div className="login-left-container">
          <img
            className="login-avatar-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQQy6cEy7VKqTTwb8p99AGmnpgRnCBUG-Fw&s"
            alt=""
          />
        </div>

        <div className="login-right-container">
        <h1>Login here...</h1>
          <form onSubmit={handleSubmit} className="login-form-inputs-box">
            {mess === "" ? (
              ""
            ) : (
              <div className="alert alert-danger alert" role="alert">
                {mess}!
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setmess("")}
                ></button>
              </div>
            )}
            <div className="form-floating mt-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="row text-center">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <a href="/signUp"> Don't have an account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <img
  //       src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user"
  //       alt=""
  //       id="login-bg-img"
  //     />
  //     <div className="container-fluid "></div>
  //     <div className="login-container" data-aos="fade-up">
  //       <button
  //         className="btn btn btn-outline-primary col-1 m-3 home-btn"
  //         onClick={() => navigate("/")}
  //       >
  //         Home
  //       </button>
  //       <form className="login-form " onSubmit={handleSubmit}>
  //         <h1 id="signup-mess"> {mess} </h1>
  //         <h2>Login</h2>
  //         <div className="form-group">
  //           <label htmlFor="email">Email</label>
  //           <input
  //             type="text"
  //             id="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //             placeholder="Email"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="password">Password</label>
  //           <input
  //             type="text"
  //             id="password"
  //             value={pass}
  //             onChange={(e) => setPass(e.target.value)}
  //             required
  //             placeholder="Password"
  //           />
  //         </div>

  //         <button type="submit" className="add-button">
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   </>
  // );
}

export default Login;
