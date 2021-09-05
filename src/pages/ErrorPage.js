import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="py-5 container text-center">
      <h1 className="display-h1 fw-bold">404 Not Found</h1>
      <Link to="/" className="btn btn-primary mt-3">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
