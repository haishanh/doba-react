import React from 'react';
import request from 'reqwest';
import { Link } from 'react-router';

import Movie from '../components/movie';
import Cast from '../components/cast';

class Subject extends React.Component {
  state = {
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

    if (!this.state.movie) return null;

    let casts = this.state.movie.casts.map(cast => {
      return <Cast {...cast} />;
    });

    return (
      <div>
        <Movie data={this.state.movie} appBackground />
        <section className="subject-casts">
          <div className="casts-title">主演</div>
          <div className="subject-casts-flex">
            {casts}
          </div>
        </section>
        <section className="subject-content">
          <p>{this.state.summary}</p>
        </section>
      </div>
    );
  }
}

export default Subject;

//