import React, { useState, useEffect } from "react";
import { jwt, cart, clearCart } from "./cart";

import "./index.scss";

export default function CartContent() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }
  , []);

  console.log("items", items);
  return (
    <div>
      JWT: {items}
    </div>
  );
}
