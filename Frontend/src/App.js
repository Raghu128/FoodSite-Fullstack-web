import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import AddFoodPage from "./pages/AddFoodPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Cards from "./components/Card.jsx";
import Search from "./components/Search.jsx";
import NotFoundPage from "./pages/PageNotFound.jsx";
import { fetchCardData } from "./redux/cardData.js";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const isLoading = useSelector((state) => state.cardData.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardData());

    AOS.init({
      duration: 2000,
      once: true,
    });
  }, [dispatch]);

  if (isLoading === true) {
    return (
      <div className="container">
        <div
          className="spinner-border"
          role="status"
        >
          <span className="visually-hidden ">Loading...</span>
        </div>
        <span>Loading....</span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/addFood" element={<AddFoodPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cards />} />
          <Route path="addFood" element={<AddFoodPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
