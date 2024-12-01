import React from "react";
import { notFound, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

const OrderConfirmation = (props) => {
  const router = useRouter();

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start space-y-6 pt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your purchase! Your order has been successfully placed.
          </p>
        </div>

        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Order Summary</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="text-gray-700">Order ID:</span>
              <span className="font-medium">#{props.orderDetails._id}</span>
            </li>
            {
              props.orderDetails.items.map((val)=>{
                return(
                  <li key={val.menuItemId} className="flex justify-between">
                  <span className="text-gray-700">{`${val.name} ${val.quantity>1?`(X${val.quantity})`:''}`}</span>
                  <span className="font-medium">Rs.{val.price}{val.quantity>1?` x ${val.quantity} = ${val.price*val.quantity}`:''} </span>
                </li>
                )
              })
            }
            <li className="flex justify-between">
              <span className="text-gray-700">Total Amount:</span>
              <span className="font-medium">Rs. {props.orderDetails.totalPrice}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Payment Method:</span>
              <span className="font-medium">Credit Card</span> {/* Update dynamically */}
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <button
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all"
            onClick={() => router.push("/delivery")}
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderConfirmation;




export async function getServerSideProps(context){
    const orderId=context.query.order;
    const response=await axios.get(`http://localhost:3000/api/orders/${orderId}`);
    if(!response.data.orderDetails){
      return{
        notFound:true
      }
    }


    return {
      props:{orderDetails:response.data.orderDetails}
    }
}
