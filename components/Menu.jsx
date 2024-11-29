import React from "react";
import { MenuItems } from "./MenuItems";

const Menu = () => {
  return (
    <div class="container mx-auto my-6 px-8 sm:px-12 lg:px-16">
      <h1 class="text-2xl font-bold text-center mb-6">Menu</h1>
      <div class="grid grid-cols-1 space-y-2 lg:space-y-6">
        {/* <div class="bg-blue-500 p-4">Item 1</div> */}
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

export default Menu;
