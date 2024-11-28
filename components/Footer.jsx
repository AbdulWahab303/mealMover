import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-6 border-t-2 border-yellow-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Media */}
        <div className="flex flex-col sm:flex-row justify-center items-center ">
          <div className="mb-4 mx-12 sm:mb-0">
            <img src="/logo.svg" alt="Meal Mover Logo" className="h-48" />
          </div>
          <div className="flex space-x-16">
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-4 text-center sm:text-left">
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300 text-center"
          >
            Partner with us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300 text-center"
          >
            Help Center
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300 text-center"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300 text-center"
          >
            Terms and Conditions
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 text-center text-gray-600">
          © {new Date().getFullYear()} Meal Mover
        </div>
      </div>
    </footer>
  );
};

export default Footer;
