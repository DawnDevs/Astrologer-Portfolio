// src/LandingPage.js
import React from 'react';

import wheel from '../assets/wheel.png';
import '../styles/wheelAnimation.css'; // Import CSS file for wheel animation

const LandingPage = () => {
  return (
    <div>
      <main className="pt-16 xl:mb-4 lg:mb-10 xl:pb-5 md:flex justify-between md:pl-5 md:pr-5 lg:pl-16 lg:pr-10 md:items-center md:my-4">
        <div className="md:flex-1  px-10 lg:pt-5">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-6">
            Got Any Questions?
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black mb-2 md:mb-5">
            CONSULT WITH ASTROLOGER
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-4xl mb-2 md:mb-5 font-bold text-amber-500">
            GET 50% CASHBACK ON
          </h1>
          <h1 className='text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4'>
            YOUR FIRST SESSION.
          </h1>
          <button className="bg-black text-white mt-8 px-4 mb-5 py-2 text-sm lg:px-8 lg:py-4 rounded-lg hover:bg-gray-700">
            CONNECT
          </button>   
        </div>
        <div className="mt-5 md:mt-0  md:flex-1 hidden md:flex justify-center">
          <img src={wheel} height={500} width={500} alt="Astrology wheel" className="wheel-animation" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
