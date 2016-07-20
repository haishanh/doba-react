import React from 'react';

import Icon from '../components/Icon';
import Search from '../components/Search';

class App extends React.Component {
    render() {
        return (
          <div>
            <div className="header">
              <Icon name="doba" />
              <div className="search-wrapper">
                <Search />
              </div>
            </div>
            <div className="content">{this.props.children}</div>
            <footer>
              Made with love by Haishan
            </footer>
          </div>
        );
    }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
