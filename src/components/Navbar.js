import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {
  FaBars, FaTimes
} from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
const [click, setClick] = useState(false)
const handleClick = ()=>setClick(!click)

const [color, setColor] = useState(false)
function changeColor(){
  if(window.scrollY>=100){
    setColor(true)
  }else{
    setColor(false)
  }
}
window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to='/'>
        <h1>DL</h1>
      </Link>
      <ul className={click ? "nav-menu active" :"nav-menu"}>
      <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/contactUs">Contact</Link>
        </li>
        
      </ul>
      <divc className="hamburger" onClick={handleClick}>
      {click ?<FaTimes size={20} style={{color:"#fff"}}/> :<FaBars size={20} style={{color:"#fff"}}/> }
         
      </divc>
    </div>
  )
}

export default Navbar
