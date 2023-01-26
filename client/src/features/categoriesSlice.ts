import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../api/category';
import CategoryState from '../interfaces/CategoryState';
import CategoryInterface from '../interfaces/CateogryInterface';
import DataState from '../interfaces/DataState';

const initialState: CategoryState = {
  categories: [],
  error: null
};

const categoriesSlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.items as CategoryInterface[];
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export const fetchCategories = createAsyncThunk<DataState, any, any>(
  'categorySlice/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const data = await getCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export default categoriesSlice.reducer;
