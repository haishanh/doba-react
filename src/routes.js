import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import In_theaters from './pages/In_theaters';
import Subject from './pages/Subject';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ In_theaters } />
    <Route path='subject/:id' component={ Subject } />
  </Route>
);

export default routes;