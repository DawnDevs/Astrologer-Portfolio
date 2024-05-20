import React from 'react'


const PlanetCard = ({ imgSrc, title, description, imgWidth, imgHeight }) => {
  return (
    <div className='relative top-[50%] mb-14'>
      <div className='pl-60 absolute top-[-30%]'>
        <img
          src={imgSrc}
          style={{ width: imgWidth, height: imgHeight }}
          alt={title}
        />
      </div>
      <div className='border-2 rounded-lg mx-60 px-10 py-10 border-amber-500'>
        <div>
          <h1 className='font-bold text-xl pl-8'>{title}</h1>
          <p className='pl-8'>{description}</p>
        </div>
      </div>
    </div>
  )
}

  

export default PlanetCard