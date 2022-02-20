import './works.scss'
import { mobileProtfolio, featuredProtfolio, webAppProtfolio } from '../../data'

function works() {

  return (
    <div className='works' id="works">
      <div className="slider">
      {mobileProtfolio.map((item)=><div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>{item.title}</h2>
                <p className='max-lines'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard. 
                </p>
                <span> Projects</span>
                
              </div>
            </div>
            <div className="right">
              <img src="assets/hf-gif.gif" alt="" />
            </div>
          </div>
        </div>)}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" />
      <img src="assets/arrow.png" className='arrow right' alt="" />
    </div>
  )
}

export default works