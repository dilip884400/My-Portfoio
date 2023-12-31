import './HeroImgStyle.css'
import React from 'react'
import IntroImg from '../assets/devloper-img-3.jpg'
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
      <img className='into-img' src={IntroImg} alt="intro"/>
      </div>
      <div className='content1'>
    <p>Hi, I am Dilip Lovevanshi </p>
    <h1>React Developer</h1>
    <div>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/about" className='btn btn-light'>About</Link>
    </div>
      </div>
    </div>
  )
}

export default HeroImg
