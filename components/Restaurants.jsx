import React from "react";
import RestaurantCard from "./RestaurantCard";
import Link from "next/link";

const Restaurants = (props) => {
  // Array of restaurant details
  const restaurants = [
    {
      id: 1,
      title: "Delicious Dine",
      image: "/restaurant1.jpg", // Replace with actual image path
      location: "Karachi, Pakistan",
      timing: "9:00 AM - 11:00 PM",
      reviews: "4.5",
    },
    {
      id: 2,
      title: "Tasty Treats",
      image: "/restaurant2.jpg",
      location: "Lahore, Pakistan",
      timing: "10:00 AM - 10:00 PM",
      reviews: "4.7",
    },
    {
      id: 3,
      title: "Food Fiesta",
      image: "/restaurant3.jpg",
      location: "Islamabad, Pakistan",
      timing: "11:00 AM - 11:30 PM",
      reviews: "4.6",
    },
    {
      id: 4,
      title: "Cuisine Corner",
      image: "/restaurant4.jpg",
      location: "Peshawar, Pakistan",
      timing: "12:00 PM - 12:00 AM",
      reviews: "4.8",
    },
  ];

  return (
    <div className="grid my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {props.data.map((restaurant) => (
        <Link href={`/restaurants/${restaurant._id}`}><RestaurantCard
          key={restaurant._id}
          title={restaurant.name}
          image={restaurant.image}
          location={restaurant.details.location}
          timing={restaurant.details.timing}
          reviews={restaurant.reviews}
        />
        </Link>
      ))}
    </div>
  );
};

export default Restaurants;
