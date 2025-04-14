import React from 'react'
import './service.css'
import Navbar from '../../Components/Navbar'
import seaBackground from '../../assets/img_3.jpg'
import ServiceSmallPart from '../../Components/SmallService/Test'
import InstagramPart from '../../Components/Instagram/Instagram'
import Footer from '../../Components/Footer/footer'
import WhyUsComponent from '../../Components/SubComponent/whyUs_image'
function Service() {
  return (
    <div className='ServiceContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${seaBackground})`}} >
          <Navbar/>
          <div className="introuceBlockService">
              <h1 data-aos="fade-up" data-aos-duration="1300" className="Text">Our Services</h1>
              <p data-aos="fade-up" data-aos-duration="1300" className='pText'>Far, far away, where thoughts drift like whispers, we exist. A place where every moment counts, and every story unfolds. Here, in this space, you are invited to explore, to dream, and to create.</p>
          </div>
      </div>
      <ServiceSmallPart/>
      <WhyUsComponent/>
      <InstagramPart/>
      <Footer/>
      
  </div> 
  )
}

export default Service
