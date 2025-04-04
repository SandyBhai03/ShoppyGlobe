import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
    return (
        <tr className="relative border-gray-500 border-b">
            <td className="p-3 flex items-center gap-3 flex-wrap">
                <img src={item.thumbnail} alt={item.name} className="w-12 h-12 md:w-16 md:h-16 rounded" />
                <div>
                    <p className="font-semibold text-sm md:text-base">{item.title}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{item.category}</p>
                </div>
            </td>
            <td className="p-3 text-sm md:text-base">${item.price}</td>
            <td className="absolute top-[35%] sm:top-[20%] p-3 flex items-center lg:gap-2">
                <button onClick={() => onQuantityChange(item.id, -1)} className="px-2 border border-gray-500 rounded font-semibold bg-orange-400 hover:bg-orange-600 duration-200 cursor-pointer">-</button>
                <span className="w-8 text-center text-sm md:text-base">{String(item.quantity).padStart(2, "0")}</span>
                <button onClick={() => onQuantityChange(item.id, 1)} className="px-2 border border-gray-500 rounded font-semibold bg-orange-400 hover:bg-orange-600 duration-200 cursor-pointer">+</button>
            </td>
            <td className="p-3 text-sm md:text-base">${(item.price * item.quantity).toFixed(2)}</td>
            <td className="p-3">
                <button onClick={() => onRemove(item.id)} className="w-6 h-6 flex items-center justify-center text-lg font-semibold text-gray-800 border border-gray-500 rounded bg-orange-400 hover:bg-orange-600 duration-200 cursor-pointer">&times;</button>
            </td>
        </tr>
    );
};

export default CartItem;
