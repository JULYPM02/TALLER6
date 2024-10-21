import { configureStore } from '@reduxjs/toolkit';
import dogReducer from './services/dog/dogSlice';
import catReducer from './services/cat/catSlice';

export const store = configureStore({
  reducer: {
    dogs: dogReducer,
    cats: catReducer,
  },
});
