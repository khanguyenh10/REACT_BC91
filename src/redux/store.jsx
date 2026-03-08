import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import { useReducer } from "react";

export const store = configureStore({
    reducer: {
        userReducer,
        // svReducer
    }
});
