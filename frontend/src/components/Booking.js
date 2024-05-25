import React from 'react'
import Card from './Card'
import lemon from '../assets/lemon.png'
import call from '../assets/call.png'
import id from '../assets/id.png'

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
            <div className='md:flex gap-14 md:px-28 px-2 space-y-5 md:space-y-0 pt-10 '>
      <Card 
          title='Talk & Chat' 
          description='Astrologer talk to you for solving your
          problems by online way.' 
          imgSrc={call} />

        <Card 
          title='Numerology' 
          description='Most of the numerology predictions are 
          based on your number.' 
          imgSrc={lemon} />

        <Card 
          title='Tarot' 
          description='Tarot reading is a powerful form of 
          divination that use an ancient check.' 
          imgSrc={id} />

      </div>

      <div className='md:flex gap-14 md:px-28 px-2 space-y-5 md:space-y-0 pt-10'>
          <Card 
          title='Talk & Chat' 
          description='Astrologer talk to you for solving your
          problems by online way.' 
          imgSrc={call} />

        <Card 
          title='Numerology' 
          description='Most of the numerology predictions are 
          based on your number.' 
          imgSrc={lemon} />

        <Card 
          title='Tarot' 
          description='Tarot reading is a powerful form of 
          divination that use an ancient check.' 
          imgSrc={id} />
        </div>
            </div>
        </div>
    </div>
  )
}

export default Booking