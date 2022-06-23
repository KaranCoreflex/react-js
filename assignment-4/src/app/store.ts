import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countrySlice from '../features/countrySlice';


export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
