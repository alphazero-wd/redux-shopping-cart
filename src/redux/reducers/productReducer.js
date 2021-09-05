import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const url = 'https://fakestoreapi.com/products/';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const res = await fetch(`${url}${id}`);
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: true,
    product: {},
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    [fetchProduct.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default productSlice.reducer;
