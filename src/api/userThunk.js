import { customFetch } from '../utils/axios';

export const userLoginThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/login', user);
    return resp.data;
  } catch (error) {
    console.log(error, 'login user');
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
