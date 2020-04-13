import { OutboundLink } from 'gatsby-plugin-gtag';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import React from 'react';

import { useSiteMetadata } from './SEO';
import ArrowIcon from './ArrowIcon';
import EmailIcon from './EmailIcon';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import useHomeBGQuery from '../content/useHomeBGQuery';
import useProfilePicQuery from '../content/useProfilePicQuery';

const HomeSection: React.FC = () => {
  const { title, socialLinks } = useSiteMetadata();
  const emeraldLakeData = useHomeBGQuery();
  const profilePicData = useProfilePicQuery();

  return (
    <BackgroundImage
      className="home-section"
      id="home"
      fluid={emeraldLakeData.file.childImageSharp.fluid}
    >
      <div className="presentation-container">
        <Img
          className="presentation-photo"
          fluid={profilePicData.file.childImageSharp.fluid}
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
    </BackgroundImage>
  );
};

export default HomeSection;
