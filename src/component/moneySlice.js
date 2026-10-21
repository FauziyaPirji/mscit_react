import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
    name:"money",
    initialState: {amount: 100, count:10},
    reducers: {
        addMoney: (state, action) => {
            state.amount = state.amount + action.payload
        },
        reduceMoney: (state, action) => {
            state.amount = state.amount - action.payload
        }
    },
});

export default moneySlice.reducer;
export const {addMoney, reduceMoney} = moneySlice.actions;