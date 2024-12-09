import React from "react";
import Image from "next/image";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

const RestaurantPage = (props) => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 mt-12">
        <div className="bg-yellow-200 p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center space-x-6">
            <div className="w-full md:w-1/3">
              <Image
                src={props.restaurant.image}
                alt={props.restaurant.name}
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold text-yellow-600">
                {props.restaurant.name}
              </h1>
              <p className="text-lg text-gray-600">{props.restaurant.details.location}</p>
              <p className="text-lg text-gray-600">
                Timing: {props.restaurant.details.timing}
              </p>
              <p className="text-xl font-semibold text-yellow-500">
                Reviews: {props.restaurant.reviews}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Menu data={props.restaurant.menu} shopId={props.restaurant._id}/>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {

  const response=await axios.get('http://localhost:3000/api/restraunts');
  const restraunts=response.data.Shops;
  const ids=restraunts.map((val)=>{
    return val._id;
  });
  const pathss=ids.map((val)=>{
    return (
      {
        params:{
          id:val
        }
      }
    )
  });

  return {
    paths:pathss,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const response=await axios.get(`http://localhost:3000/api/restraunts/${id}`);
  const details=response.data.shopDetails;

  return {
    props: {
      restaurant:details,
    },
    revalidate: 60,
  };
}

export default RestaurantPage;
