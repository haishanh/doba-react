import React, { PropTypes } from 'react';

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
