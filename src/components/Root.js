import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
// import createHistory from 'history/createHashHistory';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/App';
import InTheaters from '../pages/InTheaters';
import SearchResult from '../pages/SearchResult';
import Subject from '../pages/Subject';
import Celebrity from '../pages/Celebrity';

import '../scss/main.scss';

const history = createHistory();
const store = configureStore(history);

const Root = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/subject/:id" component={Subject} />
          <Route path="/celebrity/:id" component={Celebrity} />
          <Route path="/search*" component={SearchResult} />
          <Route path="/" component={InTheaters} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>;

export default Root;
