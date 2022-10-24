
import React from 'react'
import './Landing.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

//need link to take you home

const Landing = () => {
  
  return (
    <>
      <div className='landing-box'>
          <div className="landing-title">Emmaline Rose</div>
          <div className="landing-career-title">Full Stack Web Developer</div>
          <div className="home" alt="Home Page" >
            <CustomLink to="/home">EXPLORE</CustomLink>
          </div>
      </div>
    </>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname
      // , end: true 
  })
  return (
      <div className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </div>
  )
}

export default Landing
