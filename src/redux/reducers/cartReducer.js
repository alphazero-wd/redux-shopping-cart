import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
    totalPrice: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    increaseAmount: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    },
    decreaseAmount: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
            : item
        ),
      };
    },
    updateTotal: (state) => {
      const totals = state.cart.reduce(
        (total, item) => {
          total.price += item.price * item.amount;
          total.amount += item.amount;
          return total;
        },
        {
          price: 0,
          amount: 0,
        }
      );
      state.totalPrice = totals.price;
      state.totalAmount = totals.amount;
    },
    addToLocalStorage: (state) => {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      return { ...state, cart: [] };
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  updateTotal,
  addToLocalStorage,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
