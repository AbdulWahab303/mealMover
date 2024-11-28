import React from "react";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  const cuisineCategories = [
    { id: 1, name: "Chinese", imageUrl: "/chinese-cuisine.jpg" },
    { id: 2, name: "Italian", imageUrl: "/chinese-cuisine.jpg" },
    { id: 3, name: "Indian", imageUrl: "/chinese-cuisine.jpg" },
    { id: 4, name: "Mexican", imageUrl: "/chinese-cuisine.jpg" },
    { id: 5, name: "Japanese", imageUrl: "/chinese-cuisine.jpg" },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center my-6 gap-y-4 xl:gap-x-12 gap-x-8">
        {cuisineCategories.map((category) => {
          return (
            <CategoryCard key={category.id} category={category}></CategoryCard>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
