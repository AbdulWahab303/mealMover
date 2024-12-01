import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const UserProfile = (props) => {
  const {toast}=useToast();
  const router=useRouter();
  const [userData, setUserData] = useState({
    firstName: props.userData.firstName,
    lastName: props.userData.lastName,
    contactNo: props.userData.contactNo,
    addresses: props.userData.addresses,
  });

  const [newData, setNewData] = useState({
    firstName: props.userData.firstName,
    lastName: props.userData.lastName,
    contactNo: props.userData.contactNo,
    addresses: props.userData.addresses,
    password:''
  });
  const [newAddress,setNewAddress]=useState({});

  const onAddressChange=(e)=>{
    const {name,value}=e.target;
    setNewAddress((prev)=>{
      return {...prev,[name]:value}
    });
  };

  const handleAddressAdd = (e) => {
    setNewData((prev)=>{
      return{
        ...prev,addresses:[...prev.addresses,newAddress]
      }
    });
    setNewAddress({});
    };
  const handleChange = (e) => {
    const{name,value}=e.target;
    setNewData((prev)=>{
      return {...prev,[name]:value}
    });
  };

  const updateAPI = async () => {
    const updates = {};
  
    // Check differences and add to updates object
    if (userData.firstName !== newData.firstName) {
      updates.firstName = newData.firstName;
    }
    if (userData.lastName !== newData.lastName) {
      updates.lastName = newData.lastName;
    }
    if (userData.contactNo !== newData.contactNo) {
      updates.contactNo = newData.contactNo;
    }
    if (userData.addresses.length !== newData.addresses.length) {
      updates.addresses = newData.addresses;
    }
    if(newData.password){
      updates.password=newData.password;
    }
  
    // If there are no updates, show a toast and return
    if (Object.keys(updates).length === 0) {
      return toast({
        title: "Nothing to update",
        description:"Update any existing field"
      });
    }
    try {
        const response=await axios.patch('/api/update-profile',{updatedData:updates});
        console.log(response)
        if(response.status===200){
          router.push('/user-profile');
        }
    } catch (error) {
      console.log(error);
    }
  
  };
  


  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-yellow-50 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-6">
          User Profile
        </h1>

        {/* Account Information Form */}
        <div
          className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg space-y-4"
          
        >
          <h2 className="text-2xl font-semibold text-gray-700">
            Account Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={newData.firstName}
                onChange={handleChange}
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
                value={newData.lastName}
                onChange={handleChange}
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
                value={props.userData.username}
                
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
                value={props.userData.email}
                
                className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
              />
            </div>

            {/* Contact No */}
            <div className="sm:col-span-2">
              <label
                htmlFor="contactNo"
                className="block text-sm text-gray-600"
              >
                Contact No
              </label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={newData.contactNo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
              />
            </div>

            {/* Change Password */}
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm text-gray-600">
                Change Password
              </label>
              <input
                id="password"
                name="password"
                placeholder="New Password"
                className="w-full px-3 py-2 border rounded-md focus:ring-yellow-400"
                onChange={handleChange}
                value={newData.password}
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">Addresses</h2>
          <ul className="space-y-2">
            {newData.addresses.map((address, index) => (
              <li
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-md flex justify-between"
              >
                H#{address.houseNo},St#{address.street},{address.state},
                {address.city},{address.country}
              </li>
            ))}
          </ul>
          
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
                  onChange={onAddressChange}
                  value={newAddress.houseNo||''}
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
                  onChange={onAddressChange}
                  value={newAddress.street||''}
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
                  onChange={onAddressChange}
                  value={newAddress.zip||''}
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
                  onChange={onAddressChange}
                  value={newAddress.state||''}
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
                  onChange={onAddressChange}
                  value={newAddress.city||''}
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
                  onChange={onAddressChange}
                  value={newAddress.country||''}
                />
              </div>
            </div>
            <button
            onClick={handleAddressAdd}
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
          >
            Add Address
          </button>
          

          <button
          onClick={updateAPI}
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
          >
            Update Account
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  const response = await axios.get("http://localhost:3000/api/profile", {
    headers: {
      // Forward cookies to the backend
      Cookie: cookies || "",
    },
  });
  if (!response.data.userDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userData: response.data.userDetails,
    },
  };
}

export default UserProfile;
