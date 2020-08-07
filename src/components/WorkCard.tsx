import { OutboundLink } from 'gatsby-plugin-gtag';
import Img from 'gatsby-image';
import React from 'react';

import { IllustratedProject } from '../../work';

const WorkCard: React.FC<IllustratedProject> = ({
  title,
  description,
  fluid,
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
  </div>
);

export default WorkCard;
