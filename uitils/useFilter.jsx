import { useState, useEffect } from 'react';

const useRestaurantFilter = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.67400&lng=76.72490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const restaurantData = data?.data?.cards.find(card => card.card.card.id === 'restaurant_grid_listing')?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(restaurantData || []);
        setFilteredRestaurants(restaurantData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    filterData(text);
  };

  const filterData = (text) => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return { searchText, handleSearchTextChange, allRestaurants, filteredRestaurants };
};

export default useRestaurantFilter;
