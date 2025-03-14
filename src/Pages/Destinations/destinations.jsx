import React from 'react'
import './destinations.css'
import Navbar from '../../Components/Navbar'
import destinationBackground from '../../assets/img_2.jpg'
function Destinations() {
  return (
    <div className='DestinationContainer'>
        <div className="PicCover" style={{backgroundImage: `url(${destinationBackground})`}} >
            <Navbar/>
        </div>
        {/* Start the code here */}
        <h1>Destinations</h1>
    </div>
  )
}
export default Destinations