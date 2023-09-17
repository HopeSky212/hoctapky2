import React from "react";

const Listitem = ({ text, color = "white" }) => {
  return (
    <div
      className="list-item"
      style={{
        color,
      }}
    >
      <div className="list-content">{text}</div>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

export default Listitem;
