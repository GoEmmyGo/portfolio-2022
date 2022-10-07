import React from 'react'
import "./VitaminSol.css"
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

// import 'react-alice-carousel/lib/alice-carousel.css';
// import AliceCarousel from 'react-alice-carousel';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';


const VitaminSol = () => {

  return (
    <div className='carousel-container'>
      <Carousel 
        autoPlay
        showStatus={false}
        thumbWidth={200}
        infiniteLoop={true}
        useKeyboardArrows={true}
        dynamicHeight={true}
        >
        <div>
          <img alt="vitamin sol homepage" src={require("../Images/vita-home.png")} />
          <p className="vita-home">Legend 1</p>
        </div>
        <div>
          <img alt="vitamin sol about page" src={require("../Images/vita-about.png")} />
          <p className="vita-about">Legend 1</p>
        </div>
        <div>
          <img alt="vitamin sol calculator" src={require("../Images/vita-calc.png")} />
          <p className="vita-calc">Legend 1</p>
        </div>
        <div>
          <img alt="vitamin sol loading" src={require("../Images/vita-loading.png")} />
          <p className="vita-load">Legend 1</p>
        </div>
        <div>
          <img alt="vitamin sol solution" src={require("../Images/vita-solution.png")} />
          <p className="vita-solve">Legend 1</p>
        </div>
      </Carousel>
    </div>
  )
}

export default VitaminSol

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img alt="vitamin sol homepage" src={require("../Images/vita-home.png")}  onDragStart={handleDragStart} />,
//   <img alt="vitamin sol about page" src="../Images/vita-about.png" onDragStart={handleDragStart} />,
//   <img alt="vitamin sol calculator" src="../Images/vita-calc.png" onDragStart={handleDragStart} />,
//   <img alt="vitamin sol loading" src="../Images/vita-loading.png" onDragStart={handleDragStart} />,
//   <img alt="vitamin sol solution" src="../Images/vita-solution.png" onDragStart={handleDragStart} />,
// ];

/*React Carousel #3*/

      /* <AliceCarousel mouseTracking items={items} /> */

/*React Carousel #2*/

      /* <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={200}
        totalSlides={5}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Slider
          
        >
          <Slide index={0} src={require("../Images/vita-home.png")} className="vita-home">I am the first Slide.</Slide>
          <Slide index={1} className="vita-about">I am the second Slide.</Slide>
          <Slide index={2} className="vita-calc">I am the third Slide.</Slide>
          <Slide index={3} className="vita-loading">I am the first Slide.</Slide>
          <Slide index={4} className="vita-solution">I am the second</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */