import React from 'react';

import { Project } from '../../work';
import getImgByName from '../lib/getImgByName';
import projectList from '../content/projectList';
import useProjectsQuery from '../content/useProjectsQuery';
import WorkCard from './WorkCard';

const WorkSection: React.FC = () => {
  const projects = useProjectsQuery();

  return (
    <div className="work-section" id="work">
      <h2 className="section-title">
        <a href="#work">Work</a>
      </h2>
      {projectList.map((projectItem: Project, index) => {
        const {
          title,
          description,
          fileName,
          technoList,
          projectUrl,
        } = projectItem;

        return (
          <WorkCard
            key={`project-${index}`}
            title={title}
            description={description}
            fileName={fileName}
            fluid={getImgByName(fileName, projects)}
            technoList={technoList}
            projectUrl={projectUrl}
          />
        );
      })}
    </div>
  );
};

export default WorkSection;
