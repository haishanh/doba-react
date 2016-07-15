import React from 'react';
import request from 'reqwest'
import { Link } from 'react-router';

import Movie from '../components/movie';
import Loading from '../components/Loading';

class In_theaters extends React.Component {
  state = {
    title: '',
    subjects: []
  }

  componentDidMount = () => {
    let url = 'https://api.douban.com/v2/movie/in_theaters';

    request({
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

    const subjects = this.state.subjects.map((movie, idx) => {
      return (
        <li key={idx}>
          <Movie data={movie} inlineTitle />
        </li>
      );
    });

    return (
      <div>
        <div className="content-title">{this.state.title}</div>
        <ul>
          {subjects}
        </ul>
      </div>
    );
  }
}

export default In_theaters;

// <Link to={'/subject/' + movie.id}>{movie.title}</Link>