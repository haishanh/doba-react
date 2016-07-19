import React, { PropTypes } from 'react';

import Movie from './Movie';

const MovieList = ({subjects, ...other}) => {

  let lists = subjects.map((movie, idx) => {
    return (
      <li key={idx}>
        <Movie data={movie} {...other} />
      </li>
    );
  });

  return (
    <ul>
      {lists}
    </ul>
  );
}

MovieList.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;