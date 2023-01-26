import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductsState from '../../interfaces/ProductsState';
import { AppDispatch } from '../../store';
import { setParams } from '../../features/productsSlice';
import CategoryState from '../../interfaces/CategoryState';

export default function CategorySelect() {
  const dispatch = useDispatch<AppDispatch>();

  const { filter } = useSelector(
    (state: { productsReducer: ProductsState }) => state.productsReducer
  );

  const { categories } = useSelector(
    (state: { categoriesReducer: CategoryState }) => state.categoriesReducer
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    let categoryList = filter.categories.slice();

    if (categoryList.includes(category)) {
      categoryList = categoryList.filter(c => c !== e.target.id);
    } else {
      categoryList.push(category);
    }

    dispatch(
      setParams({
        key: 'filter',
        value: {
          categories: categoryList
        }
      })
    );
  };

  return (
    categories && (
      <aside>
        <Form>
          {categories.map(category => (
            <FormGroup key={category.id}>
              <div className="d-flex gap-2">
                <Input
                  type="checkbox"
                  id={category.id}
                  value={category.id}
                  checked={filter?.categories?.includes(category.id)}
                  onChange={handleFilterChange}
                ></Input>
                <Label htmlFor={category.id}>{category.name}</Label>
              </div>
            </FormGroup>
          ))}
        </Form>
      </aside>
    )
  );
}
