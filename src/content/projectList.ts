import { Project } from '../../work';

const projectList: Project[] = [
  {
    title: 'Insidr Guide Library',
    description: 'React app interacting with a Django API',
    fileName: 'Insidr',
    technoList: ['React', 'Django', 'MySQL', 'AWS'],
    projectUrl: 'https://insidr.co/free-guide-form/',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Budget planner and expense tracker',
    fileName: 'PersonalFinanceTracker',
    technoList: ['React', 'Node', 'Postgres', 'Docker'],
    projectUrl: 'https://finance.rbarbazz.com/',
  },
  {
    title: 'Red Tetris',
    description: 'Tetris game written in Full Stack Javascript',
    fileName: 'RedTetris',
    technoList: ['React', 'Redux', 'Node', 'SocketIO'],
    projectUrl: 'https://redtetris-42.herokuapp.com/',
  },
  {
    title: 'Alexis Assoignon',
    description: 'Personal blog about financial independance',
    fileName: 'AlexisAssoignon',
    technoList: ['Wordpress', 'JQuery', 'HTML', 'CSS'],
    projectUrl: 'https://alexisassoignon.com/',
  },
  {
    title: 'Game Release Bot',
    description: 'Discord bot - Game release reminder',
    fileName: 'GameReleaseBot',
    technoList: ['Node', 'MongoDB', 'Typescript', 'AWS'],
    projectUrl: 'https://github.com/rbarbazz/game-release-bot',
  },
  {
    title: "Enfants Venus d'Ailleurs",
    description: 'Wordpress-based website created for a French charity',
    fileName: 'EVA',
    technoList: ['Wordpress', 'Gulp', 'HTML', 'CSS'],
    projectUrl: 'https://enfantsvenusdailleurs.org/',
  },
  {
    title: 'Corewar',
    description: 'Virtual arena where concurrent processes fight',
    fileName: 'Corewar',
    technoList: ['C', 'GTK'],
    projectUrl: 'https://github.com/rbarbazz/corewar',
  },
];

export default projectList;
