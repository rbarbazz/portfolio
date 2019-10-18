import * as React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

import ArrowIcon from './ArrowIcon';
import AuthorPhoto from '../../static/RB.jpg';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import EmailIcon from './EmailIcon';
import { useSiteMetadata } from './SEO';

const HomeSection = () => {
  const { title, description, socialLinks } = useSiteMetadata();

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
        <p className="presentation-description">{description}</p>
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
