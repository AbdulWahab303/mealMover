import React from "react";
import Image from "next/image";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RestaurantPage = ({ restaurant }) => {
  return (
    <>
      <Header></Header>
      {/* Header Section */}

      {/* Restaurant Info Section */}
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 mt-12">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center space-x-6">
            <div className="w-full md:w-1/3">
              <Image
                src={restaurant.image}
                alt={restaurant.title}
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold text-yellow-600">
                {restaurant.title}
              </h1>
              <p className="text-lg text-gray-600">{restaurant.location}</p>
              <p className="text-lg text-gray-600">
                Timing: {restaurant.timing}
              </p>
              <p className="text-xl font-semibold text-yellow-500">
                Reviews: {restaurant.reviews}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <Menu />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  // Example: Hardcoded list of restaurant IDs for the static generation
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];

  return {
    paths,
    fallback: "blocking", // Use "blocking" for ISR
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  // Fetching the restaurant data based on the id (this could be from an API or database)
  const restaurantData = {
    1: {
      id: 1,
      title: "Delicious Dine",
      image: "/restaurant1.jpg", // Replace with actual image path
      location: "Karachi, Pakistan",
      timing: "9:00 AM - 11:00 PM",
      reviews: "4.5",
    },
    2: {
      id: 2,
      title: "Tasty Treats",
      image: "/restaurant2.jpg", // Replace with actual image path
      location: "Lahore, Pakistan",
      timing: "10:00 AM - 10:00 PM",
      reviews: "4.7",
    },
    3: {
      id: 3,
      title: "Food Haven",
      image: "/restaurant3.jpg", // Replace with actual image path
      location: "Islamabad, Pakistan",
      timing: "8:00 AM - 12:00 AM",
      reviews: "4.8",
    },
  };

  // Get restaurant data by id
  const restaurant = restaurantData[id];

  return {
    props: {
      restaurant,
    },
    revalidate: 60, // ISR: Re-generate every 60 seconds
  };
}

export default RestaurantPage;
