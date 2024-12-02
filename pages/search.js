import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Restaurants from "@/components/Restaurants";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
const SearchPage = () => {
  const [searchType, setSearchType] = useState("restaurant"); // "restaurant" or "foodItem"
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [results2,setResults2]=useState([]);
  const router = useRouter();

  const handleSearch = async () => {
    if (!query) return;
    try {
      console.log(query);
      console.log(searchType);
      setResults([]);
      setResults2([]);
      if(!results){
        setResults([]);
      }
      if(!results2){
        setResults2([]);
      }

      const response = await axios.post(`http://localhost:3000/api/search`, {
        type: searchType,
        query: query,
      });
      if(response.status===200 && searchType==="restaurant"){
        setResults(response.data.found);
      }
      else if(response.status===200){
        setResults2(response.data.items);
      }

    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("No results found.");
      } else {
        console.error("Search error:", error);
      }
    }
  };

  const handleResultClick = (result) => {
    if (result.type === "restaurant") {
      router.push(`/restaurant/${result.id}`);
    } else if (result.type === "foodItem") {
      if (result.restaurantId) {
        router.push(`/restaurant/${result.restaurantId}`);
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-10 px-5 bg-yellow-100 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Search</h1>

          {/* Search Type Selector */}
          <div className="flex space-x-4 mb-4">
            <button
              className={`py-2 px-4 rounded-lg ${
                searchType === "restaurant"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSearchType("restaurant")}
            >
              Search by Restaurant
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${
                searchType === "foodItem"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSearchType("foodItem")}
            >
              Search by Food Item
            </button>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder={`Search for a ${searchType}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold"
            onClick={handleSearch}
          >
            Search
          </button>

          {/* Results */}
        </div>
          {results.length > 0 && (
            <div className="container mx-auto px-2 py-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
                Restaurants
              </h1>
              <Restaurants data={results}></Restaurants>
            </div>
          )}
          {
            results2.length>0 &&(
              <Menu data={results2} changeShape={true}/>
            )
          }
      </div>
      <Footer/>
    </>
  );
};

export default SearchPage;
