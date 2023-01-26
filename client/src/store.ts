import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import categoriesReducer from './features/categoriesSlice';
import userReducer from './features/usersSlice';

export const store = configureStore({
  reducer: {
    productsReducer,
    categoriesReducer,
    userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
