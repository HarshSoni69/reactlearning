import React,{useContext} from 'react';
import { Link } from "react-router-dom";

import UserContext from '../contexts/UserContext';

const ResturantCard = ({ cloudinaryImageId, name, cuisines, id }) => {
  const displayCuisines = cuisines.slice(0, 2); // Extracting the first two cuisines
  
  return (
    <Link to={"/resturant/" + id}>
      <div className="m-3 p-2 border border-transparent w-72 max-w-full hover:shadow-lg transform hover:scale-105 transition duration-300">
        <div className="flex justify-center items-center">
          <img className="object-cover w-full h-40 border-transparent rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Restaurant" />
        </div>
        <h2 className="m-2 text-center font-semibold font-serif">{name}</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {displayCuisines.map((cuisine, index) => (
            <span key={index} className="bg-orange-100 px-2 py-1 rounded-2xl text-xs">{cuisine}</span>
          ))}
        </div>
        
    
      </div>
    </Link>
  );
};

export default ResturantCard;
