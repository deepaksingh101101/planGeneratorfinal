// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/formSlice';
import counterReducer from './features/counter';

export const store = configureStore({
  reducer: {
    form: formReducer,
    counter: counterReducer,
  },
});
