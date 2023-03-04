import React from 'react';
import './Landing.css';
import flash from '../../assets/flash.png';
import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" data-aos-delay="300" className="landing-left">
        <h1 className="landing-header">CAN YOU TYPE...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ['FAST ?', 'CORRECT ?', 'QUICK ?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-easing="ease-in-sine"
        data-aos-delay="300"
        data-aos-duration="500"
        className="landing-right"
      >
        <img src={flash} alt="hero-flash" className="flash-image" />
      </div>
    </div>
  );
};

export default Landing;
