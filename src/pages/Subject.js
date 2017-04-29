import React, { Component } from 'react';
import request from 'reqwest';
import { Link } from 'react-router-dom';

import Movie from '../components/Movie';
import Cast from '../components/Cast';
import Loading from '../components/Loading';

class Subject extends Component {
  state = {
    ready: false,
    summary: ''
  };

  componentDidMount = () => {
    this.fetchSubject();
  };

  componentDidUpdate = prevProps => {
    let oldId = prevProps.match.params.id;
    let newId = this.props.match.params.id;
    if (newId !== oldId) {
      this.setState({ ready: false });
      this.fetchSubject();
    }
  };

  componentWillUnMount = () => {
    this.request.abort();
  };

  fetchSubject = () => {
    let baseURL = 'https://api.douban.com/v2/movie/subject/';

    this.request = request({
      url: baseURL + this.props.match.params.id,
      type: 'jsonp'
    })
      .then(res => {
        this.setState({
          movie: res,
          summary: res.summary,
          ready: true
        });
      })
      .fail((err, msg) => {
        console.log(err, msg);
      });
  };

  render = () => {
    if (!this.state.ready) return <Loading />;

    let casts = this.state.movie.casts.map((cast, idx) => {
      return <Cast {...cast} key={idx} />;
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
          <div className="title">剧情简介</div>
          <p>{this.state.summary}</p>
        </section>
      </div>
    );
  };
}

export default Subject;
