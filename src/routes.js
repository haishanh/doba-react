import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import In_theaters from './pages/In_theaters';
import Subject from './pages/Subject-2';
import Celebrity from './pages/Celebrity';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ In_theaters } />
    <Route path='subject/:id' component={ Subject } />
    <Route path='celebrity/:id' component={ Celebrity } />
  </Route>
);

export default routes;