import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../pages/App';
import InTheaters from '../pages/InTheaters';
import SearchResult from '../pages/SearchResult';
import Subject from '../pages/Subject';
import Celebrity from '../pages/Celebrity';

import '../scss/main.scss';

const store = configureStore();

const Root = () =>
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/subject/:id" component={Subject} />
          <Route path="/celebrity/:id" component={Celebrity} />
          <Route path="/search*" component={SearchResult} />
          <Route path="/" component={InTheaters} />
        </Switch>
      </App>
    </Router>
  </Provider>;

export default Root;
