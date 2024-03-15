import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },
  },
});

export const { setOrders, setOrder } = ordersSlice.actions;

export const OrdersReducer = ordersSlice.reducer;
