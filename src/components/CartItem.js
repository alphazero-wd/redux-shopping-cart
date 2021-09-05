import { useDispatch } from 'react-redux';
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from '../redux/reducers/cartReducer';

const CartItem = ({ id, amount, price, title }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <th scope="row">{title}</th>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch(decreaseAmount(id))}
          >
            &minus;
          </button>
          <div type="button" className="btn btn-light">
            {amount}
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch(increaseAmount(id))}
          >
            +
          </button>
        </div>
      </td>
      <td>${(price * amount).toFixed(2)}</td>
      <td>
        <button
          className="border-0 p-0 bg-transparent text-danger text-uppercase"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
