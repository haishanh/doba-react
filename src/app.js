import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history';

import routes from './routes';

import './scss/main.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={appHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);