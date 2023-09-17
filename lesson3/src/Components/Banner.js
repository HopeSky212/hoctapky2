import React from "react";

const Banner = ({ width, height }) => {
  return (
    <img
      className="img"
      src="./Vector.png"
      // src="./Product Photo.png"
      alt=""
      style={{ width, height }}
    />
  );
};

export default Banner;
