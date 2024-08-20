import React from "react";
import "../assest/css/indexx.css";
import ProductList from "./ProductList";
import { Header } from "./Header";
export const Home = () => {
  return (
    <div className="container">
      <Header />
      <ProductList />
    </div>
  );
};
