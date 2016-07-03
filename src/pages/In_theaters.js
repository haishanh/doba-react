import React from 'react';
import request from 'reqwest'
import { Link } from 'react-router';

class In_theaters extends React.Component {
  state = {
    title: '',
    subjects: []
  }

  componentWillMount = () => {
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
    const subjects = this.state.subjects.map((movie, idx) => {
      return (
        <li key={idx}>
          <Link to={'/subject/' + movie.id}>{movie.title}</Link>
        </li>
      );
    });

    return (
      <div>
        <h2>{this.state.title}</h2>
        <ul>
          {subjects}
        </ul>
      </div>
    );
  }
}

export default In_theaters;