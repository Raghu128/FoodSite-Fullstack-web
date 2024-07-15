import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardData } from "../redux/cardData";
import NotFoundPage from "./PageNotFound";

function AddFoodPage() {
  const [restaurantName, setRestName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [message, setMess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector((state) => state.userLogin.role);
  
  if(role !== "admin") return (
    <NotFoundPage/>
  )



  const handleSubmit = async (event) => {
    event.preventDefault();

    if(imgUrl === "" || restaurantName === "" || foodPrice === "" ) {
      setMess("Please Fill All Inputs");
      return;
    }
    const price = parseInt(foodPrice);
    const data = {
      rname: restaurantName,
      imgdata: imgUrl,
      price: price
    };
    
    try {
      const response = await fetch("http://localhost:3000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      if (response.ok) {
        dispatch(fetchCardData());
        navigate('/');
      } else {
        console.error("Failed to add card");
      }


    } catch (error) {
      console.error("Error: during add food item");
    }

    setMess("ERROR");
   
  };


  return (
    <>
      <div className="container-fluid login-form-container">
        <div className="login-left-container">
          <img
            className="login-avatar-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7ykybAVlXlJ7VBlkDlvo_bz5Bil2yaRTjQ&s"
            alt=""
          />
          
        </div>

        <div className="login-right-container">
          <form onSubmit={handleSubmit} className="login-form-inputs-box ">
            {message === "" ? (
              ""
            ) : (
              <div className="alert alert-danger" role="alert">
                {message}!
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setMess("")}></button>
              </div>
            )}
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingName1"
                placeholder="name"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label htmlFor="floatingInput">Img url ...</label>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="restName"
                value={restaurantName}
                onChange={(e) => setRestName(e.target.value)}
              />
              <label htmlFor="floatingInput">Food name...</label>
            </div>
            <div className="form-floating">
              <input
                type="Number"
                className="form-control"
                id="floatingInput"
                placeholder="foodPrice"
                value={foodPrice}
                onChange={(e) => setFoodPrice(e.target.value)}
              />
              <label htmlFor="floatingPassword">Price</label>
            </div>

            

            <div className="row text-center">
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );


}

export default AddFoodPage;
