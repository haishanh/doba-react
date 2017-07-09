import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { loadState } from '../utils';

const preloadedState = loadState();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    preloadedState,
    // should remove logger middleware from prod build
    // but...I don't really care for such an app
    applyMiddleware(thunkMiddleware, createLogger())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
