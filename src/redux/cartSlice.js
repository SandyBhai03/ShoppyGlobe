// ~~~~~~~~ Add item to Cart with Local Storage Code ~~~~~~~~~
import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          price: action.payload.price ? parseFloat(action.payload.price.toFixed(2)) : 0, // Ensure price is valid
          quantity: 1,
        });
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    }, 
    clearCart: (state) => {
      state.items = []; // ✅ Clears all items from cart
      localStorage.removeItem("cart"); // ✅ Ensure local storage is cleared
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + amount);
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// ~~~~~`` without add cart items in local storage item add to cart code ~~~~~~~~
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1; // if item exist update quantity
//       } else {
//         state.items.push({
//           ...action.payload,
//           price: parseFloat(action.payload.price.toFixed(2)), // Ensure 2 decimal places
//           quantity: 1,
//         }); // add new item with quantity 1
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     updateQuantity: (state, action) => {
//       const { id, amount } = action.payload;
//       const item = state.items.find((item) => item.id === id);
//       if (item) {
//         item.quantity = Math.max(1, item.quantity + amount); // Ensure quantity is at least 1
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;
