import React from "react";

const Searchitem = ({ color, backgroundColor, fontSize = "20px" }) => {
  return (
    <div
      className="searchitem"
      style={{
        color,
        backgroundColor,
        fontSize,
      }}
    >
      <div>Search items</div>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default Searchitem;
