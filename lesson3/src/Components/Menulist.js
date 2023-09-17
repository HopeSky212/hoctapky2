import React from "react";
import Categories from "./Categories";
import Listitem from "./Listitem";

const Menulist = () => {
  return (
    <div className="menulist">
      <Categories color="white" />
      <div>
        <Listitem text="Computer" />
        <Listitem text="Hand Tools" />
        <Listitem text="Machine Tools" />
        <Listitem text="Power Tools" />
        <Listitem text="Storage Tools" />
        <Listitem text="Cloths & PPE" />
        <Listitem text="Electrical" />
        <Listitem text="Building Tools" />
        <Listitem text="Foods" />
        <Listitem text="Drinks" />
      </div>
    </div>
  );
};

export default Menulist;
