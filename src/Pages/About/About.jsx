import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar'
import AboutBackground from '../../assets/img_3.jpg'
function About() {
  return (
    <div className='AboutContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${AboutBackground})`}}>
          <Navbar/>
          <div className="introuceBlockAbout">
              <h1 className="Text">About us</h1>
              <p className='pText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      </div>
      {/* Start the code here */}
      <h1>About</h1>
    </div>
  )
}

export default About
