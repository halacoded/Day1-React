import React from "react";
import restaurant_image from "../assest/media/OIP.jpg";
import VisitorCounter from "./VisitorCounter";
export const Header = () => {
  return (
    <div className="container">
      {" "}
      <h1>Ratatouille</h1>
      <d>
        feast on French cuisine in this Parisian bistro straight from the world
        of a Disney Pixar classic
      </d>
      <VisitorCounter />
      <img
        src={restaurant_image}
        alt="Ratatouille restaurant "
        className="resutrantImage"
      />
    </div>
  );
};
