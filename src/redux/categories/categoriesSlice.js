import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryLists: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'bookcategories',
  initialState,
  reducers: {
    checkBookStatus: (state) => state.status,
  },
});

export const { checkBookStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
