import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import Profile from "./pages/Products";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
