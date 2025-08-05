import React from 'react'
import './contact.css'
import Navbar from '../../Components/navbar'
import ContactBackground from '../../assets/img_4.jpg'
import InstagramPart from '../../Components/Instagram/Instagram'
import Footer from '../../Components/Footer/footer'
import ContactForm from '../../Components/SubComponent/ContactForm'

function Contact() {
  return (
    <div className='ContactContainer'>
      <div className="PicCover" style={{backgroundImage: `url(${ContactBackground})`}}>
          <Navbar/>
          <div className="introuceBlockContact">
              <h1 data-aos="fade-up" data-aos-duration="1300" className="Text">Contact</h1>
              <p data-aos="fade-up" data-aos-duration="1300" className='pText'>Deep within the web of words, where echoes fade and thoughts align, rests the silent form. Send forth your queries, and let them drift through time and space.</p>
          </div>
      </div>
      {/* Form */}
      <ContactForm/>
      <InstagramPart/>
      <Footer/> 
    </div>
  )
}

export default Contact
