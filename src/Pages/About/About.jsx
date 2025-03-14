import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar'
import AboutBackground from '../../assets/img_3.jpg'
function About() {
  return (
    <div className='AboutContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${AboutBackground})`}}>
          <Navbar/>
      </div>
      {/* Start the code here */}
      <h1>About</h1>
    </div>
  )
}

export default About
