import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  userLoginThunk,
  getAllUserThunk,
  registerUserThunk,
  changeUserStatusThunk,
  updateUserThunk,
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
  isUserStatusLoading: false,
  isLoading: false,
  totalUsers: 0,
  singleUser: {},
  user: getRememberUserState() ? getUserFromLocalStorage() : null,
};

export const loginUser = createAsyncThunk('user/loginUser', userLoginThunk);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  registerUserThunk
);

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  getAllUserThunk
);

export const changeUserStatus = createAsyncThunk(
  'user/changeUserStatis',
  changeUserStatusThunk
);

export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);

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
    setUserDetail: (state, { payload }) => {
      state.singleUser = state.users.find((user) => user.id === payload);
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload: { data, total } }) => {
      state.isLoading = false;
      state.users = data;
      state.singleUser = state.users[0];
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
      console.log(payload, 'update user');
      const { user } = payload;
      state.isLoading = false;
      toast.success(`İstifadəşi məlumatları uğurla yeniləndi`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [changeUserStatus.pending]: (state) => {
      state.isUserStatusLoading = true;
    },
    [changeUserStatus.fulfilled]: (state, { payload }) => {
      state.isUserStatusLoading = false;
      toast.success(`İstifadəçi statusu uğurla dəyişdirildi`);
    },
    [changeUserStatus.rejected]: (state, { payload }) => {
      state.isUserStatusLoading = false;
      toast.error(payload);
    },
  },
});

export const { logoutUser, rememberUserAction, setUserDetail } =
  userSlice.actions;
export default userSlice.reducer;
