import React, { useEffect, useState } from 'react';
import ResturantCard from './resturantcard';
import ShimmerUI from './ShimmerUI';
import RestaurantNotFound from './HELLO';


const Body = () => {
  const [searchtext, setSearchText] = useState("");
  const [ALLRestaurant, setALLRestaurant] = useState([]);
  const [FilteredRestaurant,setFilteredRestaurant]=useState([]);

  const filterData = () => {
    const filtered = ALLRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.67400&lng=76.72490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        setALLRestaurant(data?.data?.cards.find(card => card.card.card.id === 'restaurant_grid_listing').card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(data.data.cards.find(card => card.card.card.id === 'restaurant_grid_listing').card.card.gridElements.infoWithStyle.restaurants);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);
  if(!ALLRestaurant) return null;


  return(ALLRestaurant.length===0)?<ShimmerUI/> :(
    <>
      <input
        type="text"
        placeholder="Search.."
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={filterData}>Search</button>
      <div className="CardHolder">
    
        {(FilteredRestaurant.length==0)?<RestaurantNotFound/>:FilteredRestaurant.map((restaurant) => (
          
          <ResturantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
