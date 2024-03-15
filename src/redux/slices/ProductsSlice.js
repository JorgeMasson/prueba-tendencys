import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
  },
});

export const { setProducts, setProduct } = productsSlice.actions;

export const ProductsReducer = productsSlice.reducer;
