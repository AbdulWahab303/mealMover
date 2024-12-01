import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center animate-fade-in">
      <h1 className="text-6xl font-bold text-yellow-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" passHref>
        <button className="px-6 py-3 bg-yellow-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-110">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
