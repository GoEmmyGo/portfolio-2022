import React from 'react'
import './StoneBabes.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
// import { useState } from 'react'

const StoneBabes = () => {


  // const goBack = (projectPage) => {

  //   const [return, setReturn] = useState('')

  //   setReturn(projectPage)
  // }

  return (
    <>
      <div className='carousel-container'>
        <Carousel 
          autoPlay
          showStatus={false}
          // max-width={1894}
          // thumbWidth={275}
          infiniteLoop={true}
          useKeyboardArrows={true}
          dynamicHeight={true}
          interval={4000}
          >
          <div>
            <img alt="stone babes homepage" src={require("../Images/stone-home.png")} />
            <p className="stone-home">Legend 1</p>
          </div>
          <div>
            <img alt="stone babes about page" src={require("../Images/stone-about.png")} />
            <p className="stone-about">Legend 1</p>
          </div>
          <div>
            <img alt="stone babes projects" src={require("../Images/stone-projects.png")}/>
            <p className="stone-projects">Legend 1</p>
          </div>
          <div>
            <img alt="stone babes sends" src={require("../Images/stone-sends.png")} />
            <p className="stone-sends">Legend 1</p>
          </div>
          <div>
            <img alt="stone babes add climb" src={require("../Images/stone-add.png")} />
            <p className="stone-add">Legend 1</p>
          </div>
          <div>
            <video 
              alt="stone babes video" 
              src={require("../Images/AS GOOD AS IT WILL GET IN TWO MIN.webm")} 
              controls 
              max-width={1894}
            />
            <img alt='stone babes video' src={require('../Images/stone-babes-vid-thumbnail.png')} />
            <p className="stone-video">Legend 1</p>
          </div>
        </Carousel>
      </div>
      {/* <button onClick={()=> setReturn('Projects.jsx')}>
        {!return ? }
        Back
      </button>
      beeeee */}
    </>
  )
}

export default StoneBabes

