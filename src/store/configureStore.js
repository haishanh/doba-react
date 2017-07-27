import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../ducks';
import { loadState } from '../utils';
import { routerMiddleware } from 'react-router-redux';

const preloadedState = loadState();

export default function configureStore(history) {
  const store = createStore(
    rootReducer,
    preloadedState,
    // should remove logger middleware from prod build
    // but...I don't really care for such an app
    applyMiddleware(thunkMiddleware, routerMiddleware(history), createLogger())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextRootReducer = require('../ducks').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
