import './intro.scss'

function Intro() {
  return (
    <div className='intro' id ="intro">
      <div className="left">
         <div className="imageContainer">
           <img src="assets/profile.jpg" alt="profile" />
         </div>

      </div>

      <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Ajaykumar Rajasekarn</h1>
            <h3>Freelance Developer <span></span></h3>
          </div>

          <a href="#protfolio" >
             <img src="assets/down.png" alt="down" />
          </a>
      </div>


    </div>
  )
}

export default Intro