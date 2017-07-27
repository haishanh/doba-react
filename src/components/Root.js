import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import InTheaters from '../pages/InTheaters';
import SearchResult from '../pages/SearchResult';
import Subject from '../pages/Subject';
import Celebrity from '../pages/Celebrity';

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../scss/main.scss';

const history = createHistory();
const store = configureStore(history);

const Root = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Header} />
        <div className="content">
          <Route exact path="/" component={InTheaters} />
          <Route exact path="/subject/:id" component={Subject} />
          <Route exact path="/celebrity/:id" component={Celebrity} />
          <Route exact path="/search*" component={SearchResult} />
        </div>
        <Route path="/" component={Footer} />
      </div>
    </ConnectedRouter>
  </Provider>;

export default Root;
