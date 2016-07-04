import React from 'react';
import request from 'reqwest'

class Subject extends React.Component {
  state = {
    poster: '',
    title: '',
    original_title: '',
    rating: {},
    summary: '',
    year: '',
    countries: [],
    genres: [],
    directors: [],
    casts: []
  }

  componentWillMount = () => {
    let baseURL = 'https://api.douban.com/v2/movie/subject/';

    request({
      url: baseURL + this.props.params.id,
      type: 'jsonp'
    })
    .then(res => {
      console.dir(res);
      this.setState({
        poster: res.images.large,
        title: res.title,
        original_title: res.original_title,
        rating: res.rating,
        summary: res.summary,
        year: res.year,
        countries: res.countries,
        genres: res.genres,
        directors: res.directors,
        casts: res.casts
      });
    })
    .fail((err, msg) => {
      console.log(err, msg);
    });

  }

  renderCelebrityName = (celebs) => {
    let n = "xd";
    let res = celebs.map((celeb, idx) => {
      return (
        <span key={idx}>
          {idx === 0 ? '' : ' / '}
          <a href={celeb.alt}>{celeb.name}</a>
        </span>
      );
    });

    return res;
  }

  render = () => {
    let info = this.state.year + ' / ' +  this.state.countries.join(',') + ' / ' + this.state.genres.join(',');
    let backgroundImage = 'url(' + this.state.poster +')';
    let directors = this.renderCelebrityName(this.state.directors);
    let casts = this.renderCelebrityName(this.state.casts);

    return (
      <div>
        <section className="subject-title">
          <h2>{this.state.title}</h2>
          <h3>{this.state.original_title}</h3>
        </section>
        <section className="subject-hero">
          <div className="subject-hero-container">
            <img src={this.state.poster} />
            <div className="subject-hero-info">
              <div>{info}</div>
              <div className="rating">{this.state.rating.average}/10</div>
              <div>导演： {directors}</div>
              <div>卡司： {casts}</div>
            </div>
          </div>
          <div className="subject-hero-bg" style={{backgroundImage}}></div>
        </section>
        <section className="subject-content">
          <p>{this.state.summary}</p>
        </section>
      </div>
    );
  }
}

export default Subject;