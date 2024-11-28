import React from "react";
import Footer from "@/components/Footer";


const Signup = () => {
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
        </div>
      </div>

      {/* Signup Section */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Sign Up
        </h2>
        <form>
          {/* First Name and Last Name Inputs */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-600 font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-600 font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>
          </div>

          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
            />
          </div>

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
              placeholder="Enter your Email"
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
              placeholder="Enter your Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
            />
          </div>

          {/* Contact Number Input */}
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-gray-600 font-medium mb-1"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your Contact Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Signup;
