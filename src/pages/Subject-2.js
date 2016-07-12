import React from 'react';
import request from 'reqwest';
import { Link } from 'react-router';

import Movie from '../components/movie';

class Subject extends React.Component {
  state = {
    movie: {},
    summary: ''
  }

  componentDidMount = () => {
    let baseURL = 'https://api.douban.com/v2/movie/subject/';

    request({
      url: baseURL + this.props.params.id,
      type: 'jsonp'
    })
    .then(res => {
      console.dir(res);
      this.setState({
        movie: res,
        summary: res.summary
      });
    })
    .fail((err, msg) => {
      console.log(err, msg);
    });

  }

  render = () => {
    console.log('this.state.movie');
    console.log(this.state.movie);
    return (
      <div>
        <Movie data={this.state.movie} />
        <section className="subject-content">
          <p>{this.state.summary}</p>
        </section>
      </div>
    );
  }
}

export default Subject;

//