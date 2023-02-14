
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';
function App() {
  return (
    <BrowserRouter>
    <div className="app">
     <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
    
      <Route path="/projects" element={<Projects/>}/>
     <Route path="*" element={<Home/>} />
    </Routes>
    <Footer/>
    </div>
   
    </BrowserRouter>
    
  );
}

export default App;
