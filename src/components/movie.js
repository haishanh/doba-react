import React from 'react';
import { Link } from 'react-router';

const renderCelebrityName = (celebs) => {
  let res = celebs.map((celeb, idx) => {
    return (
      <span key={idx}>
        {idx === 0 ? '' : ' / '}
        <Link to={'celebrity/' + celeb.id}>{celeb.name}</Link>
      </span>
    );
  });

  return res;
}

const Movie = (props) => {
  let m = props.data;
  let countries = m.countries
    ? ' / ' + m.countries.join(',')
    : '';
  let info = m.year + countries + ' / ' + m.genres.join(',');
  let backgroundImage = 'url(' + m.images.large +')';
  let directors = renderCelebrityName(m.directors);
  let casts = renderCelebrityName(m.casts);

  return (
    <section className="subject-hero">
      <div className="subject-hero-container">
        <img src={m.images.large} />
        <div className="subject-hero-info">
          <div className="rating">
            <span>{m.rating.average}</span>/10
          </div>
          <div>{info}</div>
          <div>导演： {directors}</div>
          <div>主演： {casts}</div>
        </div>
      </div>
      <div className="subject-hero-bg" style={{backgroundImage}}></div>
    </section>
  );
}

export default Movie;