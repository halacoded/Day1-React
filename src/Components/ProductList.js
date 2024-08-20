import React from "react";
import { ProductItem } from "./ProductItem";
import products from "../assest/data/products";
import "../assest/css/indexx.css";
const ProductList = () => {
  const Displayproducts = products.map((product) => {
    return (
      <ProductItem
        productsImage={product.image}
        productName={product.name}
        productPrice={product.price}
      />
    );
  });
  return <div className="Menu-section"> {Displayproducts} </div>;
};

export default ProductList;
