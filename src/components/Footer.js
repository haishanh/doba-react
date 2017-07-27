import React from 'react';
import Icon from '../components/Icon';

import github from '../svg/github.svg';

const Footer = () =>
  <footer>
    <p>
      <span>Made with </span>
      <span className="red">love</span>
      <span> by Haishan</span>
    </p>
    <a href="https://github.com/haishanh/moba-react">
      <Icon name={github.id} />
    </a>
  </footer>;

export default Footer;
