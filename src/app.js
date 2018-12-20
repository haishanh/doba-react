import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';

import Root from './components/Root';

const store = configureStore();
const props = { store };

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Root, props);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => render(Root, props));
}
