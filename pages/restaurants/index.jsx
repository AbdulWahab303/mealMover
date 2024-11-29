import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Restaurants from "@/components/Restaurants";
import React from "react";

const restaurants = () => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Restaurants
        </h1>
        <Restaurants></Restaurants>
      </div>
      <Footer></Footer>
    </>
  );
};

export default restaurants;
