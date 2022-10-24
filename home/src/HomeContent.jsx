import React, { useState, useEffect } from "react";

import { getProducts, currency } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <>
          <div key={product.id} className="flex-grow">
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow">
                <a>{product.name}</a>
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
