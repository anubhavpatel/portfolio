import React from 'react'
import pic from "../assests/pic.jpg"
import "../Style/Home.scss"
import Projects from './Projects'

const Home = () => {
  return (
    <>
    <div className='home'>
     <div className="pic">
        <img style={{width: "7rem" , height:"7rem", borderRadius:'50%'}} src={pic} alt='pic'></img>
     </div>
     <div className="content">
        <div className="content-a">
            <p>Hey, I'm <span>Anubhav Patel</span>.I am a Front-End Web developer.</p>
        </div>
        <div className="social">
        <a href="https://github.com/anubhavpatel" target="blank">Github</a>
        <a href="https://www.linkedin.com/in/anubhavpatel063/"  target="_blank" rel="noreferrer">Linkedin</a>
        <a  href="https://www.instagram.com/anubhav._patel/" target="blank">Instagram</a>
        <a href="https://www.facebook.com/anubhav.patel.71465" target="blank">Facebook</a>
       
        </div>
     </div>
    
    </div>
    <div className='home-hr'>
     <hr></hr>
    </div>
    <Projects/>
   </>
  
  )
}

export default Home