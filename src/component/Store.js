import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneySlice";

export const Store = configureStore({
    reducer: {
        money: moneyReducer
    },
})