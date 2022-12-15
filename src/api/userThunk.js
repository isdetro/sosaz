import { customFetch } from '../utils/axios';
import { getAllUsers } from '../features/user/userSlice';

export const userLoginThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/login', user);
    return resp.data;
  } catch (error) {
    console.log(error, 'login user');
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const getAllUserThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get('/admin/admin/all');
    return resp.data;
  } catch (error) {
    console.log(error, 'get all user error');
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/admin/register', user);
    thunkAPI.dispatch(getAllUsers());
    return resp.data;
  } catch (error) {
    console.log(error.response, 'register user error');
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
