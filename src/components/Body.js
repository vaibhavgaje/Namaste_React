import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //Local State variable - Super powerful variable
  //Whenever a state variable update react rerender its components.
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); //this is array destructuring like below
  /*
  const arr = useState(resList);
  //const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  */

  // //Normal JS Variable
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "21001",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //       parentId: "721",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "12K+",
  //       sla: {
  //         deliveryTime: 33,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "21002",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.8,
  //       parentId: "721",
  //       avgRatingString: "3.8",
  //       totalRatingsString: "12K+",
  //       sla: {
  //         deliveryTime: 33,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "21003",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //       parentId: "721",
  //       avgRatingString: "4.5",
  //       totalRatingsString: "12K+",
  //       sla: {
  //         deliveryTime: 33,
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            filterreslist = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filterreslist);
          }}
          // onClick={() => {
          //   //filter logic here
          //   listOfRestaurant = listOfRestaurant.filter(
          //     (res) => res.info.avgRating > 4
          //   );
          //   console.log(listOfRestaurant);
          // }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* whenever you r doing dot map/whenever you are looping onto anything , you have to always have to give a key over here . 
           As per react documentation , never used Index as a key, because order may be changed , if here we used index as key then order of restaurant may be change. */}

        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} /> */}
        {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biryani, North Indian, Asian"
          />
          <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
