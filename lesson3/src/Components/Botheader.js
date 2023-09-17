import React from "react";
import Categories from "./Categories";
import Searchitem from "./Searchitem";
import Iconuser from "./Iconuser";

const Botheader = () => {
  return (
    <div className="botheader">
      <h1 className="heading">SHOP APP</h1>
      <div className="categories-item">
        <Categories color="#4B4B4B" backgroundColor="#C4C4C4" />
        <Searchitem color="#4B4B4B" backgroundColor="#C4C4C4" />
      </div>
      <Iconuser />
    </div>
  );
};

export default Botheader;
