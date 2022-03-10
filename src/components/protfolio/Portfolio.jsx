import './protfolio.scss'
import ProtfolioList from '../protfolioList/ProtList'
import { useState, useEffect } from 'react'
import { mobileProtfolio, featuredProtfolio, webAppProtfolio } from '../../data'


function Portfolio() {
  const list = [{ id: 'featured', title: 'Featured' }, { id: 'mobile-apps', title: 'Mobile-Apps' }, { id: 'web-apps', title: 'Web-Apps' }]
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState('featured')

  useEffect(() => {

    const dealyLoading = (data) => {
      setLoading(true)
      setTimeout(() => {
        setData(data)
        setLoading(false)
      }, 3000)
    }


    switch (selected) {
      case 'featured':
        dealyLoading(featuredProtfolio)
        break

      case 'mobile-apps':
        dealyLoading(mobileProtfolio)
        break

      case 'web-apps':
        dealyLoading(webAppProtfolio)
        break

      default:
        setData(featuredProtfolio)
    }
  }, [selected])
  return (
    <div className='portfolio' id="portfolio">
      <ul>
        {list.map(item => (<ProtfolioList item={item} active={selected === item.id} setSelected={setSelected}></ProtfolioList>))}
      </ul>

      <div className='container'>

        {loading ? <div className='loading'>Loading...</div> :
          data.map(item => (
            <div key={item.id} className='protfolio-item'>
              <img src={item.src} alt="profile" />
              <h3>{item.title}</h3>
            </div>)
          )
        }




      </div>
    </div>
  )
}

export default Portfolio