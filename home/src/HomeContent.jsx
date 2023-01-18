import React, { useState, useEffect } from "react";
import { addToCart } from "cart/cart";

import { getProducts, currency } from "./products";
import { Link } from "react-router-dom";
import "./index.scss";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <>
          <div key={product.id} className="flex-grow card" >
            <Link to={"product/"+product.id}><img src={product.image} alt={product.name} /></Link>
            <div className="" >
              <div className="text-lg">
                <Link to={"product/"+product.id}>{product.name}</Link>
              </div>
              <div className="text-base">{currency.format(product.price)}</div>
              <button className="btn btn-blue" onClick={(e)=>addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
