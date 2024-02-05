import React from "react";
import pic from "../assests/pic.jpg";
import "../Style/Home.css"
import Projects from "./Projects";
import {BsArrowDown, BsHexagon} from "react-icons/bs"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa"
import HexBack from "./HexBack";
import Education from "./Education";
import Skill from "./Skill";


const Home = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 1000, 
      behavior: 'smooth'
     
    });
  };
  return (
    <>
   
     <div className="hexbackground">
    <HexBack/>
      <div className="home-container">
        <div className="home1">
             <h1 style={{marginRight:"6rem"}}>FRONT-</h1>
             <div style={{
              display:"flex", color:"white",
              fontFamily: "play, sans sarif",
             justifyContent: "center",
            alignItems: 'center'
              }}
              >
             <h1 style={{marginRight:"1rem"}}>END WEB</h1>
             <p>CREATIVE THINKING AND PROBLEM <br/>SOLVING ARE WHERE
             MY MIND WANDERS<br/> USING MY KNOWLEDGE AND PASSION FOR <br/>DESIGN AS MY MEDIUM.</p>
             </div>
            <div className="dev_text">
            <h1  style={{marginLeft:"0rem", color: "red"}}>DEVELOPER</h1>
            </div>
           
        </div>

        <div className="home2">
         <div className="social-link-mobile">
         <a href='https://github.com/anubhavpatel'  target="_blank"><AiFillGithub className='github'/></a>
          
    <a href='https://www.linkedin.com/in/anubhavpatel063/' target='_blank'><AiFillLinkedin className='linkedin'/></a>
           
    <a href='https://www.instagram.com/anubhav._patel/' target='_blank'><FaInstagram className='instagram'/></a>
         </div>
           
    

          <div className="scroll_down">
       <button onClick={scrollToTop}><BsArrowDown style={{color:"white"}} size={35}/></button>
          </div>
         
        </div>
</div>
      </div>
      <div className="aboutme">
         <h1>About Me</h1>
         <p>A graduate student in the Department of Information Technology pursuing Bachelor of Technology at
          Bundelkhand Institute of Engineering & Technology, Jhansi. My interests primarily lie in the areas of Web Development,
           and I am seeking exciting opportunities related to the same.  I also possess a broad set of technical skills for which I am ready to address some 
            of technology's greatest challenges and make an impact on millions, if not billions, of users. <br/> <br/>I believe that the skills that i have attained
             from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing
              them in any opportunity that i receive.</p>
        
      </div> 
      <Skill/>
      <Education/>
     <Projects/>
    </>
  );
};

export default Home;