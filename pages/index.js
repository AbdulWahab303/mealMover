import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Restaurants from "@/components/Restaurants";
import Categories from "@/components/Catergories";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Home(props) {

  const {data:session}=useSession();
  
  return (
    <>
      <Header/>
      <HeroSection></HeroSection>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Popular Cuisines
        </h1>
        <Categories></Categories>
      </div>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Restaurants
        </h1>
        <Restaurants data={props.shopData}></Restaurants>
      </div>
      <Footer></Footer>
    </>
  );
}



export async function getStaticProps() {

  const response=await axios.get('http://localhost:3000/api/restraunts');
  const restraunts=response.data.Shops.filter((val)=>val.featured);

  return{
    props:{
      shopData:restraunts
    },
    revalidate:100
  }  
}
