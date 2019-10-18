import * as React from 'react';

import TechnoCard from './TechnoCard';

const technoList: { [key: string]: string[] } = {
  front: ['React', 'Redux', 'Typescript', 'Sass'],
  back: ['Node', 'Django', 'MySQL'],
  other: [],
};

const TechnoSection = () => (
  <div className="techno-section" id="techno">
    <h2 className="section-title">Development Stack</h2>
    <div className="techno-wrapper">
      <TechnoCard categoryName="front" technoList={technoList.front} />
      <TechnoCard categoryName="back" technoList={technoList.back} />
    </div>
  </div>
);

export default TechnoSection;
