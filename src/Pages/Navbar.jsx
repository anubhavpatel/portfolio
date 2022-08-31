import React ,{useState} from 'react'
import { Link , useNavigate  } from 'react-router-dom'
import Contact from './Contact/Contact';
import './Navbar.css'
const Navbar = () => {
  
  const [isMobile, setIsMobile] =useState(false);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  const navigateContact =()=> {
    navigate('/cnt');
  };

  
  return (
    <nav className='navbar'>
        <h3 className='logo' onClick={navigateHome} >Porfolio</h3>
        <ul className={isMobile ? "nav-links-mobile": "nav-links"} onClick={()=> setIsMobile(false)}>
            <Link to="/" className="home">
              <li>Home</li>
            </Link>
            <Link to="/about" className="about" >
              <li>About</li>
            </Link>
            
            
            {/* <Link to="/follow" className="follow">
              <li>Follow</li>
  
              <ul class="dropdown">
             <li><a href="https://www.instagram.com/anubhav_patel221/"> Instagram </a></li>
             <li><a href=""> Facebook</a></li>
             <li><a href="">Linkedin</a></li>
             <li><a href=""> Github</a></li>
             <li><a href="">rhn do</a></li>
           </ul>

            </Link> */}
            <Link to="contact" className="cnt" onClick={navigateContact}>
              <li>Contact</li>
            </Link>
        </ul>
        <button className='mobile-menu-btn' onClick={()=> setIsMobile(!isMobile)}>
           {isMobile ? ( <i className='fas fa-times'></i>) : 
           (<i className='fas fa-bars'></i>)}
        </button>
    </nav>
  )
}

export default Navbar