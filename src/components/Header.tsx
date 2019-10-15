import * as React from 'react';

const Header = () => {
  const [isAtWork, checkOffset] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      checkOffset(false);
      if (document.documentElement.clientHeight * 0.95 < window.pageYOffset)
        checkOffset(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <nav className="site-navigation">
        <a
          className={`nav-item ${isAtWork ? 'dark-font' : 'active-item'}`}
          href="#home"
        >
          rbarbazz
        </a>
        <a
          className={`nav-item ${isAtWork && 'dark-font active-item'}`}
          href="#work"
        >
          Work
        </a>
      </nav>
    </header>
  );
};

export default Header;
