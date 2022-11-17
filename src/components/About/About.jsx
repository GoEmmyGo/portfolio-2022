import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import './About.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='about-container'>
        <div className='blurb' alt="about me paragraph">
          <p className='intro'>Hi, I'm Emmaline, its nice to meet you.</p>
          <p id='bio'>I'm <strong>full stack web developer</strong> with a little bit of a crush on <strong>UI/UX design.</strong>
          <br/>
          <br/>
          Originally a scientific researcher, I have always been fascinated by the chaos of biology, but I found myself increasingly disheartened at having to accept so many variables would always be out of my control; I simply could not conduct my experiments in a vaccuum. I wanted to be a part of building things that would give me concrete answers and I stumbled upon a world I had never before considered; <strong>web development.</strong> 
          <br/>
          <br/>
          <strong>Javascript</strong> has this really neat way of giving you the freedom to be creative without leaving you wondering why something did or didn't work; the answer is always there if you're willing to look. Its remarkable. An experiment that gives you an immediate and unwavering answer, yes or no, input and output. 
          <br/>
          <br/>
          I'm looking to join a team where my obsession with finding <strong>balance in design</strong> can be put into action, my love for working with humans won't go unnoticed and my education in web development will allow me to work behind the scenes.  
          <br/>
          <br/>
          <strong>So, if you're hoping to fill a role with someone who can wear many hats, I'm your girl.</strong>
          </p>
        </div>
        <div className='intro-pic'> 
          <img src={require("../Images/profile-pic.jpg")} alt="Emmaline Rose"></img>
        </div>
      </div> 
    </>
  )
}

export default About
