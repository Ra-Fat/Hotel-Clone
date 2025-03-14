import './App.css'
import Home from './Pages/Home/home'
import Destinations from './Pages/Destinations/destinations'
import Service from './Pages/Service/service'
import Contact from './Pages/Contact/contact'
import About from './Pages/About/About'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return(
        
        // Use to refernce to each page, the / is the active tab
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/Destinations' element= {<Destinations/>}/>
                <Route path='/Service' element= {<Service/>}/>
                <Route path='/About' element= {<About/>}/>
                <Route path='/Contact' element= {<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;