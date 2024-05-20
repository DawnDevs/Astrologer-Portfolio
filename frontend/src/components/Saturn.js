import React from 'react'
import planet3 from "../assets/planet3.png"

const Saturn = () => {
  return (
    <div className='relative top-[50%] mb-14'>
      <div className='sm:pl-12 md:pl-32 lg:pl-52 absolute top-[-40%]'>
        <img
          src={planet3}
          style={{ width: 150, height: 140 }}
          alt='saturn'
        />
      </div>
      <div className='border-2 rounded-lg sm:mx-20 md:mx-40 lg:mx-60 px-10 py-10 border-amber-500'>
        <div>
          <h1 className='font-bold text-xl pl-8'>saturn Transit</h1>
          <p className='pl-8'>Talk about Saturn transit, retrograde,
reveal affects, new opportunities, income
and gains.</p>
        </div>
      </div>
    </div>
  )
}

export default Saturn