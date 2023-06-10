import './WorkCardstyle.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt="img"/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
    <ul className='pro-text12'>
    <li>{props.text1}</li>
      <li>{props.text2}</li>
    </ul>
      
      <div className='pro-btns'>
        <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to={props.source} className="btn">Source</NavLink>
      </div>
    </div>
</div>
  )
}

export default WorkCard
