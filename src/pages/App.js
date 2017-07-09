import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Icon from '../components/Icon';
import doba from '../svg/doba.svg';
import github from '../svg/github.svg';
import Search from '../components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">
            <Icon name={doba.id} />
          </Link>
          <div className="search-wrapper">
            <Search />
          </div>
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <footer>
          <p>
            <span>Made with </span>
            <span className="red">love</span>
            <span> by Haishan</span>
          </p>
          <a href="https://github.com/haishanh/moba-react">
            <Icon name={github.id} />
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
