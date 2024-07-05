import React, { useState } from "react";
import CardTitle from "./CardTitle.jsx";
import AddFoodCard from "./AddFoodCard.jsx";
import { useSelector } from "react-redux";


function Cards() {
    const data = useSelector((state) => state.cardData.data);
    const [cardData] = useState(data);
    const role = useSelector((state) => state.userLogin.role);



    return (

        <div className="card-container">
            <h1 id="card-container-header">ADD Foods into your Cart</h1>


            <div className="all-cards">
                {cardData.map((card) => (
                    <CardTitle key={card._id} CardData={card}/>
                ))}
            
            {role === "admin" ? <AddFoodCard/> : ""}
            

            </div>
            

        </div>
        
    )
}


export default Cards