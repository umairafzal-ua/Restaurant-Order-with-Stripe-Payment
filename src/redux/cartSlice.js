import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.name === action.payload.name);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
          state.totalQuantity--;
        }
      }
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
      state.totalQuantity--;
    },
  },
});

export const { addToCart, removeFromCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;