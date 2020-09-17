import React, { useState } from 'react'

import TechnoCard from './TechnoCard'
import ThemeToggle from './ThemeToggle'

const devStack: { [key: string]: string[] } = {
  back: ['Node', 'Django', 'MongoDB', 'Postgres'],
  front: ['React', 'Redux', 'Typescript', 'Sass'],
  tools: ['Webpack', 'Jest', 'Gulp', 'Docker'],
}

const StackSection: React.FC = () => (
  <div className="stack-section generic-section" id="stack">
    <h2 className="section-title">
      <a href="#stack">Tech Stack</a>
    </h2>
    <div className="stack-wrapper">
      <TechnoCard categoryName="front" technoList={devStack.front} />
      <TechnoCard categoryName="back" technoList={devStack.back} />
      <TechnoCard categoryName="tools" technoList={devStack.tools} />
    </div>
    <ThemeToggle />
  </div>
)

export default StackSection
