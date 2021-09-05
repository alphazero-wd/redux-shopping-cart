import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, increaseAmount } from '../redux/reducers/cartReducer';
const AddToCartLink = ({ id }) => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const addItem = (id) => {
    const item = products.find((product) => product.id === id);
    const inCart = cart.find((product) => product.id === id);
    if (inCart) {
      dispatch(increaseAmount(id));
    } else {
      dispatch(addToCart({ ...item, amount: 1 }));
    }
  };
  return (
    <Link to="/cart" onClick={() => addItem(id)} className="btn btn-primary">
      Add To Cart
    </Link>
  );
};

export default AddToCartLink;
