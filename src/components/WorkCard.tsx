import * as React from 'react';

import ReactIcon from '../../static/techno/React.svg';
import DjangoIcon from '../../static/techno/Django.svg';
import MySQLIcon from '../../static/techno/MySQL.png';
import AWSIcon from '../../static/techno/AWS.svg';


export const Techno: { [key: string]: string } = {
  React: ReactIcon,
  Django: DjangoIcon,
  MySQL: MySQLIcon,
  AWS: AWSIcon,
};

const WorkCard = ({
  title,
  description,
  screenshotUrl,
  technoList,
}: Project) => (
  <div className="work-card">
    <img
      className="project-screenshot"
      src={screenshotUrl}
      alt={`${title} illustration`}
    />
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <div className="techno-container">
      {technoList.map(technoItem => (
        <img src={Techno[technoItem]} alt={`${technoItem} logo`} />
      ))}
    </div>
  </div>
);

export default WorkCard;
