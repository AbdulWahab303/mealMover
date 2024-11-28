import React from "react";
import Image from "next/image";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center space-y-1 group">
      <div className="relative rounded-full bg-yellow-100 border-2 border-yellow-200 aspect-square w-24 sm:w-32 md:w-40 lg:w-48 p-1 ">
        <div className="relative w-full h-full">
          <Image
            src={category.imageUrl}
            layout="fill"
            objectFit="cover"
            className="rounded-full transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            alt="Cuisine Image"
          />
        </div>
      </div>
      <p className="text-lg font-semibold text-black group-hover:text-yellow-400 transition-colors duration-300 ease-in-out ">
        {category.name}
      </p>
    </div>
  );
};

export default CategoryCard;
