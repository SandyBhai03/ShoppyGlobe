import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { id } = useParams();
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product data:", product);
      return;
    }
  
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`); // Show toast notification
  };
  
  

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        // Check if API response contains an error message
        if (data.message) {
          throw new Error(data.message);
        }

        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center font-semibold text-xl py-4">Loading...</p>;

  if (error) {
    return (
      <div className="text-center text-red-500 mt-7">
        <p className="font-semibold text-xl">{error}</p>
        <button 
          onClick={() => navigate("/")} 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 cursor-pointer px-4 rounded mt-4"
        >
          Go to Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl relative mx-auto p-4 px-7 bg-white hover:scale-102 duration-200 border-slate-100 border-[2px] bg-gradient-to-r from-white via-slate-100 to-slate-100 rounded shadow-md shadow-gray-500 sm:mt-25 lg:mt-35">
      <button 
        onClick={() => navigate(-1)} 
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 cursor-pointer px-4 rounded mb-4"
      >
        ← Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-2xl text-orange-400 font-bold">${product.price}</p>
          <p className="text-gray-700 my-4">{product.description}</p>
          <p className="font-semibold text-2xl text-gray-400 absolute top-6 right-10">{product.rating} &#9733;</p>
          <button onClick={() => handleAddToCart(product)}  // ✅ Passes the product
          className="bg-orange-400 text-white cursor-pointer px-6 py-2 rounded hover:bg-orange-500 w-full duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;


