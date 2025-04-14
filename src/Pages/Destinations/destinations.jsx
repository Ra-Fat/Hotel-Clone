import React from 'react'
import './destinations.css'
import Navbar from '../../Components/Navbar'
import destinationBackground from '../../assets/img_2.jpg'
import InstagramPart from '../../Components/Instagram/Instagram'
import SpecialOffers from '../../Components/Offers/SpecialOffers' 
import Footer from '../../Components/Footer/footer'
function Destinations() {
  return (
    <div className='DestinationContainer'>
        <div className="PicCover" style={{backgroundImage: `url(${destinationBackground})`}} >
            <Navbar/>
            <div className="introuceBlock">
              <h1 data-aos="fade-up" data-aos-duration="1300" className="Text">Popular Places</h1>
              <a data-aos="fade-up" data-aos-duration="1300" href="https://www.youtube.com/watch?v=mwtbEGNABWU" className="videoLoad">See video</a>
          </div>
        </div>
    <SpecialOffers/>
    <InstagramPart/>
    <Footer/> 
    </div>
  )
}
export default Destinations