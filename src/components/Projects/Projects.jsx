
import React from 'react'
import "./Projects.css"
import "./VitaminSol.css"
import "./VitaminSol.jsx"
import "./StoneBabes.css"
import "./StoneBabes.jsx"
// import { Link } from "react-router-dom"
import StoneBabes from './StoneBabes'
import VitaminSol from './VitaminSol.jsx'
import {useState} from 'react'

const Projects = () => {

  

  const [active, setActive] = useState('')
  // const [stone, setStone] = useState(true)

  const handleClick = (project) => {
    
    setActive(project)
    console.log(project)

  }

  console.log(!!active)

  return (
    <>
      <div className='landing-container'>
      {!active
         ? 
          <div className='project-container'>
            <div  className='vitamin-sol' onClick={() => handleClick('vitamin-sol')} alt="Vitamin Sol Project"></div>
            <div className='stone-babes' onClick={() => handleClick('stone-babes')} alt="Stone Babes Project"></div>
          </div> 
         : null}
          <div className='active-project'>
            {active === 'vitamin-sol' ? <VitaminSol/> : null}
            {active === 'stone-babes' ? <StoneBabes/> : null}
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