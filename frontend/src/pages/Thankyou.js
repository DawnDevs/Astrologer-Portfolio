import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Thankyou = () => {
  const [slotId, setSlotId] = useState();
  const urlvar = 'https://astrologer-portfolio-server.vercel.app';

  useEffect(() => {
    const storedSlotId = localStorage.getItem('slotId');
    setSlotId(storedSlotId);
  }, []);

  const bookSlot = async () => {
    try {
      const response = await axios.put(`${urlvar}/api/slots/book/${slotId}`);
      if (response.status === 200) {
        alert("Slot Successfully Booked");
      }
    } catch (error) {
      console.error('Error booking slot:', error);
      if (error.response && error.response.status === 400) {
        alert('Slot is already booked');
      } else {
        alert('Server error. Please try again later.');
      }
    }
  };

  useEffect(() => {
    if(slotId){
      bookSlot();
    }
  }, [slotId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center max-w-lg mx-auto relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
          Thank you for booking your slot.
        </h2>
       
        <div className="w-full flex justify-center mt-6">
          <svg className="animate-bounce w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {/* Animated SVGs */}
        <a href='/' className=''><button className='bg-amber-500 px-2 py-1 rounded-lg text-xl font-semibold'>Continue</button></a>
      </div>
    </div>
  );

};

export default Thankyou;