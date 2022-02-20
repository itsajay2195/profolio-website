import './contact.scss'
import {useState} from 'react'


function Contact() {
  const[message,setMessage]= useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setMessage(true)
    // alert('Thanks for reaching out!')
  }
  return (
    <div className='contact' id="contact">
      <div className='left'>
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea type="text" placeholder="Message"></textarea>
          <button type="submit"> send</button>
          {message && <span>Thanks for reaching out, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact