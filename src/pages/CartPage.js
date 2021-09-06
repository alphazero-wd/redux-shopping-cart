import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import {
  addToLocalStorage,
  clearCart,
  updateTotal,
} from '../redux/reducers/cartReducer';
const CartPage = () => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
    dispatch(addToLocalStorage());
  }, [dispatch, cart]);
  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="fs-1 lead fw-bold">Your Cart Is Empty</h1>
          <Link to="/" className="my-4 btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
            <tr>
              <th scope="row" colSpan="2">
                Total:{' '}
              </th>
              <td>${totalPrice.toFixed(2)}</td>
              <td>
                <button
                  className="border-0 p-0 bg-transparent text-danger text-uppercase"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear All
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartPage;
