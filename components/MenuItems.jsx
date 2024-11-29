import React from "react";
import Image from "next/image";
import Button from "./Button";

export const MenuItems = () => {
  return (
    <div className="flex shadow border-yellow-200 border border-solid shadow-yellow-200 w-3/4 h-36 rounded-xl justify-between space-x-3 group hover:scale-105 ease-in-out duration-300 hover:shadow hover:bg-yellow-100/20 hover:shadow-yellow-300 hover:border-none mx-auto">
      <div className="flex items-center pl-4 bg-red">
        <Image
          src="/chinese-cuisine.jpg"
          width={210}
          height={210}
          objectFit="contain"
          className="object-contain rounded-2xl group-hover:scale-105 transition-all ease-in duration-200"
        ></Image>
      </div>
      <div className="flex-1 flex-col space-y-2 my-2 overflow-hidden">
        <p className="font-semibold text-lg ">
          Zinger Burger & Fries With 1 Drink 345 Ml
        </p>
        <p className="text-2xl font-semibold text-yellow-400">
          Rs. 599{" "}
          <span className="line-through text-base font-light text-slate-400">
            Rs. 699
          </span>
        </p>
        <p className="font-light">
          Chicken zinger tower burger in a bun topped with a hash brown, zinger
          piece, cheese, ketchup, crunchy, filling & deliciousicken zinger tower
          burger in a bun topped with a hash brown, zinger piece, cheese,
          ketchup, crunchy, filling & delicious
        </p>
      </div>
      <div className="flex-initial w-[15%] flex justify-center items-center pr-4">
        <Button>
          <span className="text-sm">Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};
