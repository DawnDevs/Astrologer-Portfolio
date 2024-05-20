import React from 'react'
import PlanetCard from './PlanetCard'
import planet1 from '../assets/planet1.png'
import planet2 from '../assets/planet2.png'
import planet4 from '../assets/planet4.png'
import planet5 from '../assets/planet5.png'
import Saturn from './Saturn'

const Planet = () => {
  return (
    <div>
        <h1 className='font-bold text-black text-3xl text-center pt-10 pb-5 '>Planet Transit</h1>
        <p className='text-black text-base text-center px-80 pb-12  '>Astrologer is here to provide solutions for all your astrological needs. We offer a variety of services ranging
from horoscopes, astrology consultation, numerology to tarot card reading. </p>
        
        <PlanetCard 
        imgSrc={planet1}
        title='Venus Transit' 
        description='Ask what does Venus transit signifies for you, love life, relationship, pleasure, luxuries.' 
        imgWidth='100px' 
        imgHeight='130px'
      />

        <PlanetCard 
        imgSrc={planet2} 
        title='Jupiter Transit' 
        description='Know the impact of Guru transit, expect
        great changes, profits and fulfillment of
        desire.' 
        imgWidth='100px' 
        imgHeight='130px'
      />

        <Saturn />

        <PlanetCard 
        imgSrc={planet4} 
        title='Mercury Transit' 
        description='Discover transit, retrograde of planet
        Mercury how it strengthen trade,
        commerce and speech.'
        imgWidth='100px' 
        imgHeight='130px'
      />

        <PlanetCard 
        imgSrc={planet5} 
        title='Rahu Ketu Transit' 
        description='Discuss Rahu Ketu transit, how it will
        influence you and get remedy to receive
        benefits.' 
        imgWidth='180px' 
        imgHeight='130px'
      />
    </div>
  )
}

export default Planet