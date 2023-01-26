import CategoryInterface from './CateogryInterface';

export default interface CategoryState {
  categories: CategoryInterface[];
  error?: string | null;
}
