import AddToCartLink from './AddToCartLInk';
import { Link } from 'react-router-dom';
const Product = ({ id, title, price, description, category, image }) => {
  return (
    <div className="col" style={{ width: '18rem', margin: '1rem auto' }}>
      <div className="card product-card">
        <img src={image} className={title} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="text-capitalize card-subtitle mb-2 text-muted">
            {category}
          </h6>
          <p className="text-primary">${price.toFixed(2)}</p>
          <p className="card-text">
            {`${description.split(' ').slice(0, 10).join(' ')}...`}
          </p>
          <Link to={`/product/${id}`} className="btn btn-primary me-2">
            Read More
          </Link>
          <AddToCartLink id={id} />
        </div>
      </div>
    </div>
  );
};

export default Product;
