import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import Icon from './Icon';
import search from '../svg/search.svg';

const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ push }, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Search extends Component {
  state = {
    focused: false
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      //let path = 'search?q=' + this.state.query;
      let path = '/search?q=' + this.refs.input.value;
      this.refs.input.value = '';
      this.props.actions.push(path);
      // this.props.history.push(path);
    }
  };

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
          <Icon name={search.id} />
        </div>
        <input
          className="search-input"
          ref="input"
          type="text"
          onKeyDown={this.onKeyDown}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          placeholder="搜索..."
        />
      </div>
    );
  };
}
