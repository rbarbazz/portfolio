import * as React from 'react';

const Header = () => {
  const [isMenuDark, toggleIsMenuDark] = React.useState(false);
  const [isAtWork, toggleIsAtWork] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      toggleIsMenuDark(false);
      toggleIsAtWork(false);
      if (document.documentElement.clientHeight * 0.02 < window.pageYOffset)
        toggleIsMenuDark(true);
      if (document.documentElement.clientHeight * 0.95 < window.pageYOffset)
        toggleIsAtWork(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isMenuDark ? 'dark-background' : ''}`} id="header">
      <nav className="site-navigation">
        <a className="nav-item" href="#home">
          rbarbazz
          {!isAtWork && <div className="active-item-border" />}
        </a>
        <a className="nav-item" href="#work">
          Work
          {isAtWork && <div className="active-item-border" />}
        </a>
      </nav>
    </header>
  );
};

export default Header;
