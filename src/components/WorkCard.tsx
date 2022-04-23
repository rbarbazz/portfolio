import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react'

import { IllustratedProject } from '../../work'

const WorkCard: React.FC<IllustratedProject> = ({
  title,
  description,
  fluid,
  projectUrl,
}: IllustratedProject) => (
  <div className="work-card">
    <a href={projectUrl} target="_blank">
      <GatsbyImage
        image={fluid}
        className="project-screenshot"
        alt={`${title} illustration`} />
    </a>
    <h3 className="project-title">
      <a href={projectUrl} target="_blank">
        {title}
      </a>
    </h3>
    <p className="project-description">{description}</p>
  </div>
)

export default WorkCard
