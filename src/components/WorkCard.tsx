import * as React from 'react';

import AWSIcon from '../../static/techno/AWS.svg';
import CSSIcon from '../../static/techno/CSS.svg';
import DjangoIcon from '../../static/techno/Django.svg';
import HTMLIcon from '../../static/techno/HTML.svg';
import MySQLIcon from '../../static/techno/MySQL.svg';
import NodeIcon from '../../static/techno/Node.svg';
import ReactIcon from '../../static/techno/React.svg';
import ReduxIcon from '../../static/techno/Redux.svg';
import WordpressIcon from '../../static/techno/Wordpress.svg';

export const Techno: { [key: string]: string } = {
  AWS: AWSIcon,
  CSS: CSSIcon,
  Django: DjangoIcon,
  HTML: HTMLIcon,
  MySQL: MySQLIcon,
  Node: NodeIcon,
  React: ReactIcon,
  Redux: ReduxIcon,
  Wordpress: WordpressIcon,
};

const WorkCard = ({
  title,
  description,
  screenshotUrl,
  technoList,
  projectUrl,
}: Project) => (
  <div className="work-card">
    <a href={projectUrl} target="_blank">
      <img
        className="project-screenshot"
        src={screenshotUrl}
        alt={`${title} illustration`}
      />
    </a>
    <h3 className="project-title">
      <a href={projectUrl} target="_blank">
        {title}
      </a>
    </h3>
    <p className="project-description">{description}</p>
    <div className="techno-container">
      {technoList.map(technoItem => (
        <img src={Techno[technoItem]} alt={`${technoItem} logo`} />
      ))}
    </div>
  </div>
);

export default WorkCard;
