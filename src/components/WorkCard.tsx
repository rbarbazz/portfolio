import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { IllustratedProject } from '../../work'

const WorkCard: React.FC<IllustratedProject> = ({
  title,
  description,
  fluid,
  projectUrl,
}: IllustratedProject) => {
  const projectImageComponent = (
    <GatsbyImage
      image={fluid}
      className="project-screenshot"
      alt={`${title} illustration`}
    />
  )

  return (
    <div className="work-card">
      {!!projectUrl ? (
        <a href={projectUrl} target="_blank">
          {projectImageComponent}
        </a>
      ) : (
        projectImageComponent
      )}
      <h3 className="project-title">
        {!!projectUrl ? (
          <a href={projectUrl} target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="project-description">{description}</p>
    </div>
  )
}

export default WorkCard
