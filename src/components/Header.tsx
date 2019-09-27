import * as React from 'react';
import { Link } from 'gatsby';


const Header: React.FunctionComponent = () => (
  <header id="header">
    <nav className="site-navigation">
      <Link
        className="nav-item"
        to="/"
      >
        RB
      </Link>
      <Link
        to="/work/"
      >
        Work
      </Link>
    </nav>
  </header>
);

export default Header;
