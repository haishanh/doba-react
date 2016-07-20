import React from 'react';
import request from 'reqwest'
import { Link } from 'react-router';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

class SearchResult extends React.Component {
  state = {
    title: '',
    subjects: []
  }

  componentDidMount = () => {
    this.fetchList();
    console.log('Mounting');
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
      console.dir(res);
      this.setState({
        title: res.title,
        subjects: res.subjects
      });
    })
    .fail((err, msg) => {
      console.log(err, msg);
    });
  }

  render = () => {
    if (!this.state.title) return <Loading />;

    return (
      <div>

        <div className="intheater title">{this.state.title}</div>
        <MovieList subjects={this.state.subjects} inlineTitle />
      </div>
    );
  }
}

export default SearchResult;

        // <div className="search-wrapper">
        //   <Search />
        // </div>