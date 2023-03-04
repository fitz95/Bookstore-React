import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
// import composeWithDevTools from '@reduxjs/toolkit/dist/devtoolsExtension';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const composedEnhancer = applyMiddleware(thunkMiddleware);
const store = configureStore({
  reducer: {
    bookstore: bookReducer,
    categories: categoriesReducer,
  },
}, composedEnhancer);

// eslint-disable-next-line no-undef
// store.dispatch(bookstore.actions.remove('item1'));

export default store;
