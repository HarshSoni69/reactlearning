
import { useParams } from "react-router-dom";
import useRestaurant from "../uitils/useRestaurant";
const RestaurantDetails = () => {
    const params = useParams();
    console.log(params);
    const { id } = params;
    const restaurant=useRestaurant(id);
    return (
        <div>
        {restaurant ? (
            <div>
                <h1>{restaurant.data.cards[0]?.card?.card?.info?.name}</h1>
                <p>City: {restaurant.data.cards[0]?.card?.card?.info?.city}</p>
                <p>Locality: {restaurant.data.cards[0]?.card?.card?.info?.locality}</p>
                <p>Area Name: {restaurant.data.cards[0]?.card?.card?.info?.areaName}</p>
                <p>Cuisines: {restaurant.data.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
                <p>Average Rating: {restaurant.data.cards[0]?.card?.card?.info?.avgRating}</p>
                {/* Add more details as needed */}
            </div>
        ) : (
            <h1>Loading...</h1>
        )}
    </div>
    );
};

export default RestaurantDetails;
