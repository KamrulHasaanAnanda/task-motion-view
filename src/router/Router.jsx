import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout";

import Home from "../pages/Home";
import Login from "../pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
