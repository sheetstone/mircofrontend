import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Header() {
  return (
    <div
      className="p-5 bg-blue-500 text-white text-3xl font-bold"
      style={{ position: "relative", zIndex: 100 }}
    >
      <div className="flex ">
        <div className="">
          <Link to="" className="headNav">
            Fidget Spinner World
          </Link>
        </div>
        <span>&nbsp;|&nbsp; </span>
        <div className="flex-grow ">
          <Link to="cart" className="headNav">
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
