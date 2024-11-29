import React from "react";
import { MenuItems } from "./MenuItems";

const Menu = (props) => {
  return (
    <div class="container mx-auto my-6 px-8 sm:px-12 lg:px-16">
      <h1 class="text-2xl font-bold text-center mb-6">Menu</h1>
      <div class="grid grid-cols-1 space-y-2 lg:space-y-6">
        {
          props.data.map((val)=>{
            return (
              <MenuItems menuItem={val}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Menu;
