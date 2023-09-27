import React from "react";
import pic from "../assests/pic.jpg";
import "../Style/Home.css"
import Projects from "./Projects";
import {BsArrowDown} from "react-icons/bs"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa"

const Home = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 1000, 
      behavior: 'smooth'
     
    });
  };
  return (
    <>
      {/* <div className="home">
        <div className="pic">
          <img
            style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
            src={pic}
            alt="pic"
          ></img>
        </div>
        <div className="content">
          <div className="content-a">
            <p>
              Hey, I'm <span>Anubhav Patel</span>.I am a Front-End Web
              developer.
            </p>
          </div>
          <div className="social">
            <a href="https://github.com/anubhavpatel" target="blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/anubhavpatel063/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a href="https://www.instagram.com/anubhav._patel/" target="blank">
              Instagram
            </a>
            <a
              href="https://www.facebook.com/anubhav.patel.71465"
              target="blank"
            >
              Facebook
            </a>
          </div>
        </div>
       
      </div>
      <div className="home-hr">
        <hr></hr>
      </div>
      <Projects /> */}


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
            <h1  style={{marginLeft:"4rem", color: "red"}}>DEVELOPER</h1>
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
     <Projects/>
    </>
  );
};

export default Home;
