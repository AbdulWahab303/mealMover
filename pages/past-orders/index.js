import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

function UserOrders(props) {
  const router = useRouter();

  const handleOrderClick = (orderId) => {
    router.push(`/past-orders/${orderId}`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-6">
          Your Past Orders
        </h1>
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          {props.orders && props.orders.length > 0 ? (
            <ul className="space-y-4">
              {props.orders.map((order) => (
                <li
                  key={order.id}
                  className="border p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleOrderClick(order._id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-700">
                        Order #{order._id}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Placed on:{" "}
                        {new Date(order.timestamp).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Restraunt Name: {order.shopName}
                      </p>
                    </div>
                    <div className="text-yellow-600 font-bold">
                      Rs.{order.totalPrice.toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500 text-center">
              <p>You have no past orders.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = context.req.headers.cookie;
    const response = await axios.get("http://localhost:3000/api/order", {
      headers: {
        Cookie: cookies || "",
      },
    });
    if (response.status === 200) {
      return {
        props: {
          orders: response.data.userOrders,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default UserOrders;
