import React, { Component } from 'react';
import request from 'reqwest'
import { Link } from 'react-router';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Search from '../components/Search';

class InTheaters extends Component {
  state = {
    ready: false,
    title: '',
    subjects: []
  }

  componentDidMount = () => {
    this.fetchList();
  }

  componentWillUnMount = () => {
    this.request.abort();
  }

  fetchList = () => {
    let url = 'https://api.douban.com/v2/movie/in_theaters';

    this.request = request({
      url,
      type: 'jsonp'
    })
    .then(res => {
      this.setState({
        title: res.title.replace(/-[\S]+$/,''),
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

export default InTheaters;