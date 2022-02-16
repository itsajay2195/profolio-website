import './protfolio.scss'
import ProtfolioList from '../protfolioList/ProtList'
import {useState, useEffect} from 'react'
import {mobileProtfolio} from '../../data'

function Protfolio() {
  const list=[{id:'featured', title:'Featured'},{id:'mobile-apps',title:'Mobile-Apps'},{id:'web-apps',title:'Web-Apps'}]
  const [data,setData] = useState(list)
  const [selected,setSelected] = useState('featured')
  
  useEffect(()=>{
    
  },[selected])
  return (
    <div className='protfolio' id="protfolio">
      <ul>
        {data.map(item=>(<ProtfolioList item={item} active={selected === item.id} setSelected ={setSelected}></ProtfolioList>))}
      </ul>

     <div className='container'>
        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>


        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>


        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>


        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>


        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>


        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>


        <div className='protfolio-item'>
          <img src="assets/happyfox.jpg" alt="profile" />
          <h3> Happfox Helpdesk app 2.0</h3>
        </div>
     </div>
    </div>
  )
} 

export default Protfolio