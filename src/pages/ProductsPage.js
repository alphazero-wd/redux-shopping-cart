import { useSelector } from 'react-redux';
import Form from '../components/Form';
import Product from '../components/Product';
const ProductsPage = () => {
  const { displayedProducts } = useSelector((state) => state.products);

  return (
    <section className="my-5">
      <div className="container">
        <h1 className="lead text-center fs-1 fw-medium">Products</h1>
        <div className="d-xl-flex justify-content-between mt-5">
          <Form />
          <div className="row g-4">
            {displayedProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
