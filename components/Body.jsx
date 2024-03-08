// Body.js
import React from 'react';
import ResturantCard from './resturantcard';
import ShimmerUI from './ShimmerUI';
import RestaurantNotFound from './HELLO';
import useOffline from '../uitils/useOffline';
import useRestaurantFilter from '../uitils/useFilter';
import { ShimmerSimpleGallery } from "react-shimmer-effects";


const Body = () => {
  const { searchText, handleSearchTextChange, allRestaurants, filteredRestaurants } = useRestaurantFilter();
  const status = useOffline();

  if (!status) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1>Net ke pase tera baap dega </h1>
      </div>
    );
  }

  if (!allRestaurants) {
    return null;
  }

  return allRestaurants.length === 0 ? (
  <>   <ShimmerSimpleGallery card imageHeight={200} caption centre /></>
  ) : (
    <>
      <input
        type="text"
        placeholder="Search.."
        value={searchText}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
      <div className="flex justify-center flex-wrap m-2">
        {filteredRestaurants.length === 0 ? <RestaurantNotFound /> : filteredRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
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
