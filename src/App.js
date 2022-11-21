import './App.css';
import React from 'react'
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
// import Navbar from "./components/Navbar/Navbar.jsx"
import Projects from "./components/Projects/Projects.jsx"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skills from "./components/Skills/Skills.jsx"
// import Landing from "./components/Landing/Landing.jsx"
import Home from "./components/Home/Home.jsx"
import { Route, Routes } from "react-router-dom"
// import { useState} from 'react'

//trying to make a new landing with only name and title with full background, then click the shoes and nav bar appears with white margin (looks like original landing design)

    //also will keep the background full and hidden beg+hind white margin with contact page only showing circle cutout of shoes

    //how? possibly make new landing page with ternary for showing navbar and include navbar in all other pages? 

    //hitting home on the navbar will return you to the landing page, where you must again click the shoes to enter? or home will just take you to the actual homepage, no way to return to the landing


function App() {

  return (
    <div className='full-background'>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/skills" element={<Skills />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </div>
    </div>
  );
}

export default App;
