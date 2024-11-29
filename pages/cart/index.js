import React, { useState } from "react";
import Header from "@/components/Header";
import { useCart } from "@/context/cartContext";



const CartPage = (props) => {
    const {cartItems, addToCart, removeFromCart, clearCart,totalPrice,addSameItem,removeSameItem }=useCart();
    
  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-medium text-gray-600">Your cart is empty.</h2>
            <p className="text-gray-500 mt-2">Add items to your cart to see them here!</p>
          </div>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg p-5 mb-6">
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-4 last:border-b-0"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-500">Rs. {parseInt(item.price).toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <button
                          className="w-8 h-8 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
                          
                          disabled={item.quantity <= 1}
                          onClick={()=>removeSameItem(item._id)}
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          className="w-8 h-8 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
                          onClick={()=>addSameItem(item._id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                      onClick={()=>removeFromCart(item._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5">
              <div className="flex justify-between items-center text-gray-800">
                <h2 className="text-xl font-bold">Total:</h2>
                <span className="text-xl font-semibold">Rs. {totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full mt-5 px-4 py-3 bg-yellow-500 text-white font-bold text-lg rounded-lg hover:bg-yellow-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default CartPage;
