import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cats: [],
  status: 'idle',
};

const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats: (state, action) => {
      state.cats = action.payload;
    },
  },
});

export const { setCats } = catSlice.actions;
export default catSlice.reducer;
