import React, { useEffect, useState} from 'react'
import "./VitaminSol.css"
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

const VitaminSol = () => {

  const [thumbSize, setThumbSize] = useState('')

  useEffect(() => {

    getThumbWidth()

    window.addEventListener("resize", getThumbWidth)
    
    return () => window.removeEventListener("resize", getThumbWidth)

  }, [])


  const getThumbWidth = () => {

    let width = (window.innerWidth * 0.7) / 6.5

    return setThumbSize(width)
  }

  const renderThumbs = () => {
    return [
            <img alt="vitamin sol homepage" src={require("../Images/vita-home.png")} />,
            <img alt="vitamin sol about page" src={require("../Images/vita-about.png")} />,
            <img alt="vitamin sol calculator" src={require("../Images/vita-calc.png")}/>,
            <img alt="vitamin sol loading page" src={require("../Images/vita-loading.png")} />,
            <img alt="vitamin sol solution" src={require("../Images/vita-solution.png")} />,
            <img alt='vitamin sol video' src={require('../Images/vitamin-sol-vid.png')} />
    ]
  } 

  return (
    <div className='carousel-container'>
      <Carousel 
        autoPlay
        showStatus={false}
        thumbWidth={thumbSize}
        infiniteLoop={true}
        useKeyboardArrows={true}
        dynamicHeight={true}
        interval={4000}
        renderThumbs={renderThumbs}
        >
        <div>
          <img alt="vitamin sol homepage" src={require("../Images/vita-home.png")} />
        </div>
        <div>
          <img alt="vitamin sol about page" src={require("../Images/vita-about.png")} />
        </div>
        <div>
          <img alt="vitamin sol calculator" src={require("../Images/vita-calc.png")} />
        </div>
        <div>
          <img alt="vitamin sol loading" src={require("../Images/vita-loading.png")} />
        </div>
        <div>
          <img alt="vitamin sol solution" src={require("../Images/vita-solution.png")} />
        </div>
        <div className='vita-vid-container'>
          <video 
            alt="vitamin sol video" 
            src={require("../Images/Emmaline - Vitamin Sol - WEB DEV21.webm")} 
            controls 
            max-width={1894}
          />
          <img alt='vitamin sol video' src={require('../Images/vitamin-sol-vid.png')} />
        </div>
      </Carousel>
    </div>
  )
}

export default VitaminSol

