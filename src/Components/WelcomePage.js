import React from 'react';
import '../css/welcomepage.css'
import { Fade, Slide } from 'react-awesome-reveal';
import Image from '../images/first-sach.jpg'
import { Flip } from 'react-reveal';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='portfolio-container'>
        <div>
            <Fade triggerOnce>
                <h1 className="welcome-text">Welcome!</h1>
            </Fade>
            <Slide delay={0.3} direction='right'>
                <h2 className="portfolio-text">Sachin's Portfolio</h2>
            </Slide>
        </div>
      </div>
      <div className='image-holder'>
        <Flip>
          <img src={Image}></img>
        </Flip>
      </div> 
    </div>
  );
};

export default WelcomePage;