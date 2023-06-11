import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import AnimCursor from '../components/AnimCursor'

export default function ContactUs() {
  return (
    <div>
    <AnimCursor/>
   <Navbar/>
   <HeroImg2 heading="CONTACT." text1="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}
