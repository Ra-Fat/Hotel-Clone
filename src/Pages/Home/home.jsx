import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar'
import seaBackground from '../../assets/img_1.jpg'
function Home() {
  return (
    <div className='container'>
      <div className="PicCover" style={{backgroundImage: `url(${seaBackground})`}}>
          <Navbar/>
      </div>
      {/* Start the code here */}
      <h1>Home</h1>
    </div>
  )
}

export default Home
