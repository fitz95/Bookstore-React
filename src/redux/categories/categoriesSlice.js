import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'bookcategories',
  initialState,
  reducers: {
    checkBookStatus: (state) => {
      state.push('Under construction');
      state.toString();
    },
  },
});

export const { checkBookStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
