import React from 'react'
import Time from '../../Utils/Time'
function Hero() {
    const now =Time();
  return (
    <div>
      <p>good {now}</p>
    </div>
  )
}

export default Hero
