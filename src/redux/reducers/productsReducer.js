import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://fakestoreapi.com/products/';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: true,
    displayedProducts: [],
  },
  reducers: {
    changeProducts: (state, action) => {
      state.displayedProducts = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.displayedProducts = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { changeProducts } = productsSlice.actions;
export default productsSlice.reducer;
