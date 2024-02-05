
import './App.css';
import React, {useState} from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Route, Router, Routes, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import {IoIosArrowUp} from "react-icons/io";
import Projects from './Components/Projects';
import Education from './Components/Education';

function App() {
  


  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
     
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  



  return (
    <BrowserRouter>
    <div className="App">
    <button onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}  id="myBtn" title="Go to top"><IoIosArrowUp size={30} /></button>
     <Navbar/>
    
  
    <Routes>
      <Route path="/" element={<Home/>}/>
    
      <Route path="/project" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     <Route path="*" element={<Home/>} />
     </Routes>
   
    
    <Footer/>
   
    </div>
   
    </BrowserRouter>
    
  );
}

export default App;
