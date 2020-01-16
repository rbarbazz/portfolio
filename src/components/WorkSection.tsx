import React from 'react';

import AlexisAssoignon from '../../static/project/AlexisAssoignon.jpg';
import Corewar from '../../static/project/Corewar.png';
import EVA from '../../static/project/EVA.jpg';
import GameReleaseBot from '../../static/project/GameReleaseBot.png';
import Insidr from '../../static/project/Insidr.jpg';
import PersonalFinanceTracker from '../../static/project/PersonalFinanceTracker.jpg';
import RedTetris from '../../static/project/RedTetris.png';
import WorkCard from './WorkCard';

const projectList: Project[] = [
  {
    title: 'Insidr Guide Library',
    description: 'React app interacting with a Django API',
    screenshotUrl: Insidr,
    technoList: ['React', 'Django', 'MySQL', 'AWS'],
    projectUrl: 'https://insidr.co/free-guide-form/',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Budget planner and expense tracker',
    screenshotUrl: PersonalFinanceTracker,
    technoList: ['React', 'Node', 'Postgres', 'Docker'],
    projectUrl: 'https://finance.rbarbazz.com/',
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
    technoList: ['Wordpress', 'JQuery', 'HTML', 'CSS'],
    projectUrl: 'https://alexisassoignon.com/',
  },
  {
    title: 'Game Release Bot',
    description: 'Discord bot - Game release reminder',
    screenshotUrl: GameReleaseBot,
    technoList: ['Node', 'MongoDB', 'Typescript', 'AWS'],
    projectUrl: 'https://github.com/rbarbazz/game-release-bot',
  },
  {
    title: "Enfants Venus d'Ailleurs",
    description: 'Wordpress-based website created for a French charity',
    screenshotUrl: EVA,
    technoList: ['Wordpress', 'Gulp', 'HTML', 'CSS'],
    projectUrl: 'https://enfantsvenusdailleurs.org/',
  },
  {
    title: 'Corewar',
    description: 'Virtual arena where concurrent processes fight',
    screenshotUrl: Corewar,
    technoList: ['C', 'GTK'],
    projectUrl: 'https://github.com/rbarbazz/corewar',
  },
];

const WorkSection: React.FC = () => (
  <div className="work-section" id="work">
    <h2 className="section-title">
      <a href="#work">Work</a>
    </h2>
    {projectList.map((projectItem: Project, index) => {
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
