import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import CartItem from "../components/CartItem"; // ✅ Import the new component

const CartPage = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, amount) => {
        dispatch(updateQuantity({ id, amount }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const subtotal = cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);

    return (
        <div className="max-w-8xl mx-auto p-6 lg:px-22">
            <Link to="/" className="bg-orange-400 font-medium text-gray-100 px-2 hover:bg-orange-500 transition-all duration-200 hover:text-gray-700 py-1 rounded">
                ← HomePage
            </Link>
            <h1 className="text-2xl font-semibold text-center mb-6">Your Cart</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-5">
                <div className="lg:col-span-4 bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full text-left text-sm md:text-base">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="p-3">Product</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <p className="flex justify-between py-2 border-b border-gray-500 text-sm md:text-base"><span>Subtotal</span><span>${subtotal}</span></p>
                    <p className="flex justify-between py-2 border-b border-gray-500 text-sm md:text-base"><span>Shipping</span><span>Free</span></p>
                    <p className="flex justify-between py-2 font-semibold text-lg"><span>Total</span><span>${subtotal}</span></p>
                    <button
                        onClick={() => navigate('/checkout')}
                        className="w-full mt-4 bg-orange-400 hover:bg-orange-500 duration-200 cursor-pointer text-white py-2 rounded text-sm md:text-base"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

// ~~~~~~~~~~~ Without CartItem Component direct code ~~~~~~~~~~~

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../redux/cartSlice";

// const CartPage = () => {
//     const navigate = useNavigate();
//     const cartItems = useSelector((state) => state.cart.items);
//     const dispatch = useDispatch();

//     const handleQuantityChange = (id, amount) => {
//         dispatch(updateQuantity({ id, amount }));
//     };

//     const handleRemove = (id) => {
//         dispatch(removeFromCart(id));
//     };

//     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//     return (
//         <div className="max-w-8xl mx-auto p-6 lg:px-22">
//             <Link to='/' className="bg-orange-400 font-medium text-gray-100 px-2 hover:bg-orange-500 transition-all duration-200 hover:text-gray-700 py-1 rounded">
//                 ← HomePage
//             </Link>
//             <h1 className="text-2xl font-semibold text-center mb-6">Your Cart</h1>
//             <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-5">
//                 <div className="lg:col-span-4 bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md overflow-x-auto">
//                     <table className="w-full text-left text-sm md:text-base">
//                         <thead>
//                             <tr className="border-b border-gray-700">
//                                 <th className="p-3">Product</th>
//                                 <th className="p-3">Price</th>
//                                 <th className="p-3">Quantity</th>
//                                 <th className="p-3">Total</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cartItems.map((item) => (
//                                 <tr key={item.id} className="relative border-gray-500 border-b">
//                                     <td className="p-3 flex items-center gap-3 flex-wrap">
//                                         <img src={item.thumbnail} alt={item.name} className="w-12 h-12 md:w-16 md:h-16 rounded" />
//                                         <div>
//                                             <p className="font-semibold text-sm md:text-base">{item.title}</p>
//                                             <p className="text-gray-500 text-xs md:text-sm">{item.category}</p>
//                                         </div>
//                                     </td>
//                                     <td className="p-3 text-sm md:text-base">${item.price}</td>
//                                     <td className=" absolute top-[38%] right-[27%] sm:top-[33%] sm:right-[20%] lg:right-[19%] p-3 flex items-center lg:gap-2">
//                                         <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 border border-gray-500 rounded font-semibold bg-orange-400 hover:bg-orange-600 duration-200 cursor-pointer">-</button>
//                                         <span className="w-8 text-center text-sm md:text-base">{String(item.quantity).padStart(2, "0")}</span>
//                                         <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 border border-gray-500 rounded font-semibold bg-orange-400 hover:bg-orange-600 duration-200 cursor-pointer">+</button>
//                                     </td>
//                                     <td className="p-3 text-sm md:text-base">${(item.price * item.quantity).toFixed(2)}</td>
//                                     <td className="p-3">
//                                         <button onClick={() => handleRemove(item.id)} className="w-6 h-6 flex items-center justify-center text-lg font-semibold text-gray-800 border border-gray-500 rounded bg-orange-400 hover:bg-orange-600 duration-200 cursor-pointer">&times;</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md">
//                     <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//                     <p className="flex justify-between py-2 border-b border-gray-500 text-sm md:text-base"><span>Subtotal</span><span>${subtotal}</span></p>
//                     <p className="flex justify-between py-2 border-b border-gray-500 text-sm md:text-base"><span>Shipping</span><span>Free</span></p>
//                     <p className="flex justify-between py-2 font-semibold text-lg"><span>Total</span><span>${subtotal}</span></p>
//                     <button onClick={() => navigate('/checkout')}
//                         className="w-full mt-4 bg-orange-400 hover:bg-orange-500 duration-200 cursor-pointer text-white py-2 rounded text-sm md:text-base">
//                         Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;
