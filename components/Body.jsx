import React from 'react';
import ResturantCard from './resturantcard';
import RestaurantNotFound from './HELLO';
import useOffline from '../uitils/useOffline';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react"


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
  const status = useOffline();

  
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

  if (!status) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1>Net ke pase tera baap dega</h1>
      </div>
    );
  }

  

  if (!ALLRestaurant) {
    return null;
  }

  return (
    <>
      <div className='flex justify-center'>
      <div className="w-72 mt-1">
      <Input
        type="text"
        placeholder="Resturants"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
      <Button className='ml-2'  variant="contained" size="sm" color='orange' onClick={filterData} >Search..</Button>
      </div>


      {ALLRestaurant.length === 0 ? (
        <ShimmerSimpleGallery card imageHeight={200} caption centre />
      ) : (
        <div className="flex justify-center flex-wrap m-2">
          {FilteredRestaurant.length === 0 ? <RestaurantNotFound /> : FilteredRestaurant.map((restaurant) => (
            <ResturantCard key={restaurant.info.id} {...restaurant.info} />
          ))}
        </div>
      )}
      <style jsx>{`
        .CardHolder::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        
        .CardHolder {
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </>
  );
};

export default Body;
