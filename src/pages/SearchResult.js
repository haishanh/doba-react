import React, { Component } from 'react';
import request from 'reqwest'
import { Link } from 'react-router';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

class SearchResult extends Component {
  state = {
    ready: false,
    title: '',
    subjects: []
  }

  componentDidMount = () => {
    this.fetchList();
  }

  componentDidUpdate = (prevProps) => {
    let oldQ = prevProps.location.query.q;
    let newQ = this.props.location.query.q;
    if (newQ !== oldQ) {
      this.setState({ ready: false });
      this.fetchList();
    }
  }

  componentWillUnMount = () => {
    this.request.abort();
  }

  fetchList = () => {
    let url = 'https://api.douban.com/v2/movie/search?q=';
    url += this.props.location.query.q;

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
  }

  render = () => {
    if (!this.state.ready) return <Loading />;

    return (
      <div>

        <div className="intheater title">{this.state.title}</div>
        <MovieList subjects={this.state.subjects} inlineTitle />
      </div>
    );
  }
}

export default SearchResult;