import { OutboundLink } from 'gatsby-plugin-gtag';
import Img from 'gatsby-image';
import React from 'react';

import { IllustratedProject } from '../../work';
import technoIcons from '../content/technoIcons';

const WorkCard: React.FC<IllustratedProject> = ({
  title,
  description,
  fluid,
  technoList,
  projectUrl,
}: IllustratedProject) => (
  <div className="work-card">
    <OutboundLink href={projectUrl} target="_blank">
      <Img
        className="project-screenshot"
        fluid={fluid}
        alt={`${title} illustration`}
      />
    </OutboundLink>
    <h3 className="project-title">
      <OutboundLink href={projectUrl} target="_blank">
        {title}
      </OutboundLink>
    </h3>
    <p className="project-description">{description}</p>
    <div className="project-techno-container">
      {technoList.map((technoItem, index) => (
        <div key={`${title}-techno${index}`} className="project-techno-wrapper">
          <img src={technoIcons[technoItem]} alt={`${technoItem} logo`} />
        </div>
      ))}
    </div>
  </div>
);

export default WorkCard;
