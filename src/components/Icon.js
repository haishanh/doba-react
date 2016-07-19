import React from 'react';

const Icon = props => {
  let name = props.name;
  let className = 'icon ' + name;

  return (
    <svg className={className}>
      <use xlinkHref={'#' + name}></use>
    </svg>
  );
}

export default Icon;