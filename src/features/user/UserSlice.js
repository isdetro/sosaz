import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { customFetch } from '../../utils/axios';
import {
  userLoginThunk,
  getAllUserThunk,
  registerUserThunk,
} from '../../api/userThunk';

import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getRememberUserState,
  rememberUser,
} from '../../utils/localstorage';

const initialState = {
  users: [],
  isLoading: false,
  totalUsers: 0,
  user: getRememberUserState() ? getUserFromLocalStorage() : null,
};

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  getAllUserThunk
);

export const loginUser = createAsyncThunk('user/loginUser', userLoginThunk);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  registerUserThunk
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch('/auth/updateUser', user);
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue('Unauthorized !Logging  out');
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
    rememberUserAction: (state, { payload }) => {
      rememberUser(payload);
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload: { data, total } }) => {
      state.isLoading = false;
      state.users = data;
      state.totalUsers = total;
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(`İstifadəçi uğurla yaradıldı`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(payload);
      toast.success(`Xoş gəldiniz ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload, 'login user rejected');
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`User Updated`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { logoutUser, rememberUserAction } = userSlice.actions;
export default userSlice.reducer;
