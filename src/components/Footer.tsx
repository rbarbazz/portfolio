import * as React from 'react';

import ArrowIcon from './ArrowIcon';

const Footer = () => (
  <footer id="footer">
    <a className="arrow-icon" href="#home">
      <ArrowIcon />
    </a>
    {`© ${new Date().getFullYear()} Raphaël Barbazza`}
  </footer>
);

export default Footer;
