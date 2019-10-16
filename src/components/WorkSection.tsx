import * as React from 'react';

import WorkCard from './WorkCard';
import Insidr from '../../static/project/Insidr.jpg';
import RedTetris from '../../static/project/RedTetris.jpg';
import EVA from '../../static/project/EVA.jpg';

const projectList: Project[] = [
  {
    title: 'Insidr Guide Library',
    description: 'React app interacting with a Django API',
    screenshotUrl: Insidr,
    technoList: ['React', 'Django', 'MySQL', 'AWS'],
    projectUrl: 'https://insidr.co/free-guide-form/',
  },
  {
    title: 'Red Tetris',
    description: 'Tetris game written in Full Stack Javascript',
    screenshotUrl: RedTetris,
    technoList: ['React', 'Redux', 'Node'],
    projectUrl: 'https://redtetris-42.herokuapp.com/',
  },
  {
    title: "Enfants Venus d'Ailleurs",
    description: 'Wordpress based website realised for a french charity',
    screenshotUrl: EVA,
    technoList: ['Wordpress', 'HTML', 'CSS'],
    projectUrl: 'https://enfantsvenusdailleurs.org/',
  },
];

const WorkSection = () => (
  <div className="work-section" id="work">
    {projectList.map((projectItem, index) => {
      const {
        title,
        description,
        screenshotUrl,
        technoList,
        projectUrl,
      } = projectItem;

      return (
        <WorkCard
          key={`project-${index}`}
          title={title}
          description={description}
          screenshotUrl={screenshotUrl}
          technoList={technoList}
          projectUrl={projectUrl}
        />
      );
    })}
  </div>
);

export default WorkSection;
