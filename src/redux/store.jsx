import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productReducer";
import { useReducer } from "react";

export const store = configureStore({
    reducer: {
        userReducer,
        cartReducer,
        productReducer
    }
});
