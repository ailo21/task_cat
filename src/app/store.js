import { configureStore } from '@reduxjs/toolkit';
import catSlice from "../features/cat/catSlice";

export const store = configureStore({
  reducer: {
    cat: catSlice
  },
});
