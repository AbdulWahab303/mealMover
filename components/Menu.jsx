import React from "react";

const Menu = () => {
  return (
    <div class="container mx-auto px-8 sm:px-12 lg:px-16">
      <h1 class="text-2xl font-bold">Responsive Layout Example</h1>
      <div class="grid grid-cols-1 space-y-2 lg:space-y-6">
        <div class="bg-blue-500 p-4">Item 1</div>
        <div class="bg-green-500 p-4">Item 2</div>
        <div class="bg-red-500 p-4">Item 3</div>
        <div class="bg-yellow-500 p-4">Item 4</div>
        <div class="bg-purple-500 p-4">Item 5</div>
        <div class="bg-pink-500 p-4">Item 6</div>
      </div>
    </div>
  );
};

export default Menu;
