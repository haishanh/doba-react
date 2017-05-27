import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './routes';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    render(Root);
  });
}
