import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar'
import AboutBackground from '../../assets/img_3.jpg'
import AboutSmall from '../../Components/SmallAboutUs/AboutUS'
import InstagramPart from '../../Components/Instagram/Instagram'
import Footer from '../../Components/Footer/footer'
function About() {
  return (
    <div className='AboutContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${AboutBackground})`}}>
          <Navbar/>
          <div className="introuceBlockAbout">
              <h1 data-aos="fade-up" data-aos-duration="1300" className="Text">About us</h1>
              <p data-aos="fade-up" data-aos-duration="1300" className='pText'>Far beyond the echoing words, past the misty shores of thought, we stand. A team of seekers, weaving ideas into form, bringing visions to life. Here, silence speaks, and purpose guides.</p>
          </div>
      </div>
      {/* History */}
      <AboutSmall/>
      <InstagramPart/>
      <Footer/> 
    </div>
  )
}

export default About
