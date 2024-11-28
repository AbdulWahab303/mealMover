import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

const UserProfile = ({ userData }) => {
  const [user, setUser] = useState(userData);
  const [newAddress, setNewAddress] = useState("");
  const [addresses, setAddresses] = useState(user.addresses || []);

  const handleAddressAdd = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress]);
      setNewAddress("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data:", user, "Addresses:", addresses);
  };

  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">User Profile</h1>
      
      {/* Account Information Form */}
      <form
        className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-700">Account Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
            />
          </div>

          {/* Contact No */}
          <div className="sm:col-span-2">
            <label htmlFor="contactNo" className="block text-sm text-gray-600">
              Contact No
            </label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={user.contactNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
            />
          </div>

          {/* Change Password */}
          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm text-gray-600">
              Change Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="New Password"
              className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
        >
          Update Account
        </button>
      </form>

      {/* Address Section */}
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-gray-700">Addresses</h2>
        <ul className="space-y-2">
          {addresses.map((address, index) => (
            <li
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-md flex justify-between"
            >
              {address}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Add new address"
            className="flex-grow px-3 py-2 border rounded-md focus:ring-yellow-400"
          />
          <button
            onClick={handleAddressAdd}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

// Server-side Rendering (SSR)
export async function getServerSideProps() {
  const userData = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    contactNo: "123456789",
    addresses: ["123 Main St", "456 Elm St"],
  };

  return { props: { userData } };
}

export default UserProfile;
