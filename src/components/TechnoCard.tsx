import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { Techno } from './WorkCard';

const TechnoCard = ({
  categoryName,
  technoList,
}: {
  categoryName: string;
  technoList: string[];
}) => (
  <div className="techno-card">
    <h3 className="techno-title">{categoryName}</h3>
    <div className={`${categoryName}-container techno-container`}>
      {technoList.map((technoItem, index) => (
        <Fade key={`techno${index}`} bottom>
          <img src={Techno[technoItem]} alt={`${technoItem} logo`} />
        </Fade>
      ))}
    </div>
  </div>
);

export default TechnoCard;
