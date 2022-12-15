import axios from 'axios';
import { getUserFromLocalStorage } from './localstorage';

export const customFetch = axios.create({
  baseURL: 'https://dev.optima.az:8290/api',
});

// add a request interceptor
customFetch.interceptors.request.use(
  (request) => {
    const token = getUserFromLocalStorage()?.['access_token'];
    if (token) {
      request.headers['Authorization'] = 'Bearer ' + token;
    }
    request.headers['Content-Type'] = 'application/json';
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// add response interceptors
customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
