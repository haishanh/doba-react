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
    genres: []
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
        genres: res.genres
      });
    })
    .fail((err, msg) => {
      console.log(err, msg);
    });

  }

  render = () => {
    let info = this.state.year + ' / ' +  this.state.countries.join(',') + ' / ' + this.state.genres.join(',');

    return (
      <div>
        <h2>{this.state.title}</h2>
        <h2>{this.state.original_title}</h2>
        <div className="rating">{this.state.rating.average}/10</div>
        <div>{info}</div>
        <img src={this.state.poster} />
        <p>{this.state.summary}</p>
      </div>
    );
  }
}

export default Subject;