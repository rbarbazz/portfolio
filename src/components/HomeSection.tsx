import { convertToBgImage } from 'gbimage-bridge'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

import { useSiteMetadata } from './SEO'
import ArrowIcon from './ArrowIcon'
import WebsiteIcon from './WebsiteIcon'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'
import useHomeBGQuery from '../content/useHomeBGQuery'
import useProfilePicQuery from '../content/useProfilePicQuery'

const HomeSection: React.FC = () => {
  const { title, socialLinks } = useSiteMetadata()
  const { emeraldLakeImage } = useHomeBGQuery()
  const profilePicData = useProfilePicQuery()

  return (
    <BackgroundImage
      className="home-section generic-section"
      id="home"
      {...convertToBgImage(getImage(emeraldLakeImage))}
      preserveStackingContext
    >
      <div className="presentation-container">
        <GatsbyImage
          image={profilePicData.file.childImageSharp.gatsbyImageData}
          className="presentation-photo"
          alt="Raphaël Barbazza"
        />
        <h1 className="presentation-title">{title}</h1>
        <p className="presentation-description">
          Full Stack Developer, based in Vancouver, BC
        </p>
        <div className="socials-container">
          <a target="_blank" href={socialLinks.github}>
            <GithubIcon />
          </a>
          <a target="_blank" href={socialLinks.linkedin}>
            <LinkedinIcon />
          </a>
          <a target="_blank" href={socialLinks.website}>
            <WebsiteIcon />
          </a>
        </div>
      </div>
      <a className="arrow-icon" href="#work">
        <ArrowIcon />
      </a>
    </BackgroundImage>
  )
}

export default HomeSection
