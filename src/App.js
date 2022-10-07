import './App.css';
import React from 'react'
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Projects from "./components/Projects/Projects.jsx"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skills from "./components/Skills/Skills.jsx"
import Landing from "./components/Landing/Landing.jsx"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
