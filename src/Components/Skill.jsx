import React from 'react'
import "../Style/Skill.css"
import c1logo from "../assests/clogo.png"
import html from "../assests/html.png"
import css from "../assests/css.png"
import js from "../assests/js.png"
import react from "../assests/react.png"
import redux from "../assests/redux.png"
import git from "../assests/git.png"
import vscode from "../assests/vscode.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Skill = () => {
  return (
    <div className='skill-main'>
      <p className='skillstext'>Skills</p>
      <div className='main-skill-cont'>
        <p>Language</p>
        <div className='skill-container'>
          <div className='item item1'  data-aos="fade-up" data-aos-duration="1500">
            <img src={c1logo}></img>
            <p>C/C++</p>
          </div>
          <div className='item item2'  data-aos="fade-up" data-aos-duration="1500">
            <img src={html}></img>
            <p>HTML</p>
          </div>
          <div className='item item3' data-aos="fade-up" data-aos-duration="1500">
            <img src={css}></img>
            <p>CSS</p>
          </div>
          <div className='item item4'  data-aos="fade-up" data-aos-duration="1500">
            <img src={js}></img>
            <p>JavaScript</p>
          </div>

        </div>
        <p style={{ marginTop: "2rem" }}>Libraries & Tools</p>
        <div className='skill-container'>
          <div className='item item1 t1'  data-aos="fade-up" data-aos-duration="1500">
            <img src={react}></img>
            <p>ReactJs</p>
          </div>
          <div className='item item2 t2'  data-aos="fade-up" data-aos-duration="1500">
            <img src={redux}></img>
            <p>Redux </p>
          </div>
          <div className='item item3 t3'  data-aos="fade-up" data-aos-duration="1500">
            <img src={git}></img>
            <p>GIT</p>
          </div>
          <div className='item item4 t4' data-aos="fade-up" data-aos-duration="1500">
            <img src={vscode}></img>
            <p>Vscode</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skill
