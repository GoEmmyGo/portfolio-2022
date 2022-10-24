
import React from 'react'
import "./Projects.css"
import "./VitaminSol.css"
import "./VitaminSol.jsx"
import "./StoneBabes.css"
import "./StoneBabes.jsx"
// import { Link } from "react-router-dom"
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
            <div  className='vitamin-sol' onClick={() => handleClick('vitamin-sol')} alt="Vitamin Sol Project"></div>
            <div className='stone-babes' onClick={() => handleClick('stone-babes')} alt="Stone Babes Project"></div>
          </div> 
         : null}
          <div className='active-project'>
            {active === 'vitamin-sol' 
              ? 
                <div className='back-button'>
                  {active 
                    ? 
                    <button onClick={() => handleClick('landing-container')} /> 
                  : null}
                <VitaminSol/>
                </div> 
              : null}
            {active === 'stone-babes' 
              ? 
                <div className='back-button'>
                  {active 
                    ? 
                      <button onClick={() => handleClick('landing-container')} /> 
                    : null}
                <StoneBabes/>
                </div>
              : null}
            {active === 'landing-container' 
              ?           
                <div className='project-container'>
                  <div  className='vitamin-sol' onClick={() => handleClick('vitamin-sol')} alt="Vitamin Sol Project"></div>
                  <div className='stone-babes' onClick={() => handleClick('stone-babes')} alt="Stone Babes Project"></div>
                </div>
              : null }
          </div>
      </div>
    </>
  )
}

export default Projects

//onClick={handleClick}

//check to see if div working with string
//block out chunks (header, body, etc)
//refine pieces, think in boxes
//reusability is crucial