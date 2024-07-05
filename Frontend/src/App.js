import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.js';
import AddFoodPage from './components/AddFoodPage.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
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
  }, [dispatch]);


  
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
      </Routes>
    </BrowserRouter>

  );
}

export default App;
