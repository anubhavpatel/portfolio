import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Routes, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Follow from './Pages/Follow';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
function App() {
  return (
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/about" element={<About/>} exact />
    <Route path="/follow" element={<Follow/>} exact />
    <Route path="/contact" element={<Contact/>} exact />
  </Routes>
 </Router>
  );
}

export default App;
