import React, { useEffect, useState } from 'react'
import './StoneBabes.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

const StoneBabes = () => {

    const [thumbSize, setThumbSize] = useState('')

  useEffect(() => {

    getThumbWidth()

    window.addEventListener("resize", getThumbWidth)
    
    return () => window.removeEventListener("resize", getThumbWidth)

  }, [])


  const getThumbWidth = () => {

    let width = (window.innerWidth * 0.8) / 6.5

    return setThumbSize(width)
  }

  const renderThumbs = () => {
    return [
            <img alt="stone babes homepage" src={require("../Images/stone-home.png")} />,
            <img alt="stone babes about page" src={require("../Images/stone-about.png")} />,
            <img alt="stone babes projects" src={require("../Images/stone-projects-resize.png")}/>,
            <img alt="stone babes sends" src={require("../Images/stone-sends.png")} />,
            <img alt="stone babes add climb" src={require("../Images/stone-add.png")} />,
            <img alt='stone babes video' src={require('../Images/stone-babes-vid-thumbnail.png')} />
    ]
  }

  return (
    <>
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
            <img alt="stone babes homepage" src={require("../Images/stone-home.png")} />
          </div>
          <div>
            <img alt="stone babes about page" src={require("../Images/stone-about.png")} />
          </div>
          <div>
            <img alt="stone babes projects" src={require("../Images/stone-projects-resize.png")}/>
          </div>
          <div>
            <img alt="stone babes sends" src={require("../Images/stone-sends.png")} />
          </div>
          <div>
            <img alt="stone babes add climb" src={require("../Images/stone-add.png")} />
          </div>
          <div className='stone-vid-container'>
            <video 
              alt="stone babes video" 
              src={require("../Images/AS GOOD AS IT WILL GET IN TWO MIN.webm")} 
              controls />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default StoneBabes

