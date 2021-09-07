import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { changeProducts } from '../redux/reducers/productsReducer';
import { useDispatch } from 'react-redux';
const Form = () => {
  const { products } = useSelector((state) => state.products);
  const [options, setOptions] = useState({
    category: 'all',
    searchValue: '',
    sortOrder: '1',
  });

  const dispatch = useDispatch();

  const categories = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ];

  const onChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };

  const updateProducts = () => {
    let results = [...products];
    // filter by category
    if (options.category !== 'all') {
      results = results.filter(
        (product) => product.category === options.category
      );
    }
    // filter by search value
    if (options.searchValue) {
      results = results.filter((product) =>
        product.title.includes(options.searchValue.toLowerCase())
      );
    }
    // sort products
    switch (options.sortOrder) {
      case '1':
        results = results.sort((a, b) => (a.title < b.title ? -1 : 0));
        break;
      case '2':
        results = results.sort((a, b) => (a.title > b.title ? -1 : 0));
        break;
      case '3':
        results = results.sort((a, b) => a.price - b.price);
        break;
      case '4':
        results = results.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    dispatch(changeProducts(results));
  };

  useEffect(() => {
    updateProducts();
  }, [options]);
  return (
    <form className="form mb-5 me-5 w-100">
      <div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            value={options.category}
            onChange={onChange}
            id="category"
            name="category"
          >
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor="category">Filter By</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            value={options.sortOrder}
            onChange={onChange}
            id="sortOrder"
            name="sortOrder"
          >
            <option value="1" selected>
              Name (A-Z)
            </option>
            <option value="2">Name (Z-A)</option>
            <option value="3">Price (Lowest)</option>
            <option value="4">Price (Highest)</option>
          </select>
          <label htmlFor="category">Sort By: </label>
        </div>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Search for products"
          onChange={onChange}
          name="searchValue"
          value={options.searchValue}
        />
      </div>
    </form>
  );
};

export default Form;
