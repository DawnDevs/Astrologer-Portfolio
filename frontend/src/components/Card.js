import React from 'react'
import arrow from "../assets/arrow-left.png"

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className='bg-white shadow-2xl   text-center items-center h-72  sm:px-4 sm:py-5 sm:mb-5   lg:px-3 lg:py-3'>
      <div className='flex justify-center'>
        <img src={imgSrc} width={80} height={80} alt={title} />
      </div>
      <div>
        <h1 className='text-2xl font-bold pb-2'>{title}</h1>
        <p className='pb-5'>{description}</p>
        <div className='flex justify-center'>
          <a href='' className='font-bold text-amber-500'>CONTACT</a>
          <img src={arrow} width={20} height={20} alt='arrow' />
        </div>
      </div>
    </div>
  )
}

export default Card