import React from 'react'

import technoIcons from '../content/technoIcons'

const TechnoCard: React.FC<{ categoryName: string; technoList: string[] }> = ({
  categoryName,
  technoList,
}: {
  categoryName: string
  technoList: string[]
}) => (
  <div className="stack-card">
    <h3 className="stack-title">{categoryName}</h3>
    <div className={`${categoryName}-container techno-container`}>
      {technoList.map((technoItem, index) => (
        <div className="techno-logo-wrapper" key={`techno${index}`}>
          <img src={technoIcons[technoItem]} alt={`${technoItem} logo`} />
        </div>
      ))}
    </div>
  </div>
)

export default TechnoCard
