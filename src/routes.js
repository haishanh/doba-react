import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import InTheaters from './pages/InTheaters';
import SearchResult from './pages/SearchResult';
import Subject from './pages/Subject';
import Celebrity from './pages/Celebrity';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ InTheaters } />
    <Route path='subject/:id' component={ Subject } />
    <Route path='celebrity/:id' component={ Celebrity } />
    <Route path='search*' component={ SearchResult } />
  </Route>
);

export default routes;