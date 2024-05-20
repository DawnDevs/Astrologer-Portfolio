import React from 'react'
import Card from './Card'
import lemon from '../assets/lemon.png'
import id from '../assets/id.png'
import call from '../assets/call.png'

const Services = () => {
  return (
    <div className=''>
        <h1 className='font-bold text-black text-3xl text-center pt-10 pb-5'>Our Services</h1>
        <p className='text-black text-base text-center px-80 pb-5'>Astrologer is here to provide solutions for all your astrological needs. We offer a variety of services ranging
from horoscopes, astrology consultation, numerology to tarot card reading. </p>
        <div className='flex gap-14 px-28 '>
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

        <div className='flex gap-14 px-28  pt-10'>
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
  )
}

export default Services