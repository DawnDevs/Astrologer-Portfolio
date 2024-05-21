import React from "react";
import Marquee from "react-fast-marquee";
import Aries from '../assets/icons/aries.png';
import Taurus from '../assets/icons/taurus.png';
import Gemini from '../assets/icons/gemini.png';
import Cancer from '../assets/icons/cancer.png';
import Leo from '../assets/icons/leo.png';
import Virgo from '../assets/icons/virgo.png';
import Libra from '../assets/icons/libra.png';
import Scorpio from '../assets/icons/scorpio.png';
import Capricorn from '../assets/icons/capricorn.png';
import Aquarius from '../assets/icons/aquarius.png';
import Pisces from '../assets/icons/pisces.png';
import Sagittarius from '../assets/icons/sagittarius.png';

const Slider = () => {
  return (
    <div className="relative">
      {/* Left overlay for blur effect */}
      <div className="overlay overlay-left"></div>

      {/* Right overlay for blur effect */}
      <div className="overlay overlay-right"></div>

      <Marquee className='overflow-x-hidden p-2' style={{zIndex:0}} direction="right">
        <div className="flex space-x-16 ml-16">
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Aries} alt="Aries" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Taurus} alt="Taurus" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Gemini} alt="Gemini" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Cancer} alt="Cancer" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Leo} alt="Leo" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Virgo} alt="Virgo" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Libra} alt="Libra" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Scorpio} alt="Scorpio" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Capricorn} alt="Capricorn" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Aquarius} alt="Aquarius" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Pisces} alt="Pisces" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Sagittarius} alt="Sagittarius" />
          </div>
        </div>
      </Marquee>

      <Marquee className='overflow-x-hidden' style={{zIndex:0}} direction="left">
        <div className="flex space-x-16 mr-16">
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Aries} alt="Aries" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Taurus} alt="Taurus" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Gemini} alt="Gemini" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Cancer} alt="Cancer" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Leo} alt="Leo" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Virgo} alt="Virgo" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Libra} alt="Libra" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Scorpio} alt="Scorpio" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Capricorn} alt="Capricorn" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Aquarius} alt="Aquarius" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Pisces} alt="Pisces" />
          </div>
          <div className="h-14 md:h-20 w-14 md:w-20">
            <img className="" src={Sagittarius} alt="Sagittarius" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
