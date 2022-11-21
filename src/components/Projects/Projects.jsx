
import React from 'react'
import "./Projects.css"
import "./VitaminSol.css"
import "./VitaminSol.jsx"
import "./StoneBabes.css"
import "./StoneBabes.jsx"
import stoneBabesPic from '../Images/stone-babes.png'
import vitaminSolPic from '../Images/vita-home.png'
import Navbar from '../Navbar/Navbar.jsx'
import StoneBabes from './StoneBabes.jsx'
import VitaminSol from './VitaminSol.jsx'
import {useState} from 'react'

const Projects = () => {

  

  const [active, setActive] = useState('')

  const handleClick = (project) => {
    
    setActive(project)
    console.log(project)

  }

  console.log(!!active)

  return (
    <>
      <Navbar />
      <div className='landing-container'>
      {!active
         ? 
          <div className='project-container'>
              <figure>
                <img className='vitamin-sol' src={vitaminSolPic} onClick={() => handleClick('vitamin-sol')} alt="Vitamin Sol Project"></img>
                <figcaption>React Capstone Project</figcaption>
              </figure>
              <figure>
                <img className='stone-babes' src={stoneBabesPic} onClick={() => handleClick('stone-babes')} alt="Stone Babes Project"></img>
                <figcaption>Vanilla JS Capstone Project</figcaption>
              </figure>
          </div> 
         : 
          <div className='active-project'>
          {active === 'vitamin-sol' 
            ? 
              <div className='back'>
                {active 
                  ? 
                    <button className='back-button' onClick={() => handleClick('')}>BACK TO PROJECTS</button> 
                  : null}
              <VitaminSol/>
              </div> 
            : null}
          {active === 'stone-babes' 
            ? 
              <div>
                {active 
                  ? 
                    <button className='back-button' onClick={() => handleClick('')}>BACK TO PROJECTS</button>
                  : null}
              <StoneBabes/>
              </div>
            : null}
          </div>}
      </div>
    </>
  )
}

export default Projects
