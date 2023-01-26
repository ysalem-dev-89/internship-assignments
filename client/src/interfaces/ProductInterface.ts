import CategoryInterface from './CateogryInterface';

export default interface ProductInterface {
  id: string;
  title: string;
  description?: string;
  image?: string;
  price: number;
  category: CategoryInterface;
}
