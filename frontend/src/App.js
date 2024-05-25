import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';
import ContactForm from './components/Contactform';


function App() {
  return (
    <div>
    
         <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path='/admin' element={<Login />} />
              <Route path='/adminpage' element={<Admin />} />
              <Route path='/contactform' element={<ContactForm />} />
              
            </Routes>
          </Router>
     
    </div>
  );
}

export default App;
