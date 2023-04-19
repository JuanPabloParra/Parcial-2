import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const rootElement = document.getElementById('root');

// Reemplazar ReactDOM.render con createRoot
const root = ReactDOM.createRoot(rootElement);

// Encerrar todo dentro del createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
