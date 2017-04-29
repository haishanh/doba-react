import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './pages/App';
import InTheaters from './pages/InTheaters';
import SearchResult from './pages/SearchResult';
import Subject from './pages/Subject';
import Celebrity from './pages/Celebrity';

const routes = (
  <App>
    <Switch>
      <Route path="/subject/:id" component={Subject} />
      <Route path="/celebrity/:id" component={Celebrity} />
      <Route path="/search*" component={SearchResult} />
      <Route path="/" component={InTheaters} />
    </Switch>
  </App>
);

export default routes;
