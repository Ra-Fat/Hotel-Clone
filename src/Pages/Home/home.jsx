import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar'
import seaBackground from '../../assets/img_1.jpg'

function Home() {
  return (
    <div className='container'>
      <div className="PicCover" style={{backgroundImage: `url(${seaBackground})`}}>
          <Navbar/>
          <div className="introuceBlock">
              <h1 className="Text">Once a year go someplace you've never been before.</h1>
              <a href="https://www.youtube.com/watch?v=mwtbEGNABWU" className="videoLoad">See video</a>
          </div>
      </div>
      {/* Start the code here */}
      <h1>Home</h1>
    </div>
  )
}

export default Home
