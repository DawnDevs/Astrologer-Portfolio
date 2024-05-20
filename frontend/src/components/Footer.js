import React from 'react'

const Footer = () => {
  return (
    <div className='bg-amber-500 sm:px-4 md:px-10 lg:px-16'>
        <div className='   sm:flex justify-between  sm:pt-8 sm:items-center sm:pb-6 md:pb-10 lg:pb-16'>
            <h1 className='text-white font-bold text-3xl'>Astronautica</h1>
            <p className='text-black bg-white rounded-lg sm:px-2 lg:py-2 lg:text-3xl'>Do call and whatsapp on this Number <span className='font-bold md:text-xl lg:text-3xl'>+91 7845443491</span></p>
        </div>

        <div className='sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4  sm:gap-10 lg:pb-10'>
            <div className='sm:hidden lg:block'>
                  My expertise and knowledge in this field has helped more than 10,000 of my clients for the last fifteen years. I have been awarded with several awards like Jyotish Ratna, Jyotish Bhushan & Others.
            </div>
            <div>
                <h1 className='font-bold sm:pb-2'>CHANDIGARH OFFICE:</h1>
                <p>501 2nd Floor Near Syndicate Bank,Sector 70, Sahibzada Ajit Singh NagarChandigarh, 160059</p>
            </div>
            <div>
                <h1 className='font-bold sm:pb-2'>DELHI OFFICE</h1>
                <p>C-D Block, Shivaji Vihar , Raghubir Nagar New Delhi, Delhi, 110027</p>
            </div>
            <div>
                <h1 className='font-bold sm:pb-2'>DISCLAIMER</h1>
                <p> There are no guarantees that every person using this service will get their desired results for sure. Astrological results depend on a lot of factors and the results may vary from person to person.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer