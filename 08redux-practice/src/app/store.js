import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todos/todoSlice";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:todoReducer,
    products:productReducer,
    cart:cartReducer,
    users:userReducer,
  },
});