// import { AppDispatch } from '../store';
// import { IBook } from '../../../models/IBook';
import { IBookResponse } from '../../models/IBookResponse';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_URL = 'http://nyx.vima.ekt.gr:3000/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

// $api.interceptors.request.use((config: any) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config;
// })

// $api.interceptors.response.use((config) => {
//     return config;
// },async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 403 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
//             localStorage.setItem('token', response.data.accessToken);
//             return $api.request(originalRequest);
//         } catch (e) {
//             console.log('User not authorized')
//         }
//     }
//     throw error;
// })

export default $api;

// common redux action creator
// export const authUser = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchingSucccess(response.data));
//   } catch(e: any) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// }

// redux toolkit action creator
export const fetchBooks = createAsyncThunk(
  '/api',
  async (reqParams: any = {page: 1, filter: ""}, thunkAPI) => {
    try {
      const response = await $api.post<IBookResponse>(
        '/books',
        {
            page: reqParams.page,
            filters:[{type: "all", values: [reqParams.filter]}]
          }
      );
      return response;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data.message)
    }
  }
);
