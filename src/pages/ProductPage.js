import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AddToCartLink from '../components/AddToCartLInk';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../redux/reducers/productReducer';
import Loading from '../components/Loading';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProduct(id)), [dispatch, id]);
  const { product, loading } = useSelector((state) => state.product);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="my-5">
      <h1 className="fs-1 text-center fw-bold mb-5">About Product</h1>
      <div className="container d-md-flex justify-content-between align-items-center">
        <img
          src={product.image}
          className="text-center d-block mx-auto w-50"
          alt={product.title}
        />
        <div className="ms-md-4 mt-3 mt-md-0">
          <h2 className="fs-2">{product.title}</h2>
          <h3 className="fs-3 text-primary">${product.price.toFixed(2)}</h3>
          <h4 className="fs-4 my-3 text-muted text-capitalize">
            {product.category}
          </h4>
          <p className="my-2 lead">{product.description}</p>
          <div className="mt-3">
            <Link to="/" className="btn btn-primary me-3">
              Continue Shopping
            </Link>
            <AddToCartLink id={parseInt(id)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
