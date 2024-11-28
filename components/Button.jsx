import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button

        // Default Styles
        className={
          "relative px-6 py-3 font-bold text-white transition-all duration-500 bg-yellow-300 border-1  border-yellow-600 rounded-xl overflow-hidden group hover:bg-yellow-400 hover:border-orange-400"
        }
        
      >
        <span className="relative z-10">
          {children}
          </span>

        {/* Transition Styles */}
        <span className="absolute inset-0 w-full h-full bg-yellow-50 rounded-full scale-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-10 group-hover:rotate-45 group-hover:bg-yellow-500"></span>

      </button>
    </>
  );
};

export default Button;
