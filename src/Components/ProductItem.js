import React from "react";
import "../assest/css/indexx.css";
export const ProductItem = ({ productsImage, productName, productPrice }) => {
  return (
    <div className="Menu-container">
      <img
        src={productsImage}
        alt="Ratatouille restaurant "
        className="menuImage"
      />
      <h1>{productName}</h1>
      <d>{productPrice}</d>
    </div>
  );
};
