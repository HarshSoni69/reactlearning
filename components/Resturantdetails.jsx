import { useParams } from "react-router-dom";
import useRestaurant from "../uitils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../uitils/cartslice";

const RestaurantDetails = () => {
    const { id } = useParams();
    const restaurant = useRestaurant(id);
    const dispatch=useDispatch();
    handleaction=()=>{
        dispatch(addItem(""));
    }
    return (
        <div className="relative">
            {restaurant ? (
                <div className="flex flex-col items-center relative">
                    {/* Dark green div */}
                    <div className="p-1 relative right-96 top-3 font-semibold font-sans text-lg ">
                        <h1>{restaurant.data.cards[0]?.card?.card?.info?.name}</h1>
                    </div>
                    {/* Red div */}
                    <div className=" p-1 relative right-96 top-2 -mt-1 text-xs ">
                        <p>{restaurant.data.cards[0]?.card?.card?.info?.areaName}, {restaurant.data.cards[0]?.card?.card?.info?.city}</p>
                    </div>
                    {/* Light green div */}
                    <div className=" relative left-96 bottom-10 border border-gray-200 pl-3 pr-3 pt-5 pb-5  ">
                        <p className="relative bottom-2">⭐{restaurant.data.cards[0]?.card?.card?.info?.avgRating}</p>
                        <p className="text-sm border-t pt-2 relative top-2 ">{restaurant.data.cards[0]?.card?.card?.info?.totalRatingsString}</p>
                    </div>
                    <div className="relative bottom-16 right-96">
                        <span className="mr-9 border">{restaurant.data.cards[0]?.card?.card?.info?.costForTwoMessage}</span>
                        <span className="border ">{restaurant.data.cards[0]?.card?.card?.info?.sla?.slaString}</span>
                    </div>
                    <div className="relative right-96 text-3xl"> <h2>Top Selling Items</h2> </div>
                    <button onClick={()=>handleaction()} > ADD To cart</button>
                    
                    
                    
                    
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default RestaurantDetails;
