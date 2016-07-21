import React, { PropTypes } from 'react';

import Icon from './Icon';

class Search extends React.Component {

  state = {
    focused: false
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //let path = 'search?q=' + this.state.query;
      let path = 'search?q=' + this.refs.input.value;
      this.refs.input.value = '';
      this.context.router.push(path);
    }
  }

  // onChange = (e) => {
  //   // e.preventDefault();
  //   this.setState({query: e.target.value});
  // }

  render = () => {

    let searchBarClassName = this.state.focused
                           ? 'search-bar focused'
                           : 'search-bar';
    return (
      <div className={searchBarClassName}>
        <div className="search-icon">
          <Icon name="search" />
        </div>
        <input
          className="search-input"
          ref="input"
          type="text"
          onKeyDown={this.onKeyDown}
          onFocus={() => this.setState({focused: true})}
          onBlur={() => this.setState({focused: false})}
          placeholder="搜索..."
        />
      </div>
    );
  }

}

Search.propTypes = {
};

export default Search;