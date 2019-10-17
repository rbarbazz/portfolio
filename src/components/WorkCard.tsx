import * as React from 'react';
import Fade from 'react-reveal/Fade';

import AWSIcon from '../../static/techno/AWS.svg';
import CIcon from '../../static/techno/C.svg';
import CSSIcon from '../../static/techno/CSS.svg';
import DjangoIcon from '../../static/techno/Django.svg';
import GTKIcon from '../../static/techno/GTK.svg';
import GulpIcon from '../../static/techno/Gulp.svg';
import HTMLIcon from '../../static/techno/HTML.svg';
import MySQLIcon from '../../static/techno/MySQL.svg';
import NodeIcon from '../../static/techno/Node.svg';
import ReactIcon from '../../static/techno/React.svg';
import ReduxIcon from '../../static/techno/Redux.svg';
import SocketIOIcon from '../../static/techno/SocketIO.svg';
import WordpressIcon from '../../static/techno/Wordpress.svg';

export const Techno: { [key: string]: string } = {
  AWS: AWSIcon,
  C: CIcon,
  CSS: CSSIcon,
  Django: DjangoIcon,
  GTK: GTKIcon,
  Gulp: GulpIcon,
  HTML: HTMLIcon,
  MySQL: MySQLIcon,
  Node: NodeIcon,
  React: ReactIcon,
  Redux: ReduxIcon,
  SocketIO: SocketIOIcon,
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
      {technoList.map((technoItem, index) => (
        <Fade key={`${title}-techno${index}`} bottom>
          <img src={Techno[technoItem]} alt={`${technoItem} logo`} />
        </Fade>
      ))}
    </div>
  </div>
);

export default WorkCard;
