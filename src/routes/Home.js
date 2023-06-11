import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import AnimCursor from '../components/AnimCursor'
function Home() {
  return (
    <div>
    <AnimCursor/>
       <Navbar/>
       <HeroImg/>
       <Footer/>
           </div>
  )
}

export default Home
