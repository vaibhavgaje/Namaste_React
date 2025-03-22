import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //First export componenet which want n then import it where it is want or use.
import Body from "./components/Body";


/** For comment check Readme.md file **/
/**
 * Header
 * - LOGO
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *    - Img
 *    - Name of res, Star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 **/
// not using key (not acceptablr) <<<<<<<<< index as key <<<<<<<<<<<<<<< unique id(best practice),, if you dont have unique id then at least used index but you need to use unique key which recomanded.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
