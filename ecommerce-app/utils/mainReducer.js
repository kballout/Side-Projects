import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  darkMode: false,
  cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : { cartItems: [] }
};

export const mainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    editCart: (state, action) => {
      const newItem = action.payload.payload;
      switch (action.payload.type) {
        case "ADD_TO_CART": {
            const exists = state.cart.cartItems.find((item) => item.slug === newItem.slug);
            const cartItems = exists 
             ? state.cart.cartItems.map((item) => 
                item.name === exists.name ? newItem : item
                )
            : [...state.cart.cartItems, newItem];
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
            return {...state, cart: {...state.cart, cartItems}}
        }
        case "REMOVE_FROM_CART": {
          const cartItems = state.cart.cartItems.filter((item) => item.slug !== newItem.slug);
          Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
          return {...state, cart: {...state.cart, cartItems}}
        }
        default:
        return state
      }
    },
  },
});

export const { toggleDarkMode, editCart } = mainReducer.actions;
export default mainReducer.reducer;
