import React from 'react'
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {



    return (
        <nav className="nav">
            <ul>
                <li className="home" alt="Home Page" ><CustomLink to="/">HOME</CustomLink></li>
                <li className="projects" alt="Projects Page" ><CustomLink to="/projects">PROJECTS</CustomLink></li>
                <li className="skills" alt="Skills Page" ><CustomLink to="/skills">SKILLS</CustomLink></li>
                <li className="about" alt="About Me Page" ><CustomLink to="/about">ABOUT</CustomLink></li>
                <li className="contact" alt="Contact Info Page" ><CustomLink to="/contact">CONTACT</CustomLink></li>
            </ul>
        </nav>
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

export default Navbar
