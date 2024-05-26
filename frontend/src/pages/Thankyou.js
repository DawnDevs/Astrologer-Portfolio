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
    <div>
      Thank you for booking your slot.
    </div>
  );

};

export default Thankyou;