import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  darkMode: false,
  cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : { cartItems: [], shippingAddress: {} }
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
        case "RESET_CART": {
          return {
            ...state,
            cart: {
              cartItems: [],
              shippingAddress: {location: []},
              paymentMethod: ''
            }
          }
        }
        case "CLEAR_CART": {
          return {...state, cart: {...state.cart, cartItems: []}}
        }
        case "SAVE_SHIPPING_ADDRESS" : {
          return{
            ...state,
            cart: {
              ...state.cart,
              shippingAddress: {
                ...state.cart.shippingAddress,
                ...action.payload.payload
              }
            }
          }
        }
        case "SAVE_PAYMENT_METHOD" : {
          return{
            ...state,
            cart: {
              ...state.cart,
              paymentMethod: action.payload.payload
            }
          }
        }
        default:
        return state
      }
    },
  },
});

export const { toggleDarkMode, editCart } = mainReducer.actions;
export default mainReducer.reducer;
