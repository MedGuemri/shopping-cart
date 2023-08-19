import React from "react";
import { Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductsList from "./components/products/ProductsList";
import Favorites from "./components/favorites/Favorites";
import Cart from "./components/Cart/Cart";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { useSelector } from "react-redux";

function App() {
  const  { user} = useSelector(state => state.auth);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/ProductsList" element={<ProductsList />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>




   
      <Footer />
      <ToastContainer />




    </div>
  );
}

export default App;
