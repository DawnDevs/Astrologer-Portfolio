import React from 'react'
import Talk from './Talk'

const Booking = () => {
  return (
    <div>
        <div>
            <div>
                <h1 className='font-semibold text-4xl md:text-center px-10 my-4'>Also Booking For</h1>
            </div>
            <div>
                <p className='md:text-center px-10 my-3 font-normal text-gray-600'>Astrologer is here to provide solutions for all your astrological needs. We offer a variety of services ranging <br/>
from horoscopes, astrology consultation, numerology to tarot card reading. </p>
            </div>
            <div>
                <Talk />
            </div>
        </div>
    </div>
  )
}

export default Booking