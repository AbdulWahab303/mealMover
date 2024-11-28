import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  // Array of restaurant details
  const restaurants = [
    {
      id: 1,
      title: 'Delicious Dine',
      image: '/restaurant1.jpg', // Replace with actual image path
      location: 'Karachi, Pakistan',
      timing: '9:00 AM - 11:00 PM',
      reviews: '4.5',
    },
    {
      id: 2,
      title: 'Tasty Treats',
      image: '/restaurant2.jpg',
      location: 'Lahore, Pakistan',
      timing: '10:00 AM - 10:00 PM',
      reviews: '4.7',
    },
    {
      id: 3,
      title: 'Food Fiesta',
      image: '/restaurant3.jpg',
      location: 'Islamabad, Pakistan',
      timing: '11:00 AM - 11:30 PM',
      reviews: '4.6',
    },
    {
      id: 4,
      title: 'Cuisine Corner',
      image: '/restaurant4.jpg',
      location: 'Peshawar, Pakistan',
      timing: '12:00 PM - 12:00 AM',
      reviews: '4.8',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        Featured Restaurants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.title}
            image={restaurant.image}
            location={restaurant.location}
            timing={restaurant.timing}
            reviews={restaurant.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
