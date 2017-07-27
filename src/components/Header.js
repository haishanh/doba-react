import React from 'react';
import Icon from '../components/Icon';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

import doba from '../svg/doba.svg';

const Header = () =>
  <div className="header">
    <Link to="/">
      <Icon name={doba.id} />
    </Link>
    <div className="search-wrapper">
      <Search />
    </div>
  </div>;

export default Header;
