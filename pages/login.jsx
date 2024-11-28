import React from "react";
import Footer from "@/components/Footer";

const Login = () => {
  return (
<>
<div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center">
      {/* App Info Section */}
      <div className="w-full bg-gradient-to-r h-auto from-yellow-100 via-red-700 to-yellow-200 pb-5 text-center mb-10 shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="/logo.svg"
            alt="Meal Mover Logo"
            className="h-64 -mb-20 transform transition-transform hover:scale-105"
          />
          <p className="mt-2 text-lg sm:text-xl text-gray-100">
            <span className="font-semibold">
              Your Favorite Food, Delivered Fast!
            </span>
          </p>
          <p className="mt-2 text-gray-50 text-sm sm:text-base max-w-lg">
            Explore 100+ restaurants and enjoy lightning-fast delivery, tailored
            just for you.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 mb-10">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105">
          <div className="text-yellow-500 text-3xl mb-4">🍔</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Fast Delivery
          </h3>
          <p className="text-sm text-gray-600">
            Get your food delivered fresh and fast right to your doorstep.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105">
          <div className="text-yellow-500 text-3xl mb-4">🍕</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            100+ Restaurants
          </h3>
          <p className="text-sm text-gray-600">
            Choose from a wide variety of your favorite cuisines.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105">
          <div className="text-yellow-500 text-3xl mb-4">🌟</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Exclusive Offers
          </h3>
          <p className="text-sm text-gray-600">
            Enjoy discounts and deals exclusive to Meal Mover users.
          </p>
        </div>
      </div>

      {/* Login Section */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Login
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    <Footer></Footer></>
    
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Login;
