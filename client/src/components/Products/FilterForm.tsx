import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import ProductsState from '../../interfaces/ProductsState';
import { setParams } from '../../features/productsSlice';

export default function FilterForm() {
  const dispatch = useDispatch<AppDispatch>();

  const { sort, limit } = useSelector(
    (state: { productsReducer: ProductsState }) => state.productsReducer
  );

  const handleSortChange = (newSort: string) => {
    dispatch(setParams({ key: 'sort', value: newSort }));
  };

  const handleLimitChange = (limit: number) => {
    dispatch(setParams({ key: 'limit', value: limit }));
  };

  return (
    <Container>
      <Form>
        <Row className="justify-content-end">
          <Col xs="12" md="3">
            <FormGroup>
              <Label for="sortBy">Sort by:</Label>
              <Input
                type="select"
                id="sortBy"
                onChange={e => handleSortChange(e.target.value)}
              >
                <option value="" selected={sort?.includes('')}>
                  None
                </option>
                <option
                  value="title:asc"
                  selected={sort?.includes('title:asc')}
                >
                  Title (A-Z)
                </option>
                <option
                  value="title:desc"
                  selected={sort?.includes('title:desc')}
                >
                  Title (Z-A)
                </option>
                <option
                  value="price:asc"
                  selected={sort?.includes('price:asc')}
                >
                  Price (low-high)
                </option>
                <option
                  value="price:desc"
                  selected={sort?.includes('price:desc')}
                >
                  Price (high-low)
                </option>
              </Input>
            </FormGroup>
          </Col>
          <Col xs="12" md="3">
            <FormGroup>
              <Label for="pageSize">Page Size:</Label>
              <Input
                type="select"
                id="pageSize"
                onChange={e => handleLimitChange(Number(e.target.value))}
              >
                <option value="5" selected={limit == 5}>
                  5
                </option>
                <option value="10" selected={limit == 10}>
                  10
                </option>
                <option value="20" selected={limit == 20}>
                  20
                </option>
                <option value="30" selected={limit == 30}>
                  30
                </option>
                <option value="50" selected={limit == 50}>
                  50
                </option>
                <option value="100" selected={limit == 100}>
                  100
                </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
