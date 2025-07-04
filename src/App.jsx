import './App.css';
import Home from './Pages/Home/home';
import Destinations from './Pages/Destinations/destinations';
import Service from './Pages/Service/service';
import Contact from './Pages/Contact/contact';
import About from './Pages/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from 'aos';  
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Destinations' element={<Destinations />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
