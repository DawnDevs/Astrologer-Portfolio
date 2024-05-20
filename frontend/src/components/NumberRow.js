import React from 'react'
import star from "../assets/star.png"

const NumberRow = () => {
  return (
    <div className='relative '>
        <div className='ml-[36%] absolute md:top-[-60%]   xl:top-[-76%]'>
            <img src={star} width={200} height={200}>
            </img>
        </div>
    <div className='  flex pt-10 md:pt-0 '>
        <div className='bg-amber-500 text-center px-2 py-2  md:px-[3%] md:py-[3%] lg:px-[2%] lg:py-3  xl:px-[4%] xl:py-4'>
            <h1 className='text-white  md:text-xl  lg:text-md xl:text-2xl font-bold'>1000+</h1>
            <h1 className='text-white  md:text-xl lg:text-md xl:text-2xl'>Trusted by</h1>
            <h1 className='text-white  md:text-xl lg:text-md xl:text-2xl'>clients</h1>
        </div>
        <div className='bg-orange-500 text-center px-2 py-2 md:px-[3%] md:py-[3%] lg:px-[2%] lg:py-3 xl:px-[5%] xl:py-4'>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>20+</h1>
            <h1 className='text-white md:text-xl lg:text-md 2xl:text-2xl'>Years of</h1>
            <h1 className='text-white md:text-xl lg:text-md 2xl:text-2xl'> Experience</h1>
        </div>
        <div className='bg-amber-500 text-center px-2 py-2 md:px-[3%] md:py-[3%] lg:px-[2%] lg:py-3 xl:px-[5%] xl:py-4'>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>100+</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Types of</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Remidies</h1>
        </div>
        <div className='bg-orange-500 text-center px-2 py-2 md:px-[3%] md:py-[3%] lg:px-[2%] lg:py-3 xl:px-[5%] xl:py-4'>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>600+</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Happy</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Customers</h1>
        </div>
        <div className='bg-amber-500 text-center px-2 py-2 md:px-[3%] md:py-[3%] lg:px-[2%] lg:py-3 xl:px-[5%] xl:py-4'>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>16+</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Supported</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Partners</h1>
        </div>
        <div className='bg-orange-500 text-center px-2 py-2 md:px-[3%] md:py-[3%] lg:px-[2%] lg:py-3 xl:px-[5%] xl:py-4'>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>1120+</h1>
            <h1 className='text-white md:text-xl  lg:text-md xl:text-2xl'>Satisfied</h1>
            <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Services</h1>
        </div>
    </div>
    </div>
  )
}

export default NumberRow