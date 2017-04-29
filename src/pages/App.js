import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../components/Icon';
import Search from '../components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">
            <Icon name="doba" />
          </Link>
          <div className="search-wrapper">
            <Search />
          </div>
        </div>
        <div className="content">{this.props.children}</div>
        <footer>
          <p>
            <span>Made with </span>
            <span className="red">love</span>
            <span> by Haishan</span>
          </p>
          <a href="https://github.com/haishanh/moba-react">
            <Icon name="github" />
          </a>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
