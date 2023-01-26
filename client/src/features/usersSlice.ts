import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser } from '../api/user';
import UserState from '../interfaces/UserState';
import DataState from '../interfaces/DataState';
import { CustomerType, UserInterface } from '../interfaces/UserInterface';
import { AxiosError } from 'axios';

const initialState: UserState = {
  user: { customerType: CustomerType.Individual },
  status: 'idle',
  error: null,
  customerType: CustomerType.Individual
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCustomerType: (state, action) => {
      state.user.customerType = action.payload;
    },
    clearState: state => {
      console.log('initial', initialState);
      state.user = { customerType: CustomerType.Individual };
      state.status = 'idle';
      state.error = null;
      state.customerType = CustomerType.Individual;
    },
    clearError: state => {
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(postUser.fulfilled, (state, action) => {
        console.log('action,', action);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(postUser.rejected, (state, { payload }) => {
        state.error = `${payload}` || 'something went wrong';
        state.status = 'failed';
      });
  }
});

export const { setCustomerType, clearState, clearError } = userSlice.actions;

export const postUser = createAsyncThunk<DataState, any, any>(
  'userSlice/postUser',
  async (user: UserInterface, thunkAPI) => {
    try {
      const data = await createUser(user);
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

export default userSlice.reducer;
