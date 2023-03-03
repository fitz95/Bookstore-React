import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AsCYA8Mrm9jQkNrmGWwS/books/';
const removeUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AsCYA8Mrm9jQkNrmGWwS/books/';
const initialState = {
  books: [],
  error: '',
  loading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(Url);
    return response.data;
  } catch (err) {
    return err.message;
  }
});
export const addBooks = createAsyncThunk('book/addBooks', async (obj) => {
  const { data } = await (axios.post(Url, obj));
  return data;
});

export const removeBooks = createAsyncThunk('book/deleteBooks', async (id) => {
  const { data } = await (axios.delete(`${removeUrl}${id}`));
  return data;
});
/* eslint-disable no-param-reassign */
const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    remove: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((item) => item.id !== itemId);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const newArray = [];
        const arr = Object.entries(action.payload);
        arr.map(([key, value]) => {
          const data = value.map((x) => ({ ...x, id: key }));
          newArray.push(...data);
          state.books = newArray;
          return state.books;
        });
      })
      .addCase(addBooks.fulfilled, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});
/* eslint-disable no-param-reassign */
export const { addBook, remove } = bookSlice.actions;
export default bookSlice.reducer;
