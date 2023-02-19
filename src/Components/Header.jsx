import React from 'react'
import '../Style/Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='header'>
         <Link to={"/home"} className="logo"> <h1>Anubhav</h1></Link>
        <div className='header-a'>
         <Link to={"/projects"} className="projects">Projects</Link>
      <a href='resume_anubhav.pdf' download='resume_anubhav.pdf' className='resume'><button class="button" > Resume</button></a>
        </div>
        
    </div>
    <hr/>
   </>
  )
}

export default Header