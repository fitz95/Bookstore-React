import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    bookstore: bookReducer,
    categories: categoriesReducer,
  },
});

// eslint-disable-next-line no-undef
// store.dispatch(bookstore.actions.remove('item1'));

export default store;
