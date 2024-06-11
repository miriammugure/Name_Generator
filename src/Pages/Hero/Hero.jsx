import React from 'react'
import Time from '../../Utils/Time'
import './Hero.css'
import wave from "../../assets/wave.svg"
function Hero() {
    const now =Time();
  return (
    <div>
      <div className="HeroContainer">
        <div className="welcomeBox">
        <p>good {now}</p>
        <p>who's next?</p>
        </div>
        <div className="output">
          <p>placeholder</p>
        </div>
        <div className="generate-btn">
          <button>generate</button>
        </div>
        
        
       
      
      </div>
      <div className="waves">
        <img src={wave} alt="image of wave" />
        </div>
    </div>
  )
}

export default Hero
