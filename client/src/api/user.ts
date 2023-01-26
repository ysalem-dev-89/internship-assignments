import { UserInterface } from '../interfaces/UserInterface';
import axios from './axios';

export const createUser = async (user: UserInterface | null) => {
  const response = await axios.post(`/users`, user);
  return response.data;
};
