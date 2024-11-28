import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        class="px-4 py-2 text-gray-700 bg-white border-2 border-yellow-200 rounded-lg focus:border-yellow-200 focus:ring-1 focus:ring-yellow-300 focus:outline-none transition-all duration-500 w-40 group focus:w-80"
      />
    </>
  );
};

export default SearchBar;
