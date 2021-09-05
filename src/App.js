import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// pages
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
// components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { fetchProducts } from './redux/reducers/productsReducer';
function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  const { loading } = useSelector((state) => state.products);
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductsPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
