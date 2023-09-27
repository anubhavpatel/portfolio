import React, { useState } from 'react'
import {FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa"
import {CgMenu} from "react-icons/cg"
import {Link} from "react-router-dom"
import {RxCross2} from "react-icons/rx"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

import "../Style/Navbar.css"
const Navbar = () => {
  
  const [showMenu, setShowMenu]=useState(false)
  const close=()=>{
     setShowMenu=false;
  }
  return (
    <>
   <nav className='main-nav'>
     <div className='logo'>
       <Link to={"/home"} className="logo"> <h1>Anubhav</h1></Link>
     </div>
     
     <div className={showMenu? "menu-mobile" : "menu"}>
<a href='#' className='menu-cancel' onClick={()=>setShowMenu(!showMenu)}><RxCross2/></a>
     <Link to={"/"} className="homelink" onClick={close}>Home</Link>
     <Link to={"/project"} onClick={close} className="homelink" >Projects</Link>
     <Link to={"/contact"} className="homelink" onClick={close}>Contact</Link>
     <a href='resume_anubhav.pdf' download='resume_anubhav.pdf' className='resume'><button class="button" > Resume</button></a>
   
    
      
     </div>
    
     <div className='social-link'>
        <ul className='social-links-desktop'>
        <li>
    <a href='https://github.com/anubhavpatel'  target="_blank"><AiFillGithub className='github'/></a>
            </li>
            <li>
    <a href='https://www.linkedin.com/in/anubhavpatel063/' target='_blank'><AiFillLinkedin className='linkedin'/></a>
            </li>
            <li>
    <a href='https://www.instagram.com/anubhav._patel/' target='_blank'><FaInstagram className='instagram'/></a>
            </li>
            
        </ul>
        
     </div>
     <div className='menu-icon'>
          <a href='#' className='menu-btn' onClick={()=>setShowMenu(!showMenu)}><CgMenu/></a>
          
        </div> 
   </nav>

</>
  )
}

export default Navbar
