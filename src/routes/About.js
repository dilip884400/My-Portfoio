import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import AnimCursor from '../components/AnimCursor'

function About() {
  return (
    <div>
    <AnimCursor/>
       <Navbar/>
       <HeroImg2 heading="ABOUT." text1="An enthusiastic Front-End Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications."/>
       <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
