import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => {
  let className = 'icon ' + name;

  return (
    <svg className={className}>
      <use xlinkHref={'#' + name} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string
};

export default Icon;
