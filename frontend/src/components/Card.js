import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import arrow from "../assets/arrow-left.png";

const Card = ({ imgSrc, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value as needed
  });

  return (
    <div className='bg-white shadow-2xl text-center items-center h-72 sm:px-4 sm:py-5 sm:mb-5 lg:px-3 lg:py-3'>
      <div className='flex justify-center' ref={ref}>
        <motion.img
          src={imgSrc}
          width={80}
          height={80}
          alt={title}
          initial={{ opacity: 0, rotateY: 180 }}
          animate={inView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Added 2 seconds delay
        />
      </div>
      <div>
        <h1 className='text-2xl font-bold pb-2'>{title}</h1>
        <p className='pb-5'>{description}</p>
        <div className='flex justify-center items-center space-x-2'>
          <motion.a 
            href='/contact' 
            className='font-bold text-amber-500'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Added 2 seconds delay
            whileHover={{ color: '#D97706', transition: { duration: 0.3 } }}
          >
            CONTACT
          </motion.a>
          <motion.a 
            href='/contact' 
            className='arrow-container'
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Added 2.5 seconds delay for staggered effect
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            <motion.img 
              src={arrow} 
              width={20} 
              height={20} 
              alt='arrow' 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Card;
