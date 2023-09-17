import React from "react";

const Categories = ({ color, backgroundColor, fontSize = "20px" }) => {
  return (
    <div
      className="categories"
      style={{
        color,
        backgroundColor,
        fontSize,
      }}
    >
      <i className="fa-solid fa-bars"></i>
      <span className="categories-content">Categories</span>
    </div>
  );
};

export default Categories;
