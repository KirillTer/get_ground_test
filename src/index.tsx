import './index.css';

import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
