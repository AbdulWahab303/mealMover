import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Restaurants from "@/components/Restaurants";
import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const restaurants = (props) => {

  const {data:session}=useSession();
  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Restaurants
        </h1>
        <Restaurants data={props.shopData}></Restaurants>
      </div>
      <Footer></Footer>
    </>
  );
};

export default restaurants;



export async function getStaticProps() {

  const response=await axios.get('http://localhost:3000/api/restraunts');
  const restraunts=response.data.Shops;

  return{
    props:{
      shopData:restraunts
    },
    revalidate:100
  }  
}