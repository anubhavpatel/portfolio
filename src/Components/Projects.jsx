import React from 'react'
import "../Style/Projects.scss"
import bl1 from "../assests/bl1.PNG"
import bl2 from "../assests/bl2.PNG"
import bl3 from "../assests/bl3.PNG"
import bl4 from "../assests/bl4.PNG"
import {BsArrowRight} from "react-icons/bs"
const Projects = () => {
  return (
    // <div className='project'>
    //   <div className='p'><h1>Projects</h1></div>
    //   <div className='pro-view'>
    //   <div className='p1'>a</div>
    //   <div className='p2'>b</div>
    //   <div className='p3'>c</div>
    //   <div className='p4'>d</div>
    //   </div>
    // </div>
    <div className='project'>
        <div className="p1">
          <a className='heading' href="https://github.com/anubhavpatel/bruteforces69" target='blank'><p><u>Bruteforce69</u></p></a>
          <p>Cricket fantasy website</p>
          <p>This tutorial is an explanation of my gist Python Websockets SSL with Let’s Encrypt . With the launch of HTML5 in 2008, a technology that…</p>
       <a href='https://bruteforces69.vercel.app/' target="blank" className='poster'>  <img src={bl1}  alt="poster"></img></a>
        <a href="https://github.com/anubhavpatel/bruteforces69" target='blank' className='more-btn'> <button>More<BsArrowRight/></button></a>
       </div>
        <div className="p2">
        <a className='heading' href="https://github.com/anubhavpatel/crypto_world" target='blank'><p><u>Cryptoworld</u></p></a>
          <p>Crypto trading website</p>
          <p>This tutorial is an explanation of my gist Python Websockets SSL with Let’s Encrypt . With the launch of HTML5 in 2008, a technology that…</p>
        <a href="https://cryptoworld-nine.vercel.app/" target='blank' className='poster'> <img src={bl2}  alt="poster"></img> </a>
        <a href="https://github.com/anubhavpatel/crypto_world" target='blank' className='more-btn'> <button>More<BsArrowRight/></button></a>
        </div>
        <div className="p3">
       <a href="https://github.com/anubhavpatel/earthly.ie-assignment" target='blank' className='heading'> <p><u>Erthly</u></p></a>
          
          <p>This tutorial is an explanation of my gist Python Websockets SSL with Let’s Encrypt . With the launch of HTML5 in 2008, a technology that…</p>
         <a href='https://earthly-assignment.vercel.app/' target="blank" className='poster'><img src={bl3}  alt="poster"></img></a>
       <a href="https://github.com/anubhavpatel/earthly.ie-assignment" target='blank' className='more-btn'>  <button>More<BsArrowRight/></button> </a>
        </div>
        <div className="p4">
        <a  href='https://github.com/anubhavpatel/stackoverflow_clone' target="blank" className='heading'><p><u>Stackoverflow-Clone</u></p></a>
         
          <p>This tutorial is an explanation of my gist Python Websockets SSL with Let’s Encrypt . With the launch of HTML5 in 2008, a technology that…</p>
        <a href='https://github.com/anubhavpatel/stackoverflow_clone' target='blank' className='poster'> <img src={bl4}  alt="poster"></img></a>
         <a href='https://github.com/anubhavpatel/stackoverflow_clone' target="blank" className='more-btn'><button>More<BsArrowRight/></button></a>
        </div>
    </div>
  )
}

export default Projects