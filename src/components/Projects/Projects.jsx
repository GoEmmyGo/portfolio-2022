
import React from 'react'
import "./Projects.css"
import {useState} from 'react'

const Projects = () => {

  

  const [vitamin, setVitamin] = useState(true)
  const [stone, setStone] = useState(true)

  const handleClick = e => {
    
    setVitamin(false)
    setStone(false)

  }

  return (
    <>
      <div className='project-container'>
        <div className='vitamin-sol' onClick={handleClick}>{vitamin}</div>
        <div className='stone-babes' onClick={handleClick}>{stone}</div>
      </div>
    </>
  )
}

export default Projects
