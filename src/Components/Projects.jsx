import React from 'react'
import "../Style/Projects.css"
import pro1 from "../assests/bl1.PNG"
import pro2 from "../assests/bl2.PNG"
import pro3 from "../assests/bl3.PNG"
import pro4 from "../assests/bl4.PNG"
import pro5 from "../assests/bl5.png";
import pro6 from "../assests/bl6.jpg"
import {BsLink45Deg} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
const Projects = () => {
  return (
    <div className='project-sec'>
    <h1> Our Projects</h1>
      <div class="main">
  <ul class="cards" >
    <li class="cards_item">
      <div class="card" data-aos="fade-up">
        <div class="card_image">
        <a href='https://bruteforces69.vercel.app/' target='_blank'><img  src={pro1} alt="bruteforce" /></a>
        </div>
        <div className='btn-democode'>
         <a href='https://github.com/anubhavpatel/bruteforces69' target='_blank'><AiFillGithub size={30}/></a>
         <a href='https://bruteforces69.vercel.app/' target='_blank' className=''><BsLink45Deg size={30}/></a>
         </div>
        <div class="card_content">
        <a href='https://github.com/anubhavpatel/bruteforces69' target='_blank'> <h2 class="card_title">Cricket Website</h2></a> 
          <div class="card_text">
            <p> Developed a responsive React JS cricket website that showcased live scores of various types of matches and 
            provided comprehensive statistics for matches and players
            </p>
            <hr />
            <p> Utilized <strong>HTML</strong>, <strong>CSS</strong>, and <strong>React.Js</strong> JavaScript library for the frontend implementation
            <br/>Implemented API fetching with axios to retrieve data from the Cricketdata API
            </p>
          </div>
        </div>
      </div>
    </li>
    
    <li class="cards_item">
      <div class="card" data-aos="fade-up">
        <div class="card_image">
        <a href='https://github.com/anubhavpatel/chat_app' target='_blank'><img  src={pro6} alt="chats" /></a>
        </div>
        <div className='btn-democode'>
         <a href='https://github.com/anubhavpatel/chat_app' target='_blank'><AiFillGithub size={30}/></a>
         <a href='https://github.com/anubhavpatel/chat_app' target='_blank' className=''><BsLink45Deg size={30}/></a>
         </div>
        <div class="card_content">
        <a href='https://github.com/anubhavpatel/chat_app' target='_blank'> <h2 class="card_title">Chat App</h2></a> 
          <div class="card_text">
            <p> Developed a real-time responsive chat website using cutting-edge technologies such as React.js and Socket.io
            </p>
            <hr />
            <p> Server Creation with Socket.io and Integration of Socket.io with React<br/>
 A seamless and interactive platform for instant messaging that allows users to communicate in real time
            </p>
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="fade-up">
        <div class="card_image">
        <a href='https://cryptoworld-nine.vercel.app/' target='_blank'><img  src={pro2} alt="cryptoworld" /></a>
        </div>
        <div className='btn-democode'>
         <a href='https://github.com/anubhavpatel/crypto_world' target='_blank'><AiFillGithub size={30}/></a>
         <a href='https://cryptoworld-nine.vercel.app/' target='_blank' className=''><BsLink45Deg size={30}/></a>
         </div>
        <div class="card_content">
        <a href='https://github.com/anubhavpatel/crypto_world' target='_blank'> <h2 class="card_title">Cryptoworld</h2></a> 
          <div class="card_text">
            <p>Developed a highly responsive React JS website for crypto traders, providing real-time crypto trading news and information
   <br/>Utilized HTML, SCSS, and React.js JavaScript library for frontend development
   <br/>Implemented efficient data retrieval from APIs using Axios
            </p>
            <hr />
            <p>  Incorporated Redux Toolkit for state management and Chakra UI for enhanced user interface
   <br/> Leveraged Rapid API for seamless integration of external services
            </p>
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="fade-up">
        <div class="card_image">
        <a href='https://earthly-assignment.vercel.app/' target='_blank'><img  src={pro3} alt="earthly" /></a>
        </div>
        <div className='btn-democode'>
         <a href='https://github.com/anubhavpatel/ecommerce-website' target='_blank'><AiFillGithub size={30}/></a>
         <a href='https://earthly-assignment.vercel.app/' target='_blank' className=''><BsLink45Deg size={30}/></a>
         </div>
        <div class="card_content">
        <a href='https://github.com/anubhavpatel/ecommerce-website' target='_blank'> <h2 class="card_title">Earthly</h2></a> 
          <div class="card_text">
            <p>  A responsive React JS ecommerce website which contains diffrents type of items data fetched by API and local storage items
 <br/> A user can add items in cart section and also order to the items
            </p>
            <hr />
            <p> Utilized HTML, SCSS, and React.js JavaScript library for frontend development
  <br/> Incorporated Redux Toolkit for state management and Material UI for enhanced user interface


            </p>
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="fade-up">
        <div class="card_image">
        <a href='https://github.com/anubhavpatel/stackoverflow_clone' target='_blank'><img  src={pro4} alt="stackoverflowclone" /></a>
        </div>
        <div className='btn-democode'>
         <a href='https://github.com/anubhavpatel/stackoverflow_clone' target='_blank'><AiFillGithub size={30}/></a>
         <a href='https://github.com/anubhavpatel/stackoverflow_clone' target='_blank' className=''><BsLink45Deg size={30}/></a>
         </div>
        <div class="card_content">
        <a href='https://github.com/anubhavpatel/stackoverflow_clone' target='_blank'> <h2 class="card_title">Stackoverflow Clone</h2></a> 
          <div class="card_text">
            <p> Developed a responsive React JS cricket website that showcased live scores of various types of matches and 
            provided comprehensive statistics for matches and players
            </p>
            <hr />
            <p> Utilized <strong>HTML</strong>, <strong>CSS</strong>, and <strong>React.Js</strong> JavaScript library for the frontend implementation
            <br/>Implemented API fetching with axios to retrieve data from the Cricketdata API
            </p>
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="fade-up">
        <div class="card_image">
        <a href='https://map-ui-hazel.vercel.app/' target='_blank'><img  src={pro5} alt="mapui" /></a>
        </div>
        <div className='btn-democode'>
         <a href='https://github.com/anubhavpatel/map-ui' target='_blank'><AiFillGithub size={30}/></a>
         <a href='https://map-ui-hazel.vercel.app/' target='_blank' className=''><BsLink45Deg size={30}/></a>
         </div>
        <div class="card_content">
        <a href='https://github.com/anubhavpatel/map-ui' target='_blank'> <h2 class="card_title">Map UI</h2></a> 
          <div class="card_text">
            <p>A responsive React JS Map UI website, Using HTML,SCSS, for frontend with React.js and it is a mapping app, include the following: turfjs,Ant.Design, Redux, OSM
            </p>
            <hr />
            <p> khoz k likhte hai
            </p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Projects
