import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';
import ContactForm from './components/Contactform';
import Thankyou from './pages/Thankyou';




function App() {

  const isLoggedIn = window.localStorage.getItem('authenticated')

  return (
    <div>
    
         <Router>
            <Routes>                                             
              <Route path="/" element={<Home />} />                    
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path='/login'  element={<Login />} />
              <Route path='/adminpage' element={isLoggedIn === 'true'? <Admin />:<Login />} />
              <Route path='/contactform' element={isLoggedIn === 'true'? <ContactForm />:<Login />} />
              
            </Routes>
          </Router>
     
    </div>
  );
}

export default App;
