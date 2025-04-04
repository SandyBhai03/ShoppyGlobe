import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`); // Show toast
  };


  return (
    <div className="product-item relative h-75 bg-gradient-to-r from-white via-slate-100 to-slate-200 rounded shadow-md shadow-gray-500 hover:scale-105 transition-all duration-200">
      <div className="">
        <img
          className="w-36 mx-auto object-cover mt-2 mb-2"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      {/* Products details container div */}
      <div className="px-4 mt-3 mb-2 flex flex-col gap-2">
        <h3 className="font-semibold text-gray-800 truncate">{product.title}</h3>
        <p className="text-orange-500 font-bold text-xl">${product.price}</p>
        {/* View details and Add to Cart buttons container div */}
        <div className="flex gap-2 items-center justify-between">
          <Link
            className="w-fit bg-gradient-to-r from-orange-400 to-orange-300 px-3 font-medium text-gray-800 py-1 hover:to-orange-600 duration-300 transition-all rounded-full"
            to={`/product/${product.id}`}
          >
            View Details
          </Link>
          <div className="relative">
            <button onClick={handleAddToCart} className="peer" > {/* peer class on button */}
              <i className="fa-solid fa-cart-shopping text-2xl mr-1 cursor-pointer text-orange-400 hover:text-orange-500 hover:scale-105 transition-all duration-200"></i>
            </button>
            {/* Add To Cart Pop-up Div */}
            <div className="peer-hover:flex hidden bg-orange-300 w-fit text-orange-600 text-nowrap font-medium shadow-md shadow-gray-300 px-2 py-1 rounded absolute top-[-150px] left-[-146px] mt-1 transition-all duration-300">
              <p>Add Item in Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;