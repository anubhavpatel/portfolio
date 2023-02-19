import React from 'react'
import "../Style/Projects.scss"
import bl1 from "../assests/bl1.PNG"
import bl2 from "../assests/bl2.PNG"
import bl3 from "../assests/bl3.PNG"
import bl4 from "../assests/bl4.PNG"
import {BsArrowRight} from "react-icons/bs"
const Projects = () => {
  return (
    
    <div className='project'>
        <div className="p1">
          <a className='heading' href="https://github.com/anubhavpatel/bruteforces69" target='blank'><p><u>Bruteforce69</u></p></a>
          {/* <p className='sub-h'>Cricket fantasy website</p> */}
          <p> A responsive React JS cricket website which display live score of
all type of matches and provides stats of all types of matches and players. Using HTML, CSS, for
frontend with React.js JavaScript library frontend and API fetching with axios and backend with
MongoDB as database based on MERN Stack. Tech: Reactjs, NodeJs, SCSS, Cricketdata
API</p>
       <a href='https://bruteforces69.vercel.app/' target="blank" className='poster'>  <img src={bl1}  alt="poster"></img></a>
        <a href="https://github.com/anubhavpatel/bruteforces69" target='blank' className='more-btn'> <button>More<BsArrowRight/></button></a>
       </div>
        <div className="p2">
        <a className='heading' href="https://github.com/anubhavpatel/crypto_world" target='blank'><p><u>Cryptoworld</u></p></a>
        
          <p>A responsive React JS website for crypto trader contain crypto
trading news and information and provide guidance for crypto trading. Using HTML, SCSS, for
frontend with React.js JavaScript library for frontend and api fetching with axios. Tech: Reactjs,
Redux toolkit, Chakra UI, Rapid API</p>
        <a href="https://cryptoworld-nine.vercel.app/" target='blank' className='poster'> <img src={bl2}  alt="poster"></img> </a>
        <a href="https://github.com/anubhavpatel/crypto_world" target='blank' className='more-btn'> <button>More<BsArrowRight/></button></a>
        </div>
        <div className="p3">
       <a href="https://github.com/anubhavpatel/earthly.ie-assignment" target='blank' className='heading'> <p><u>Erthly</u></p></a>
          
          <p>A responsive React JS ecommerce website which contains
diffrents type of items data fetched by API and local storage items. A user can add items in cart
section and also order to the items. Tech: Reactjs, Material UI, Redux toolkit, CSS, SCSS ,
RapidAPI</p>
         <a href='https://earthly-assignment.vercel.app/' target="blank" className='poster'><img src={bl3}  alt="poster"></img></a>
       <a href="https://github.com/anubhavpatel/earthly.ie-assignment" target='blank' className='more-btn'>  <button>More<BsArrowRight/></button> </a>
        </div>
        <div className="p4">
        <a  href='https://github.com/anubhavpatel/stackoverflow_clone' target="blank" className='heading'><p><u>Stackoverflow-Clone</u></p></a>
         
          <p>A responsive React JS stackoverflow clone website, Using HTML,CSS, for frontend with React.js JavaScript library and backend with MongoDB as
database based on MERN Stack</p>
        <a href='https://github.com/anubhavpatel/stackoverflow_clone' target='blank' className='poster'> <img src={bl4}  alt="poster"></img></a>
         <a href='https://github.com/anubhavpatel/stackoverflow_clone' target="blank" className='more-btn'><button>More<BsArrowRight/></button></a>
        </div>
    </div>
  )
}

export default Projects