import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";
import { useReducer } from "react";

export const store = configureStore({
    reducer: {
        userReducer,
        cartReducer
    }
});
