import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addBook: (state, payload) => {
      state.push(payload);
    },
    remove: (state, { action }) => {
      const itemId = action.payload;
      state.filter((item) => item.id === itemId);
    },
  },
});

export const { addBook, remove } = bookSlice.actions;
export default bookSlice.reducer;
