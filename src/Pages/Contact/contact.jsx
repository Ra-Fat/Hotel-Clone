import React from 'react'
import './contact.css'
import Navbar from '../../Components/Navbar'
import ContactBackground from '../../assets/img_4.jpg'
function Contact() {
  return (
    <div className='ContactContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${ContactBackground})`}}>
          <Navbar/>
          <div className="introuceBlockContact">
              <h1 className="Text">Contact</h1>
              <p className='pText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      </div>
      {/* Start the code here */}
      <h1>Contact</h1>
    </div>
  )
}

export default Contact
