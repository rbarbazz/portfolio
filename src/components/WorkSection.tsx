import * as React from 'react';

import WorkCard from './WorkCard';
import Insidr from '../../static/project/Insidr.jpg';

const projectList: Project[] = [
  {
    title: 'Insidr Guide Library',
    description: 'React app interacting with a Django API',
    screenshotUrl: Insidr,
    technoList: ['React', 'Django', 'MySQL', 'AWS'],
  },
];

const WorkSection = () => (
  <div className="work-section" id="work">
    {projectList.map((projectItem, index) => {
      const { title, description, screenshotUrl, technoList } = projectItem;

      return (
        <WorkCard
          key={`project-${index}`}
          title={title}
          description={description}
          screenshotUrl={screenshotUrl}
          technoList={technoList}
        />
      );
    })}
  </div>
);

export default WorkSection;
