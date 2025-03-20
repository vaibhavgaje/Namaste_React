import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // const RestaurantCard = ({resName, cuisine}) => { //destructuring of object
    // const { resName, cuisine } = props;
    const { resData } = props;
    const { cloudinaryImageId, 
      name, 
      cuisines, 
      avgRating, 
      costForTwo, 
      sla } =
      resData?.info; // ?. is known as optional chaining, here we destructuring name, cusines, avgRating etc.
    // console.log(props);
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        {/* .....Here first{} bracket shows that something javascript inside in bracket, and another bracket shows javascript object. */}
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
  
        {/*   <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4> destructuring of object
        <h4>4.4 Star</h4>
        <h4>38 minutes</h4> */}
      </div>
    );
  };

  export default RestaurantCard;

