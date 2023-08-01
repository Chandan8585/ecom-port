import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '/src/reducers/HomeSlice.js';

export default configureStore({
  reducer: {
    counter: HomeReducer,
  },
});

