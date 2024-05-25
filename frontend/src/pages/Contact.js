import React from 'react'
import Calendar from '../components/Calender'
import ContactForm from '../components/Contactform'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='md:flex justify-between md:mx-40 mx-10'>
      <Calendar />
      {/* <ContactForm /> */}
      </div>
      <Booking />
      <Footer />
    </div>
  )
}

export default Contact