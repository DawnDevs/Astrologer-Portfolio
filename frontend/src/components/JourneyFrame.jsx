// JourneyFrame.js
import React from 'react';
import Rainbow from '../assets/rainbow.png'

const steps = [
  {
    icon: Rainbow,
    title: 'Professionalism and Expertise',
    description: 'Our astrologer brings a wealth of knowledge and experience to each session, ensuring accurate and valuable insights.',
  },
  {
    icon: '/path/to/your/icon2.png',
    title: 'Confidentiality and Trust',
    description: 'We understand the personal nature of astrology consultations. Rest assured that your information will be treated with the utmost confidentiality and respect.',
  },
  {
    icon: '/path/to/your/icon3.png',
    title: 'Spiritual Connection',
    description: 'Our astrologer combines astrology\'s analytical approach with a deep spiritual connection, providing guidance that resonates on a soul level.',
  },
  {
    icon: '/path/to/your/icon4.png',
    title: 'Empowerment and Transformation',
    description: 'Our ultimate goal is to empower you to live a fulfilling and purpose-driven life. We\'ll guide you to embrace your authentic self and create positive changes.',
  },
];

const JourneyFrame = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <div className="relative w-1 bg-yellow-500 h-full">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center my-10">
            <div className="relative z-10 w-20 h-20 bg-white border-4 border-yellow-500 rounded-full flex items-center justify-center">
              <img src={step.icon} alt={step.title} className="w-12 h-12" />
            </div>
            <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse justify-end' : 'flex-row justify-start'} w-full px-6`}>
              <div className="bg-white border-2 border-yellow-500 p-4 rounded-lg shadow-lg w-full max-w-xs">
                <h3 className="font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyFrame;
