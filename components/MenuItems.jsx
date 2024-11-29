import React from "react";
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import { useToast } from "@/hooks/use-toast";

export const MenuItems = (props) => {

  const {toast}=useToast();
  
  const {addToCart}=useCart();
  return (
    <div className="flex shadow border-yellow-200 border border-solid shadow-yellow-200 w-3/4 h-36 rounded-xl justify-between space-x-3 group hover:scale-105 ease-in-out duration-300 hover:shadow hover:bg-yellow-100/20 hover:shadow-yellow-300 hover:border-none mx-auto">
      <div className="flex items-center pl-4 bg-red">
        <Image
          src={props.menuItem.image}
          width={210}
          height={210}
          objectFit="contain"
          className="object-contain rounded-2xl group-hover:scale-105 transition-all ease-in duration-200"
        ></Image>
      </div>
      <div className="flex-1 flex-col space-y-2 my-2 overflow-hidden">
        <p className="font-semibold text-lg ">
          {props.menuItem.name}
        </p>
        <p className="text-2xl font-semibold text-yellow-400">
          Rs. {props.menuItem.price}
          <span className="line-through text-base font-light text-slate-400">
            Rs. 699
          </span>
        </p>
        <p className="font-light">
          {props.menuItem.description}
        </p>
      </div>
      <div className="flex-initial w-[15%] flex justify-center items-center pr-4">
        <button className={
          "relative px-3 py-3 font-bold text-white transition-all duration-500 bg-yellow-300 border-1  border-yellow-600 rounded-xl overflow-hidden group hover:bg-yellow-400 hover:border-orange-400"
        } onClick={()=>{
          toast({
            title:"Added to Cart",
            description:props.menuItem.name
          });
          addToCart(props);
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
