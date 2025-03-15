import React from 'react'
import './destinations.css'
import Navbar from '../../Components/Navbar'
import destinationBackground from '../../assets/img_2.jpg'
function Destinations() {
  return (
    <div className='DestinationContainer'>
        <div className="PicCover" style={{backgroundImage: `url(${destinationBackground})`}} >
            <Navbar/>
            <div className="introuceBlock">
              <h1 className="Text">Popular Places</h1>
              <a href="https://www.youtube.com/watch?v=mwtbEGNABWU" className="videoLoad">See video</a>
          </div>
        </div>
        {/* Start the code here */}
        <h1>Destinations</h1>
    </div>
  )
}
export default Destinations