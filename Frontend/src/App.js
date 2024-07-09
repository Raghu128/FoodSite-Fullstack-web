import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.jsx';
import AddFoodPage from './pages/AddFoodPage.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx'
import { fetchCardData } from './redux/cardData.js';
import { useSelector, useDispatch } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  const isLoading = useSelector((state) => state.cardData.isLoading);
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    dispatch(fetchCardData());
      AOS.init({
            duration: 2000,
            once: true,
      });
  }, []);


  
  if(isLoading === true) {
      return (
          <h1>Loading Data.....</h1>
      )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path='/addFood' element={<AddFoodPage/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
