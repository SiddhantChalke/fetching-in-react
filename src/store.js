import { configureStore } from '@reduxjs/toolkit';
import { ApiSlice } from './ApiSlice'; // Import your RTK Query API slice

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});
