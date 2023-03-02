import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryLists: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'bookcategories',
  initialState,
  reducers: {
    // eslint-disable-next-line prefer-object-spread
    checkBookStatus: (state) => ({ ...state, status: 'Under Construction' }),
  },
});

export const { checkBookStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
