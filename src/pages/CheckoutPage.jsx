import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Checkout = () => {
    const cart = useSelector((state) => state.cart.items);  // ✅ Always use Redux state
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cart]);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleOrder = () => {
        dispatch(clearCart());  // ✅ Clears cart in Redux
        navigate("/order-success");  // ✅ Navigates after clearing
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b py-3">
                                <div>
                                    <h3 className="text-lg font-medium">{item.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        ${item.price} x {item.quantity}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className=" p-4 border-t">
                        <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={handleOrder}
                            className="w-full bg-orange-400 text-white py-2 rounded-md cursor-pointer hover:bg-orange-500 duration-200"
                        >
                            Place Order
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
