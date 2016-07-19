import React, { PropTypes } from 'react';

import Icon from './Icon';

class Search extends React.Component {

  render = () => {
    return (
      <div className="search-bar">
        <div className="search-icon">
          <Icon name="search" />
        </div>
        <input
          className="search-input"
          type="text"
          onKeyDown={this.search}
          onChange={this.onChange}
          placeholder="搜索..."
        />
      </div>
    );
  }

}

Search.propTypes = {
};

export default Search;