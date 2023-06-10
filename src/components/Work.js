import './WorkCardstyle.css'
import ProjectCardData from './WorkCardData' 
import React from 'react'
import WorkCard from './WorkCard'


function Work() {
  return (
    <div className='work-container'>
      <div className='project-container'>
      {ProjectCardData.map((val, index)=>{
        return(
            <WorkCard key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text1={val.text1}
                text2={val.text2}
                view={val.view}
                source={val.source}
            />
        )
      })}
      </div>
    </div>
  )
}

export default Work
