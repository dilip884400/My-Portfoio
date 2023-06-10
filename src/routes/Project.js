import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text1="Some of my most recent works" text2="Work speaks louder than words."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
