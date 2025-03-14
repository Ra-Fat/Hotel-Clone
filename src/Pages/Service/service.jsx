import React from 'react'
import './service.css'
import Navbar from '../../Components/Navbar'
import seaBackground from '../../assets/img_3.jpg'
function Service() {
  return (
    <div className='ServiceContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${seaBackground})`}} >
          <Navbar/>
      </div>
      {/* Start the code here */}
      <h1>Service</h1>
  </div> 
  )
}

export default Service
