import { render, screen } from '@testing-library/react';

import Books from './Books';
import { Provider } from 'react-redux';
import React from 'react';
import { setupStore } from '../../store/store';

describe('Testing Home page', () => {
  test('renders Posts page', () => {
    render(
      <Provider store={setupStore()}>
        <Books />
      </Provider>
    );
    const postTitle = screen.getByTestId('books-page');
    expect(postTitle).toBeInTheDocument();
  });
})