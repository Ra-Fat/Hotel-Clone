import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar'
import seaBackground from '../../assets/img_1.jpg'
import BlogPost from '../../Components/Blog/Blog'
import InstagramPart from '../../Components/Instagram/Instagram'
import ServiceSmallPart from '../../Components/SmallService/Test'
import TestiMo from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/footer'
import SideImage from '../../Components/SubComponent/aboutHotel_image'
import SearchBar from '../../Components/SearchBar/SearchBar'
import FAQ from '../../Components/FAQ/FAQ'


function Home() {
  return (
    <div className='container'>
      <div className="PicCover" style={{backgroundImage: `url(${seaBackground})`}}>
          <Navbar/>
          <div className="introuceBlock">
            <h1 data-aos="fade-up" data-aos-duration="1300" className="Text">Once a year go someplace you've never been before.</h1>
            <a data-aos="fade-up" data-aos-duration="1300" href="https://www.youtube.com/watch?v=mwtbEGNABWU" className="videoLoad">See video</a>
          </div>

      </div>
      <SearchBar/>
      {/* About */}
      <ServiceSmallPart/>
      <SideImage/>
      <BlogPost/>
      <FAQ/>
      <TestiMo/>
      <InstagramPart/>
      <Footer/>
    </div>
  )
}

export default Home
