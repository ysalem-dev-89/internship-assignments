import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import ProductItem from './ProductItem';
import ProductsState from '../../interfaces/ProductsState';

const ProductList = () => {
  const { products } = useSelector(
    (state: { productsReducer: ProductsState }) => state.productsReducer
  );

  return (
    <Container>
      <Row md={3} sm={2} lg={4}>
        {products?.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
