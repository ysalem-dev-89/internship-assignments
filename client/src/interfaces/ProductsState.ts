import ProductInterface from './ProductInterface';

export default interface ProductsState {
  products: ProductInterface[];
  totalCount: number;
  totalPrice: number;
  loading: boolean;
  error?: string | null;
  filter: { categories: string[] };
  sort: '' | 'name:asc' | 'name:desc' | 'title:asc' | 'title:desc';
  page: number;
  limit: number;
}
