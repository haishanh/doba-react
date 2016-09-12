import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import routes from './routes';

import './scss/main.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);