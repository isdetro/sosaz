import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/UserSlice';
import servicesSlice from './features/services/servicesSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    services: servicesSlice,
  },
});
