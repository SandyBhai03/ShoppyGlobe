import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-all">
        Go to Home
      </Link>
    </div>
  );
};


export default NotFound;
