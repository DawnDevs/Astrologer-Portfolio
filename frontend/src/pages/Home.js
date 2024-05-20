import React from 'react'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import NumberRow from '../components/NumberRow'
import Services from '../components/Services'
import Planet from '../components/Planet'
import Talk from '../components/Talk'
import TestimonialSection from '../components/Testamonial'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <LandingPage />
        <NumberRow />
        <Services />
        <Planet />
        <Talk />
        <TestimonialSection />
        <Footer />
      
    </div>
  )
}

export default Home