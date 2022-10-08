import './App.css';
import React from 'react'
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Projects from "./components/Projects/Projects.jsx"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skills from "./components/Skills/Skills.jsx"
import Landing from "./components/Landing/Landing.jsx"
// import Home from "./components/Home/Home.jsx"
import { Route, Routes } from "react-router-dom"
import { useState} from 'react'


function App() {

  const [enterSite, setEnterSite] = useState('')

  const showNavBar = () => {

    setEnterSite()
  }

  return (
    <div className='full-background'>
      <div className='enter-site' onClick={() => showNavBar()}>go</div>
      <div className='navigation'>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/skills" element={<Skills />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
