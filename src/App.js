
import './App.css';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Follow from './Pages/Follow/Follow';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Navbar';
function App() {
  return (
<Router>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  </Routes>
  
 </Router>
  );
}

export default App;
