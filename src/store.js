// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/storeForm1Data';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
