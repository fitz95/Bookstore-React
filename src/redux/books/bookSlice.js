import { createSlice } from '@reduxjs/toolkit';

const booksArray = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const initialState = {
  books: booksArray,
};

const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    remove: (state, action) => {
      const itemId = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((item) => item.item_id !== itemId);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook, remove } = bookSlice.actions;
export default bookSlice.reducer;
