import * as React from 'react';
import { Link } from 'gatsby';


const Header: React.FunctionComponent = () => (
  <header id="header">
    <nav className="main-navigation">
      <Link
        className="nav-item"
        to="/"
      >
        RB
      </Link>
    </nav>
  </header>
);

export default Header;
