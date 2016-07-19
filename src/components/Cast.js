import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/*
alt: "https://movie.douban.com/celebrity/01234",
avatars: {
  large: xx,
  medium: yy,
  small: zz
}
id: '01234',
name: 'Jon Snow'
 */

const Cast = ({ avatars, name, id }) => {
  return (
    <div className="wrap">
      <Link to={'celebrity/' + id}>
        <img src={avatars.medium} />
        <div>{name}</div>
      </Link>
    </div>
  );
}

Cast.propTypes = {
  avatars: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string
};

export default Cast;

