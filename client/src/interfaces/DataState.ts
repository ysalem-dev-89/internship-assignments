import CategoryInterface from './CateogryInterface';
import ProductInterface from './ProductInterface';

export default interface DataState {
  items: ProductInterface[] | CategoryInterface[];
  totalCount: number;
  message?: string | null;
  status?: number;
}
