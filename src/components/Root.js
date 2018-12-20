import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import InTheaters from '../pages/InTheaters';
import SearchResult from '../pages/SearchResult';
import Subject from '../pages/Subject';
import Celebrity from '../pages/Celebrity';

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../scss/main.scss';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
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
    </Router>
  </Provider>
);

export default Root;
