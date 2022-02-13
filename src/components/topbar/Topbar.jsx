import './topbar.scss'
import { Mail, Person } from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar active'>
      <div className='wrapper'>
        <div className="left">
          <a href="#intro" className="logo">Ajay</a>
          <div className="itemContainer">
            <Person className='icon'/> 
              <span> +91 9710115165</span>
          </div>

          <div className="itemContainer">
            <Mail className='icon'/>
            <span> ajayrne@gmail.com</span>
          </div>

        </div>

        <div className="right">
          <div className="hamburger">
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>


        </div>
      </div>
    </div>
  )
}