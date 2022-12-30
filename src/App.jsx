import React from 'react'
import {BrowserRouter , Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App

