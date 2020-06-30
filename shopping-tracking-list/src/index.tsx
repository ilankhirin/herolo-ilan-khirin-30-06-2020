import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchRatesLoop } from './api/exchange-rates-api/fetchRates';
import App from './App';
import { store } from './store/store';

fetchRatesLoop()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
