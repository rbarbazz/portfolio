import * as React from 'react';

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
          <a target="_blank" href={socialLinks.github}>
            <GithubIcon />
          </a>
          <a target="_blank" href={socialLinks.linkedin}>
            <LinkedinIcon />
          </a>
          <a target="_blank" href={socialLinks.email}>
            <EmailIcon />
          </a>
        </div>
      </div>
      <a className="arrow-icon" href="#stack">
        <ArrowIcon />
      </a>
    </div>
  );
};

export default HomeSection;
