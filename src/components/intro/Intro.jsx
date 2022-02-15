import './intro.scss'
import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

function Intro() {
  const textRef  = useRef()
  useEffect(() => {
    init(textRef.current,{
      showCursor:true,
      backdelay:2000,
      strings:["mobile apps ","web apps ","react-native ","react-js "],
    })
  }, [])


  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/profile.jpg" alt="profile" />
        </div>

      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ajaykumar Rajasekaran</h1>
          <h3>Freelance Developer <span ref={textRef}></span></h3>
        </div>

        <a href="#protfolio" >
          <img src="assets/down.png" alt="down" />
        </a>
      </div>


    </div>
  )
}

export default Intro