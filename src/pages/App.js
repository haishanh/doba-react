import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from '../components/Icon';
import Search from '../components/Search';

class App extends Component {
    render() {
        return (
          <div>
            <div className="header">
              <Link to='/'>
                <Icon name="doba" />
              </Link>
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
  children: PropTypes.node
};

export default App;
