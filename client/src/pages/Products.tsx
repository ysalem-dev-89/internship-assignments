import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';
import { fetchCategories } from '../features/categoriesSlice';
import ProductsState from '../interfaces/ProductsState';
import { AppDispatch } from '../store';
import FilterForm from '../components/FilterForm';
import ProductList from '../components/ProductList';
import { Col, Container, Row, Spinner } from 'reactstrap';
import CategorySelect from '../components/CategorySelect';
import PaginationNavbar from '../components/PaginationNavbar';
import Notification from '../components/Notification';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [notification, setNotification] = useState({
    message: '',
    isError: false
  });

  const { totalPrice, filter, sort, limit, page, loading, error } = useSelector(
    (state: { productsReducer: ProductsState }) => state.productsReducer
  );

  useEffect(() => {
    dispatch(fetchCategories({}));
    dispatch(fetchProducts({}));
  }, [dispatch, filter, sort, page, limit]);

  useEffect(() => {
    setNotification({
      message: error || 'something went wrong',
      isError: true
    });
  }, [error]);

  return (
    <main className="products">
      <Container>
        <h1 className="h2">Products:</h1>
        <p>Here we list all our products, you can filter by category</p>
        <p className="h6">Total Price: ${totalPrice}</p>

        <hr></hr>
        <Row>
          {!error && (
            <Col md={3}>
              <CategorySelect />
            </Col>
          )}

          <Col md={9}>
            {loading && (
              <div className="loading">
                <Spinner className="loading-spinner">Loading...</Spinner>{' '}
              </div>
            )}
            {error && (
              <Notification
                notification={notification}
                setNotification={setNotification}
              />
            )}
            {!error && (
              <>
                {' '}
                <FilterForm />
                {!loading && (
                  <>
                    <PaginationNavbar />
                    <ProductList />
                    <PaginationNavbar />
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Products;
