import { configureStore } from '@reduxjs/toolkit';
import { innoloftApi } from './api';

export const store = configureStore({
  reducer: {
    [innoloftApi.reducerPath]: innoloftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(innoloftApi.middleware),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
