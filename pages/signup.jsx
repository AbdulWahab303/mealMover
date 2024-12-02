import React, { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [username, setUserName] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    houseNo: "",
  });

  const [errors, setErrors] = useState({});
  const [usernameMsg, setUsernameMsg] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    }
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    setErrors((prev) => ({
      ...prev,
      [name]: "", // Clear error for the current field
    }));
  };

  useEffect(() => {
    const checkUsername = async () => {
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMsg("");
        try {
          const response = await axios.get(
            `/api/check-username?username=${username}`
          );
          setUsernameMsg(response.data.message);
        } catch (error) {
          const axiosError = error;
          setUsernameMsg(
            axiosError.response?.data.message ?? "Error in response"
          );
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkUsername();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Validate fields and collect errors
    const newErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!formData.contact) {
      newErrors.contact = "Contact number is required";
      isValid = false;
    }

    if (!formData.houseNo) {
      newErrors.houseNo = "House number is required";
      isValid = false;
    }

    if (!formData.street) {
      newErrors.street = "Street is required";
      isValid = false;
    }

    if (!formData.zip) {
      newErrors.zip = "Zip code is required";
      isValid = false;
    }

    if (!formData.state) {
      newErrors.state = "State is required";
      isValid = false;
    }

    if (!formData.city) {
      newErrors.city = "City is required";
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;
    try {
      const response = await axios.post("/api/sign-up", { formData: formData });

      if (response.status === 200) {
        toast({
          title: "Account Created Successfully",
          description: "Redirecting to Login",
        });
        router.push("/login");
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
                  className={`w-full px-3 py-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

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
                className={`w-full px-3 py-2 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                required
                onChange={handleChange}
                value={formData.username}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
              {isCheckingUsername && <Loader2 className="animate-spin" />}
              <p
                className={`text-sm ${
                  usernameMsg === "Username Available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {usernameMsg}
              </p>
            </div>

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
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                required
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

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
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                required
                onChange={handleChange}
                value={formData.password}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

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
                className={`w-full px-3 py-2 border ${
                  errors.contact ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                required
                onChange={handleChange}
                value={formData.contact}
              />
              {errors.contact && (
                <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
              )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.houseNo ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.houseNo}
                />
                {errors.houseNo && (
                  <p className="text-red-500 text-xs mt-1">{errors.houseNo}</p>
                )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.street ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.street}
                />
                {errors.street && (
                  <p className="text-red-500 text-xs mt-1">{errors.street}</p>
                )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.zip ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.zip}
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.state}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.city}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
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
                  className={`w-full px-3 py-2 border ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-yellow-400`}
                  required
                  onChange={handleChange}
                  value={formData.country}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
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

export default Signup;
