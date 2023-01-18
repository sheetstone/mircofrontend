import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";
import PDPContent from "pdp/PDPContent";

export default function Homepage() {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Router>
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/cart" element={<CartContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/" element={<HomeContent />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
