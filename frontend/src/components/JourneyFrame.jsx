import React from 'react';
import Rainbow from '../assets/rainbow.png';
import Hands from '../assets/hands.png';
import Gem from '../assets/gem.png';
import Avatar from '../assets/avatar.png';

const JourneyFrame = () => {
  const items = [
    {
      icon: Rainbow,
      title: 'Confidentiality and Trust',
      text: 'We understand the personal nature of astrology consultations. Rest assured that your information will be treated with the utmost confidentiality and respect.',
      side: 'left',
    },
    {
      icon: Hands,
      title: 'Professionalism and Expertise',
      text: 'Our astrologer brings a wealth of knowledge and experience to each session, ensuring accurate and valuable insights.',
      side: 'right',
    },
    {
      icon: Gem,
      title: 'Spiritual Connection',
      text: "Our astrologer combines astrology's analytical approach with a deep spiritual connection, providing guidance that resonates on a soul level.",
      side: 'left',
    },
    {
      icon: Avatar,
      title: 'Empowerment and Transformation',
      text: "Our ultimate goal is to empower you to live a fulfilling and purpose-driven life. We'll guide you to embrace your authentic self and create positive changes.",
      side: 'right',
    },
  ];

  return (
    <div className="container mx-auto p-4 relative">
      <div className="flex justify-center">
        <div className="border-l-2 border-orange-500 absolute h-full"></div>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex flex-col-reverse md:flex-row ${item.side === 'right' ? 'md:flex-row-reverse' : ''} items-center w-full relative`}
        >
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white border border-orange-500 rounded-md p-4 shadow-md">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
          <div className="w-full md:w-1/12 flex justify-center relative">
            <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10">
              <img src={item.icon} alt={item.title} className="w-12 h-12 animate-spin-slow object-contain" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyFrame;
