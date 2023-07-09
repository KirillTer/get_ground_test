import { render, screen } from '@testing-library/react';

import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import userEvent from '@testing-library/user-event';

test('Routes', async () => {
  render(
    <MemoryRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  await userEvent.click(screen.getByTestId('books-link'))
  expect(screen.getByTestId('books-page')).toBeInTheDocument();
});