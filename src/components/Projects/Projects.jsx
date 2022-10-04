
import React from 'react'
import "./Projects.css"
import { Link } from "react-router-dom"
import VitaminSol from './VitaminSol'
// import StoneBabes from './StoneBabes'
// import {useState} from 'react'

const Projects = () => {

  

  // const [vitamin, setVitamin] = useState(true)
  // const [stone, setStone] = useState(true)

  // const handleClick = e => {
  //   e.preventDefault()


  // }

  return (
    <>
      <div className='project-container'>
        <div className='vitamin-sol' alt="Vitamin Sol Project">
          <Link to={VitaminSol}></Link>
        </div>
        <div className='stone-babes' alt="Stone Babes Project"></div>
      </div>
    </>
  )
}

export default Projects

//onClick={handleClick}