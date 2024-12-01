import React, { useRef,useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";


const Signup = () => {
  const {toast}=useToast();
  const router=useRouter();
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    contact:"",
    street:"",
    city:"",
    state:"",
    zip:"",
    country:"",
    houseNo:""
  });


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>{
      return {...prev,[name]:value}
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sign-up', { formData: formData });
  
      if (response.status === 200) {
        toast({
          title: "Account Created Successfully",
          description: "Redirecting to Login",
        });
        router.push('/login');
      }
  
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };
  

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
              name="firstName"
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.firstName}
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
              name="lastName"
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.lastName}
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
            name="username"
              type="text"
              id="username"
              placeholder="Enter your Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
              onChange={handleChange}
              value={formData.username}
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
            name="email"
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
              onChange={handleChange}
              value={formData.email}
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
            name="password"
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
              onChange={handleChange}
              value={formData.password}
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
            name="contact"
              type="tel"
              id="contact"
              placeholder="Enter your Contact Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              required
              onChange={handleChange}
              value={formData.contact}
            />
          </div>


          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="houseNo"
                className="block text-gray-600 font-medium mb-1"
              >
                House No
              </label>
              <input
              name="houseNo"
                type="text"
                id="houseNo"
                placeholder="H#no"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.houseNo}
              />
            </div>
            <div>
              <label
                htmlFor="street"
                className="block text-gray-600 font-medium mb-1"
              >
                Street
              </label>
              <input
              name="street"
                type="text"
                id="street"
                placeholder="street"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.street}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="zip"
                className="block text-gray-600 font-medium mb-1"
              >
                Zip
              </label>
              <input
              name="zip"
                type="text"
                id="zip"
                placeholder="Zip"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.zip}
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-gray-600 font-medium mb-1"
              >
                State
              </label>
              <input
              name="state"
                type="text"
                id="state"
                placeholder="state"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.state}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="city"
                className="block text-gray-600 font-medium mb-1"
              >
                City
              </label>
              <input
              name="city"
                type="text"
                id="city"
                placeholder="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.city}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-gray-600 font-medium mb-1"
              >
                Country
              </label>
              <input
              name="country"
                type="text"
                id="country"
                placeholder="country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                required
                onChange={handleChange}
                value={formData.country}
              />
            </div>
          </div>

          {/* Signup Button */}
          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>
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
