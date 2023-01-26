import axios from './axios';

export const getProducts = async ({
  filter,
  sort,
  limit,
  page
}: {
  filter: { categories?: string[] };
  sort: string;
  limit: number;
  page: number;
}) => {
  const response = await axios.get(
    `/products?category=${filter?.categories
      ?.join(',')
      .slice(1)}&sort=${sort}&page=${page}&limit=${limit}`
  );
  return response.data;
};
