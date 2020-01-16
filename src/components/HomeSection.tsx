import { OutboundLink } from 'gatsby-plugin-gtag';
import React from 'react';

import { useSiteMetadata } from './SEO';
import ArrowIcon from './ArrowIcon';
import AuthorPhoto from '../../static/RB.jpg';
import EmailIcon from './EmailIcon';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';

const HomeSection: React.FC = () => {
  const { title, socialLinks } = useSiteMetadata();

  return (
    <div
      className="home-section"
      id="home"
      style={{ backgroundImage: 'url(/Emerald_Lake.jpg)' }}
    >
      <div className="presentation-container">
        <img
          className="presentation-photo"
          src={AuthorPhoto}
          alt="Raphaël Barbazza"
        />
        <h1 className="presentation-title">{title}</h1>
        <p className="presentation-description">
          Full Stack Developer, based in Vancouver, BC
        </p>
        <div className="socials-container">
          <OutboundLink target="_blank" href={socialLinks.github}>
            <GithubIcon />
          </OutboundLink>
          <OutboundLink target="_blank" href={socialLinks.linkedin}>
            <LinkedinIcon />
          </OutboundLink>
          <OutboundLink target="_blank" href={socialLinks.email}>
            <EmailIcon />
          </OutboundLink>
        </div>
      </div>
      <a className="arrow-icon" href="#stack">
        <ArrowIcon />
      </a>
    </div>
  );
};

export default HomeSection;
