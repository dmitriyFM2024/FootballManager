import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);