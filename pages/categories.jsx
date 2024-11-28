import Categories from "@/components/Catergories";
import React from "react";

const categories = () => {
  return (
    <>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Popular Cuisines
        </h1>
        <Categories></Categories>
      </div>
    </>
  );
};

export default categories;
