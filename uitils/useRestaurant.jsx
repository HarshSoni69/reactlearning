import { useEffect, useState } from "react";
const useRestaurant=(id)=>{
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        async function getDetails() {
            try {
                const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.67400&lng=76.72490&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
                const data = await response.json();
                setRestaurant(data);
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        }
        
        getDetails();
    }, [id]);
    return restaurant;
}
export default useRestaurant;