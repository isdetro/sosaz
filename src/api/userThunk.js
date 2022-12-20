import { customFetch } from '../utils/axios';
import { getAllUsers, logoutUser } from '../features/user/userSlice';

export const userLoginThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/login', user);
    return resp.data;
  } catch (error) {
    console.log(error, 'login user');
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

export const getAllUserThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get('/admin/admins/all');
    console.log(resp.data, 'respdata');
    return resp.data;
  } catch (error) {
    console.log(error, 'get all user error');
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

// export const changeUserStatusThunk = async (data, thunkAPI) => {
//   try {
//     const resp = await customFetch.post(`/change/${data.id}/${data.status}`);
//     return resp.data;
//   } catch (error) {
//     if (error.response.status === 401) {
//       thunkAPI.dispatch(logoutUser());
//       return thunkAPI.rejectWithValue(
//         'Əməliyyatı icra etmək üçün səlahiyyətiniz yoxdur'
//       );
//     }
//     return thunkAPI.rejectWithValue(error.response.data.message);
//   }
// };

export const changeUserStatusThunk = async ({ id }, thunkAPI) => {
  try {
    const resp = await customFetch.post(`/admin/change-status/${id}`);
    thunkAPI.dispatch(getAllUsers());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue(
        'Əməliyyatı icra etmək üçün səlahiyyətiniz yoxdur'
      );
    }
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const updateUserThunk = async (userData, thunkAPI) => {
  const { id } = userData;
  const newUserData = {
    ...userData,
    birth_date: '2022-12-29',
  };
  try {
    const resp = await customFetch.put(`/admin/update/${id}/`, newUserData);
    thunkAPI.dispatch(getAllUsers());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue(
        'Əməliyyatı icra etmək üçün səlahiyyətiniz yoxdur'
      );
    }
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
