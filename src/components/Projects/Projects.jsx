
import React from 'react'
import "./Projects.css"
import "./VitaminSol.css"
import "./VitaminSol.jsx"
import { Link } from "react-router-dom"
import VitaminSol from './VitaminSol.jsx'
// import StoneBabes from './StoneBabes'
// import {useState} from 'react'

const Projects = () => {

  

  // const [vitamin, setVitamin] = useState(true)
  // const [stone, setStone] = useState(true)

  const handleClick = e => {
    
    console.log(e.currentTarget)

  }

  return (
    <>
      <div className='project-container'>
        <Link  className='vitamin-sol' onClick={handleClick} to={VitaminSol} alt="Vitamin Sol Project"></Link>
        <div className='stone-babes' alt="Stone Babes Project">
        </div>
        
      </div>
    </>
  )
}

export default Projects

//onClick={handleClick}