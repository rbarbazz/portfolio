import * as React from 'react';

import WorkCard from './WorkCard';
import AlexisAssoignon from '../../static/project/AlexisAssoignon.jpg';
import Corewar from '../../static/project/Corewar.png';
import EVA from '../../static/project/EVA.jpg';
import Insidr from '../../static/project/Insidr.jpg';
import RedTetris from '../../static/project/RedTetris.png';

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
    technoList: ['React', 'Redux', 'Node', 'SocketIO'],
    projectUrl: 'https://redtetris-42.herokuapp.com/',
  },
  {
    title: 'Alexis Assoignon',
    description: 'Personal blog about financial independance',
    screenshotUrl: AlexisAssoignon,
    technoList: ['Wordpress', 'HTML', 'CSS', 'Gulp'],
    projectUrl: 'https://alexisassoignon.com/',
  },
  {
    title: "Enfants Venus d'Ailleurs",
    description: 'Wordpress-based website created for a French charity',
    screenshotUrl: EVA,
    technoList: ['Wordpress', 'HTML', 'CSS'],
    projectUrl: 'https://enfantsvenusdailleurs.org/',
  },
  {
    title: 'Corewar',
    description: '42 algorithm project, a virtual arena where processes fight',
    screenshotUrl: Corewar,
    technoList: ['C', 'GTK'],
    projectUrl: 'https://github.com/rbarbazz/corewar',
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
