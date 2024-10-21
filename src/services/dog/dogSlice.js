import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dogs: [],
  status: 'idle',
};

const dogSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    setDogs: (state, action) => {
      state.dogs = action.payload;
    },
  },
});

export const { setDogs } = dogSlice.actions;
export default dogSlice.reducer;
