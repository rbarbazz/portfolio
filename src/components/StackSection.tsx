import * as React from 'react';

import TechnoCard from './TechnoCard';

const devStack: { [key: string]: string[] } = {
  front: ['React', 'Typescript', 'Redux', 'Sass'],
  back: ['Node', 'Django', 'MySQL'],
  tools: ['Webpack', 'Gulp', 'Mocha'],
};

const StackSection = () => (
  <div className="stack-section" id="stack">
    <h2 className="section-title">Development Stack</h2>
    <div className="stack-wrapper">
      <TechnoCard categoryName="front" technoList={devStack.front} />
      <TechnoCard categoryName="back" technoList={devStack.back} />
      <TechnoCard categoryName="tools" technoList={devStack.tools} />
    </div>
  </div>
);

export default StackSection;
