import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import star from "../assets/star.png";

const NumberRow = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='relative '>
      <div className='top-[-80%] px-32 md:ml-[22%] absolute md:top-[-60%] lg:top-[-60%]'>
        <img src={star} width={200} height={200} alt="Star" />
      </div>
      <div className='flex md:top-0' ref={ref}>
         
        <div className='bg-amber-500 text-center px-2 py-2 sm:px-[1%] md:px-[3%] md:py-[3%] lg:px-[4%] lg:py-4 xl:px-[6%] xl:py-4'>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>
            {inView && <CountUp start={0} end={1000} duration={2.5} />}+
          </h1>
          <h1 className='text-white text-base md:text-xl lg:text-md xl:text-2xl'>Trusted by</h1>
          <h1 className='text-white text-base md:text-xl lg:text-md xl:text-2xl'>clients</h1>
        </div>

        <div className='bg-orange-500 text-center px-2 py-2 sm:px-[3%] md:px-[3%] md:py-[3%] lg:px-[4%] lg:py-4 xl:px-[5%] xl:py-4'>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>
            {inView && <CountUp start={0} end={20} duration={2.5} />}+
          </h1>
          <h1 className='text-white md:text-xl lg:text-md 2xl:text-2xl'>Years of</h1>
          <h1 className='text-white md:text-xl lg:text-md 2xl:text-2xl'>Experience</h1>
        </div>

        <div className='bg-amber-500 text-center px-2 py-2 sm:px-[3%] md:px-[3%] md:py-[3%] lg:px-[4%] lg:py-4 xl:px-[5%] xl:py-4'>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>
            {inView && <CountUp start={0} end={100} duration={2.5} />}+
          </h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Types of</h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Remedies</h1>
        </div>

        <div className='bg-orange-500 text-center px-2 py-2 sm:px-[3%] md:px-[3%] md:py-[3%] lg:px-[4%] lg:py-4 xl:px-[5%] xl:py-4'>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>
            {inView && <CountUp start={0} end={600} duration={2.5} />}+
          </h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Happy</h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Customers</h1>
        </div>

        <div className='bg-amber-500 text-center px-2 py-2 sm:px-[3%] md:px-[3%] md:py-[3%] lg:px-[5%] lg:py-4 xl:px-[4%] xl:py-4'>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>
            {inView && <CountUp start={0} end={16} duration={2.5} />}+
          </h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Supported</h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Partners</h1>
        </div>

        <div className='hidden sm:block bg-orange-500 text-center px-2 py-2 sm:px-[3%] md:px-[3%] md:py-[3%] lg:px-[4%] lg:py-4 xl:px-[5%] xl:py-4'>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl font-bold'>
            {inView && <CountUp start={0} end={1120} duration={2.5} />}+
          </h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Satisfied</h1>
          <h1 className='text-white md:text-xl lg:text-md xl:text-2xl'>Services</h1>
        </div>

      </div>
    </div>
  );
}

export default NumberRow;
