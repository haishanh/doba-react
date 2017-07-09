import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';

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
  module.hot.accept('./components/Root', () => render(Root));
}
