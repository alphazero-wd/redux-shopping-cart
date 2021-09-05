import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import productsReducer from './reducers/productsReducer';
const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
export default store;
