import React from 'react'
import '../Style/Education.css'
import { FaUserGraduate } from "react-icons/fa"
import {RiCodeSSlashFill} from "react-icons/ri"
const Education = () => {
  return (
    <div className='timeline-main'>
    <p className='edutxt'>Education</p>
      <div className='timeline'>

        <div className='container-t'>
          <div className='logo-t'><FaUserGraduate style={{color: "white"}} /></div>
          <div className='text-box'>
            <span className='arrow-t'></span>
            <h3>Bundelkhand Institute of Engineering & Technology, Jhansi </h3>
            <p>2019-2023</p>
            <h5>B.Tech in IT</h5>
            <p>CGPA: 7.53</p>

          </div>
        </div>
        <div className='container-t'>

          <div className='logo-t second'><RiCodeSSlashFill style={{color: "white"}}/></div>
          <div className='text-box'>
            <span className='arrow-t'></span>
            <h3> Rashtriya Inter College Sujanganj, Jaunpur</h3>
            <p>2016-2018</p>
            <h5>HSC</h5>
            <p>Percentage: 81.6%</p>
          </div>
        </div>
        <div className='container-t'>

          <div className='logo-t third'></div>

        </div>

      </div>
    </div>
  )
}

export default Education
