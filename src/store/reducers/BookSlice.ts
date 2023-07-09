import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IBook } from '../../models/IBook';
import { fetchBooks } from './ActionCreators';

export interface BookState {
  books: IBook[] | null;
  count: number;
  isLoading: boolean,
  error: string,
}

const initialState: BookState = {
  books: null,
  count: 0,
  isLoading: false,
  error: '',
}

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending.type]: (state) => {
      state.isLoading = true
      state.error = ""
    },
    [fetchBooks.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = ""
      state.books = action.payload.data.books
      state.count = action.payload.data.count
    },
    [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
      state.books = null
      state.count = 0
    },
  },
});

export const actionsReducer = bookSlice.actions;
export default bookSlice.reducer;