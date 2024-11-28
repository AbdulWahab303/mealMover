import React from 'react';

const RestaurantCard = ({ title, image, location, timing, reviews }) => {
  return (
    <div className="max-w-sm sm:max-w-md bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h2>
        
        {/* Location */}
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          📍 {location}
        </p>

        {/* Timing */}
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          🕒 {timing}
        </p>

        {/* Reviews */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm sm:text-base">⭐ {reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
