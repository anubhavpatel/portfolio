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
      <a href="https://www.shutterstock.com/image-vector/sick-monkey-on-white-background-260nw-1498712183.jpg" target="blank"> <button class="button" >Contact</button></a>
        </div>
        
    </div>
    <hr/>
   </>
  )
}

export default Header