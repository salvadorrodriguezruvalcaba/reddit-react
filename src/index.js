import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppWrapper from './containers/AppWrapper';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
