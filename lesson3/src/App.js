import "./App.css";
import Bestseller from "./Components/Bestseller";
import Botheader from "./Components/Botheader";
import ListBanner from "./Components/ListBanner";
import Productcard from "./Components/Productcard";
import Tag from "./Components/Tag";

import Topheader from "./Components/Topheader";

function App() {
  return (
    <>
      <Topheader />
      <Botheader />
      <ListBanner />
      <div className="tag-flex">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
      <Bestseller />
      <div className="product">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </>
  );
}

export default App;
