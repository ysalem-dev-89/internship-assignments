import { CustomerType, UserInterface } from './UserInterface';

export default interface UserState {
  user: UserInterface | { customerType: CustomerType };
  customerType: CustomerType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
