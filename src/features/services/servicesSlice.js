import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  getAllCategoriesThunk,
  createCategoryThunk,
} from '../../api/serviceThunk';

const initialState = {
  categories: [],
};

export const getAllCategories = createAsyncThunk(
  'services/getAllServices',
  getAllCategoriesThunk
);

export const createCategory = createAsyncThunk(
  'services/createCategory',
  createCategoryThunk
);

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    // setUserDetail: (state, { payload }) => {
    //   state.singleUser = state.users.find((user) => user.id === payload);
    // },
  },
  extraReducers: {
    [getAllCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    },
    [getAllCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [createCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

// export const { logoutUser } =
//   userSlice.actions;

export default servicesSlice.reducer;
