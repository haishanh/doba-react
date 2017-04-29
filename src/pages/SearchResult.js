import React, { Component } from 'react';
import request from 'reqwest';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

class SearchResult extends Component {
  state = {
    ready: false,
    title: '',
    subjects: []
  };

  componentDidMount = () => {
    this.fetchList();
  };

  componentDidUpdate = prevProps => {
    let prevSearch = prevProps.location.search;
    let thisSearch = this.props.location.search;
    if (prevSearch !== thisSearch) {
      this.setState({ ready: false });
      this.fetchList();
    }
  };

  componentWillUnMount = () => {
    this.request.abort();
  };

  fetchList = () => {
    let url = 'https://api.douban.com/v2/movie/search';
    url += this.props.location.search;

    this.request = request({
      url,
      type: 'jsonp'
    })
      .then(res => {
        this.setState({
          title: res.title,
          subjects: res.subjects,
          ready: true
        });
      })
      .fail((err, msg) => {
        console.log(err, msg);
      });
  };

  render = () => {
    if (!this.state.ready) return <Loading />;

    return (
      <div>
        <div className="intheater title">{this.state.title}</div>
        <MovieList subjects={this.state.subjects} inlineTitle />
      </div>
    );
  };
}

export default SearchResult;
