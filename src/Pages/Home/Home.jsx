import React from 'react'
import './Home.css'
import Typical from 'react-typical'
import home from '../../assests/home-main.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Wobble from 'react-reveal/Wobble';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import { Zoom } from 'react-reveal'

const Home = () => {
  return (
    <div className='page-container-home'>
    <div className='page-container-1'>
      <h1 className='wel'>Welcome</h1>
    {/* <h2>{ ' '}
    
    <Typical 
       loop={Infinity}
       wrapper= "b"
       steps={[
        'web developer', 1000,
        'android developer', 1000
       ]}
      />
    </h2> */}
    <p>My name is Anubhav Patel,I'm a front-end developer. I hava developed many types of front-ends from well known.<br/><br/>
        I'm passionate about cutting-edge, pixels-perfect, beautifull interfaces and intuitively implemented UX</p>
        <a className='cv'
        href={home}
        download="cv"
      >
      Resume
      </a>
      
      <div className='follow'>
      <a  href="https://www.youtube.com/c/jamesqquick"    target="_blank"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"  target="_blank"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social"  target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/anubhav_patel221/"  target="_blank"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      </div>
    </div>
   <Zoom  top>
    <div className="page-container-2">
       <img  src={home}className='home-logo'/>
    </div></Zoom>
    </div>
  )
}

export default Home