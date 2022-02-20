import './works.scss'
import { sliderData } from '../../data'
import  { useState, } from 'react'

function Works() {

  const [currentSlider,setCurrentSlider] =useState(0)

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlider( currentSlider>0 ? currentSlider-1 : sliderData.length-1) : setCurrentSlider(currentSlider< sliderData.length -1 ?  currentSlider+1 : 0)
  }

  return (
    <div className='works' id="works">
      <div className="slider" style={{ transform:`translateX(-${currentSlider *100}vw)` }}>
      {sliderData.map((item)=><div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.type_img} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p className='max-lines'>{item.desc}
                </p>
                <span> Projects</span>
                
              </div>
            </div>
            <div className="right">
              <img src={item.gif} alt="" />
            </div>
          </div>
        </div>)}
      </div>
      <img src="assets/arrow.png" className='arrow left' onClick={()=>handleClick("left")} alt="" />
      <img src="assets/arrow.png" className='arrow right' onClick={()=>handleClick()} alt="" />
    </div>
  )
}

export default Works