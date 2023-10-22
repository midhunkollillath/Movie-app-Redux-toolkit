import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie/Movieslice'
export const store = configureStore({
  reducer:{
    movies:movieReducer,
  },
});
