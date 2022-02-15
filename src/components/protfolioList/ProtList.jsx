import './protfolioList.scss'

export default function ProtfolioList({item,active,setSelected}) {
  return (<li className={`protfolioList ${active && 'active'}`} onClick={()=>{setSelected(item.id)}} >{item.title}</li>
  )
}