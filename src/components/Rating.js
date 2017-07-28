import React from 'react';

import Icon from '../components/Icon';
import star from '../svg/star.svg';

const Rating = ({ rating, style }) => {
  return (
    <div className="rating" style={style}>
      <Icon name={star.id} />
      <span className="average">
        {rating.average}
      </span>
      <span className="max">/10</span>
    </div>
  );
};

export default Rating;
