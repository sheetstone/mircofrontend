import React, { useState, useEffect } from "react";
import { addToCart } from "cart/cart";

import "./index.scss";

export default function AddToCart(props) {
  const {id} = props;

  return (
    <button className="btn btn-blue" onClick={(e) => addToCart(id)}>
      Add to Cart
    </button>
  );
}
