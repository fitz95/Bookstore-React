import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    bookstore: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
