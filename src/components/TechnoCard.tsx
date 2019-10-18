import * as React from 'react';

import { Techno } from './WorkCard';

const TechnoCard = ({
  categoryName,
  technoList,
}: {
  categoryName: string;
  technoList: string[];
}) => (
  <div className="stack-card">
    <h3 className="stack-title">{categoryName}</h3>
    <div className={`${categoryName}-container techno-container`}>
      {technoList.map((technoItem, index) => (
        <div className="techno-logo-wrapper" key={`techno${index}`}>
          <img src={Techno[technoItem]} alt={`${technoItem} logo`} />
        </div>
      ))}
    </div>
  </div>
);

export default TechnoCard;
