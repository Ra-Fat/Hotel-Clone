import React from 'react'
import './service.css'
import Navbar from '../../Components/Navbar'
import seaBackground from '../../assets/img_3.jpg'
function Service() {
  return (
    <div className='ServiceContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${seaBackground})`}} >
          <Navbar/>
          <div className="introuceBlockService">
              <h1 className="Text">Our Services</h1>
              <p className='pText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      </div>
      {/* Start the code here */}
      <h1>Service</h1>
  </div> 
  )
}

export default Service
