import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../api/products';
import ProductsState from '../interfaces/ProductsState';
import DataState from '../interfaces/DataState';
import ProductInterface from '../interfaces/ProductInterface';
import { AxiosError } from 'axios';

const initialState: ProductsState = {
  products: [],
  totalCount: 0,
  totalPrice: 0,
  loading: false,
  error: null,
  filter: { categories: [''] },
  sort: '',
  page: 1,
  limit: 10
};

const productsSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setParams: (
      state,
      action: PayloadAction<{
        key: keyof ProductsState;
        value: ProductsState[keyof ProductsState];
      }>
    ) => {
      const { key, value } = action.payload;
      state[key] = value as never;
      if (key !== 'page') state.page = 1;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.items as ProductInterface[];
        state.totalCount = action.payload.totalCount;
        state.totalPrice = (action.payload.items as ProductInterface[]).reduce(
          (acc, p) => acc + p.price,
          0
        );
        state.loading = false;
        state.error = null;

        // caching in session storage
        sessionStorage.setItem('productsState', JSON.stringify(state));
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.error = `${payload}` || 'something went wrong';
        state.loading = false;
        state.totalCount = 0;
        state.totalPrice = 0;
        state.page = 1;
      });
  }
});

export const { setParams } = productsSlice.actions;

export const fetchProducts = createAsyncThunk<DataState, any, any>(
  'productSlice/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as { productsReducer: ProductsState };

      const {
        filter = { categories: [''] },
        sort = '',
        limit = 10,
        page = 1
      } = state.productsReducer;

      const data = await getProducts({ filter, sort, limit, page });
      return data;
    } catch (error: unknown) {
      const exception = error as AxiosError;
      if (exception.response) {
        if (exception.response.status === 400 && exception.response.data) {
          const data = exception.response.data as {
            statusCode: number;
            error: string;
          };
          return thunkAPI.rejectWithValue(data.error);
        } else {
          return thunkAPI.rejectWithValue(
            'Something went wrong, please try again later.'
          );
        }
      } else if (exception.request) {
        return thunkAPI.rejectWithValue(
          'Something wrong with your request, please try later'
        );
      } else {
        return thunkAPI.rejectWithValue(
          'Something went wrong, please try again later.'
        );
      }
    }
  }
);

export default productsSlice.reducer;
