import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "lucide-react";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <CheckCircleIcon className="text-green-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-semibold text-gray-800">Order Confirmed!</h1>
      <p className="text-lg text-gray-600 mt-2">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <p className="text-gray-500 mt-2">You will receive a confirmation email shortly.</p>
      <Link to="/" className="mt-6 bg-orange-400 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 duration-200">
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessPage;
