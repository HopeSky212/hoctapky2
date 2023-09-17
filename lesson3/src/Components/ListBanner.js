import React from "react";
import Menulist from "./Menulist";
import Banner from "./Banner";

const ListBanner = () => {
  return (
    <div className="list-banner">
      <Menulist />
      <div className="banner-right">
        <Banner width="800px" height="300px" />
        <div className="banner-flex">
          <Banner width="100%" height="100px" />
          <Banner width="100%" height="100px" />
          <Banner width="100%" height="100px" />
        </div>
      </div>
    </div>
  );
};

export default ListBanner;
