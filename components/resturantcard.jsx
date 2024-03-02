import { Link } from "react-router-dom";
const ResturantCard = ({ cloudinaryImageId, name, cuisines,id }) => {
    return (
      <Link to={"/resturant/"+id}>
        <div className="Card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Restaurant" />
        <h2 className="CardHeading">{name}</h2>
        <h3 className="Type">{cuisines.slice(0, 2).join(",")}</h3>
      </div>
      </Link>
      
    )
  }
  export default ResturantCard;