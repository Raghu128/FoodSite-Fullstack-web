import React, { useEffect, useState} from "react";
import {fetchingCartItem} from '../services/CartItem.js'
import { useSelector } from "react-redux";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await fetchingCartItem();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []); 

  // const blocked = useSelector((state) => state.cart.block);
  // const totalMoney = useSelector((state) => state.cart.totalAmount);
  // cartItems.then((data) => console.log(data));
  // useEffect(() => {
    //    cartItems =  fetchingCartItem();
    //   console.log(cartItems);
    //   // console.log(fetchingCartItem());
    // }, [])
    
    // if(cartItems.length === 0) return (
      //   <div className="empty-cart">
      //         <h1>Cart is empty</h1>
      //       </div>
      // )
      
      return (
        <>
        <h1>Hello</h1>
           {/* <div class="card" >
            <img src="item[1].imgdata" className="card-img-top" />
             <div class="card-body">
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
           </div> */}

        <div className="cart-item">
          <h1>{cartItems.length}</h1>
            {cartItems.map((item) => (

            <div class="card ">
            <img src={item.foodImg} class="card-img-top cart-items-bo" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          ))}
        </div>
    
  
    </>
   
  );

  // return (
  //   <div
  //     className={`cart-item-container ${
  //       blocked === true ? "blocked" : "visible"
  //     }`}
  //   >
  //     {cartItems.length !== 0 ? (
  //       <div className="cart-items-box">
  //         <div className="cart-header-box">
  //           <div className="cart-item-left-header">
  //             <h1>Photo</h1>
  //           </div>

  //           <div className="cart-item-right-header">
  //             <h1>Restaurant</h1>
  //           </div>
  //         </div>

  //         <div className="all-cart-items">
  //           {cartItems.map((item) => (
  //             <div key={item[1]._id} className="cart-sub-items-box">
  //               <div className="cart-sub-items-img-box">
  //                 <img src={`${item[1].imgdata}`} alt="" />
  //               </div>

  //               <div className="cart-sub-items-content-box">
  //                 <h1>{item[1].rname}</h1>
  //                 <h1>Price : $ {item[1].price}</h1>
  //                 <h1>Quantity : {item[0]}</h1>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         <div className="cart-items-total">
  //           <h1>Total : {totalMoney}</h1>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="empty-cart">
  //         <h1>Cart is empty</h1>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Cart;
