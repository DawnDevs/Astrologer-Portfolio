import React, { useState } from 'react';
import line from '../assets/Line.png';
import customer from '../assets/customer1.png';
import double from "../assets/double.png";

const testimonials = [
  {
    image: customer, // Directly reference the image
    text: "Astrological reading was incredibly accurate and insightful, providing me with valuable guidance and clarity. Thank you for your professionalism and the profound impact your expertise has had on my life.",
  },
  {
    image: customer, // Directly reference the image
    text: "Another amazing testimonial that gives a lot of positive feedback about the service.",
  },
  {
    image: customer, // Directly reference the image
    text: "Yet another testimonial to showcase the carousel functionality.",
  },
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div>
      <div>
        <h1 className='font-bold text-black text-3xl text-center pt-20 pb-2'>Some Laurels About</h1>
        <div className='flex justify-center pb-10'>
          <img src={line} width={50} height={50} alt="Line" />
        </div>
      </div>

      <div className='grid grid-cols-3 px-40 mb-10'>
        <div className='pl-12'>
          <img src={testimonials[currentTestimonial].image} width={250} height={250} alt="Customer" />
        </div>
        <div className='bg-orange-500 col-span-2 rounded-2xl'>
          <div className='p-3'>
            <img src={double} width={50} height={50} alt="Double Quotes" />
          </div>
          <p className='text-white text-lg pt-5 px-10 pb-8'>
            {testimonials[currentTestimonial].text}
          </p>
        </div>
        <div className='col-span-3 flex justify-center mt-4'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-4 w-4 mx-1 rounded-full ${
                currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
