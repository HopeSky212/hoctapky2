import React from "react";

const Productcard = () => {
  return (
    <div className="productcard">
      <img src="./Vector.png" alt="" />
      <h3 className="content">Adidas Shoes</h3>
      <div className="productcard-item">
        <div className="product-item-left">
          <h6 className="product-item-left">ID: 123</h6>
          <i className="fa-solid fa-star " style={{ color: "#e6e156" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#e6e156" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#e6e156" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#e6e156" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#e6e156" }}></i>
          <h5 className="product-item-left">$ 120.00</h5>
          <button className="button">Avaiable</button>
        </div>
        <div className="product-item-right">
          <div className="right-content">50% Off</div>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
