import * as React from 'react';
import ArrowIcon from '../../static/keyboard_arrow_down-24px.svg';
import AuthorPhoto from '../../static/RB.jpg';
import GithubIcon from '../../static/social/Github.svg';
import LinkedinIcon from '../../static/social/Linkedin.svg';
import EmailIcon from '../../static/social/Email.svg';
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
            <img src={GithubIcon} alt="Github" />
          </a>
          <a target="_blank" href={socialLinks.linkedin}>
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
          <a target="_blank" href={socialLinks.email}>
            <img src={EmailIcon} alt="Email" />
          </a>
        </div>
      </div>
      <a href="#work">
        <img className="arrow-icon" src={ArrowIcon} />
      </a>
    </div>
  );
};

export default HomeSection;
