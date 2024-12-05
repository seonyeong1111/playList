import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cart.js";
import modalReducer from "../store/slices/modal.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
