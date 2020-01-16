import React from 'react';

import TechnoCard from './TechnoCard';

const devStack: { [key: string]: string[] } = {
  back: ['Node', 'Django', 'MongoDB', 'Postgres'],
  front: ['React', 'Redux', 'Typescript', 'Sass'],
  tools: ['Webpack', 'Jest', 'Gulp', 'Docker'],
};

const StackSection: React.FC = () => (
  <div className="stack-section" id="stack">
    <h2 className="section-title">
      <a href="#stack">Development Stack</a>
    </h2>
    <div className="stack-wrapper">
      <TechnoCard categoryName="front" technoList={devStack.front} />
      <TechnoCard categoryName="back" technoList={devStack.back} />
      <TechnoCard categoryName="tools" technoList={devStack.tools} />
    </div>
  </div>
);

export default StackSection;
