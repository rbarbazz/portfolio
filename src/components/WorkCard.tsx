import * as React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

import AWSIcon from '../../static/techno/AWS.svg';
import CIcon from '../../static/techno/C.svg';
import CSSIcon from '../../static/techno/CSS.svg';
import DjangoIcon from '../../static/techno/Django.svg';
import GTKIcon from '../../static/techno/GTK.svg';
import GulpIcon from '../../static/techno/Gulp.svg';
import HTMLIcon from '../../static/techno/HTML.svg';
import JQueryIcon from '../../static/techno/JQuery.svg';
import MochaIcon from '../../static/techno/Mocha.svg';
import MySQLIcon from '../../static/techno/MySQL.svg';
import NodeIcon from '../../static/techno/Node.svg';
import ReactIcon from '../../static/techno/React.svg';
import ReduxIcon from '../../static/techno/Redux.svg';
import SassIcon from '../../static/techno/Sass.svg';
import SocketIOIcon from '../../static/techno/SocketIO.svg';
import TypescriptIcon from '../../static/techno/Typescript.svg';
import WebpackIcon from '../../static/techno/Webpack.svg';
import WordpressIcon from '../../static/techno/Wordpress.svg';

export const Techno: { [key: string]: string } = {
  AWS: AWSIcon,
  C: CIcon,
  CSS: CSSIcon,
  Django: DjangoIcon,
  GTK: GTKIcon,
  Gulp: GulpIcon,
  HTML: HTMLIcon,
  JQuery: JQueryIcon,
  Mocha: MochaIcon,
  MySQL: MySQLIcon,
  Node: NodeIcon,
  React: ReactIcon,
  Redux: ReduxIcon,
  Sass: SassIcon,
  SocketIO: SocketIOIcon,
  Typescript: TypescriptIcon,
  Webpack: WebpackIcon,
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
    <OutboundLink href={projectUrl} target="_blank">
      <img
        className="project-screenshot"
        src={screenshotUrl}
        alt={`${title} illustration`}
      />
    </OutboundLink>
    <h3 className="project-title">
      <OutboundLink href={projectUrl} target="_blank">
        {title}
      </OutboundLink>
    </h3>
    <p className="project-description">{description}</p>
    <div className="project-techno-container">
      {technoList.map((technoItem, index) => (
        <div key={`${title}-techno${index}`} className="project-techno-wrapper">
          <img src={Techno[technoItem]} alt={`${technoItem} logo`} />
        </div>
      ))}
    </div>
  </div>
);

export default WorkCard;
