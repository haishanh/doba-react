import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from './Icon';

const renderCelebrityName = celebs => {
  let res = celebs.map((celeb, idx) => {
    return (
      <span key={idx}>
        {idx === 0 ? '' : ' / '}
        <Link to={'celebrity/' + celeb.id}>{celeb.name}</Link>
      </span>
    );
  });

  return res;
};

const Movie = ({ data, inlineTitle, appBackground }) => {
  let m = data;
  if (!m.title) {
    return null;
  }
  let countries = m.countries ? ' / ' + m.countries.join(',') : '';
  let info = m.year + countries + ' / ' + m.genres.join(',');
  let backgroundImage = 'url(' + m.images.large + ')';
  let directors = renderCelebrityName(m.directors);
  let casts = renderCelebrityName(m.casts);
  let ratingsCount = m.ratings_count ? <div>{m.ratings_count}人评价</div> : null;

  let title = m.title === m.original_title
    ? <div className="subject-title">
        <div className="title-1">{m.title}</div>
      </div>
    : <div className="subject-title">
        <div className="title-1">{m.title}</div>
        <div className="title-2">{m.original_title}</div>
      </div>;
  let subjectTitle = null;
  let subjectTitleInline = null;
  inlineTitle ? (subjectTitleInline = title) : (subjectTitle = title);

  let heroClassName = inlineTitle ? 'subject-hero' : 'subject-hero small';

  let bgClassName = appBackground ? 'app-bg' : 'subject-hero-bg';

  return (
    <section className="subject-header">
      {subjectTitle}
      <section className={heroClassName}>
        <div className="subject-hero-container">
          <Link to={'subject/' + m.id}>
            <img src={m.images.large} />
          </Link>
          <div className="subject-hero-info">
            {subjectTitleInline}
            <div className="rating">
              <Icon name="star" />
              <span className="average">{m.rating.average}</span>
              <span className="max">/10</span>
            </div>
            {ratingsCount}
            <div>{info}</div>
            <div>导演： {directors}</div>
            <div>主演： {casts}</div>
            <a href={m.alt}>
              <div className="douban-link"><Icon name="douban" /></div>
            </a>
          </div>
        </div>
        <div className={bgClassName} style={{ backgroundImage }} />
      </section>
    </section>
  );
};

Movie.propTypes = {
  data: PropTypes.object,
  inlineTitle: PropTypes.bool,
  appBackground: PropTypes.bool
};

export default Movie;
