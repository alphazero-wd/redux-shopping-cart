import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { totalAmount } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-primary py-2 navbar-white">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          FakeStore
        </Link>
        <Link to="/cart" className="btn text-white position-relative">
          <i className="fas fa-shopping-cart"></i>
          <div
            className="bg-danger text-white d-flex align-items-center justify-content-center position-absolute rounded-circle"
            style={{
              width: '20px',
              height: '20px',
              top: '-3px',
              right: '-2px',
            }}
          >
            {totalAmount}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
