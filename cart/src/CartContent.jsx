import React, { useState, useEffect } from "react";
import { jwt, cart, clearCart } from "./cart";
import MiniCart  from './MiniCart';
import Login from './Login';

import "./index.scss";

export default function CartContent() {
  const [items, setItems] = useState(null);
  const [jwtValue, setJwtValue] = useState(null);

  useEffect(() => {
    return jwt.subscribe((val)=>{
      setJwtValue(val ?? "")
    })
  }, []);

  return (
    <div>
      JWT: {jwtValue}
      <Login />
      <MiniCart />
    </div>
  );
}
