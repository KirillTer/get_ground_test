import reducer, { BookState } from './BookSlice'

import { AnyAction } from '@reduxjs/toolkit';
import { fetchBooks } from './ActionCreators';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual([
    { text: 'Use Redux', completed: false, id: 0 }
  ])
})

test('should handle a books being added to an empty list', () => {
  const previousState: BookState = {
    books: null,
    count: 0,
    isLoading: false,
    error: '',
  }

  expect(reducer(previousState, fetchBooks('Run the tests') as unknown as AnyAction)).toEqual([
    { books: 'Run the tests', count: 0, isLoading: false, error: '' }
  ])
})
