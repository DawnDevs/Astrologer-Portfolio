import React from "react";
import Marquee from "react-fast-marquee";
import Aries from "../assets/zodiac/aries.png";
import Taurus from "../assets/zodiac/taurus.png";
import Gemini from "../assets/zodiac/gemini.png";
import Cancer from "../assets/zodiac/cancer.png";
import Leo from "../assets/zodiac/leo.png";
import Virgo from "../assets/zodiac/virgo.png";
import Libra from "../assets/zodiac/libra.png";
import Scorpio from "../assets/zodiac/scorpio.png";
import Capricorn from "../assets/zodiac/capricorn.png";
import Aquarius from "../assets/zodiac/aquarius.png";
import Pisces from "../assets/zodiac/pisces.png";
import Sagittarius from "../assets/zodiac/sagittarius.png";

import Sun from '../assets/planets/sun.png'
import Moon from '../assets/planets/moon.png'
import Mercury from '../assets/planets/mercurius.png'
import Venus from '../assets/planets/venus.png'
import Earth from '../assets/planets/earth.png'
import Mars from '../assets/planets/mars.png'
import Jupiter from '../assets/planets/jupiter.png'
import Saturn from '../assets/planets/saturn.png'
import Uranus from '../assets/planets/uranus.png'
import Neptune from '../assets/planets/neptune.png'
import Pluto from '../assets/planets/pluto.png'
import Eris from '../assets/planets/eris.png'
import Juno from '../assets/planets/juno.png'
import Ceres from '../assets/planets/ceres.png'
import Lillith from '../assets/planets/lillith.png'
import Vesta from '../assets/planets/vesta.png'
import Chiron from '../assets/planets/chiron.png'
import Pallas from '../assets/planets/pallas.png'

const Slider2 = () => {
  return (
    <div className="relative">
      {/* Left overlay for blur effect */}
      <div className="overlay overlay-left"></div>

      {/* Right overlay for blur effect */}
      <div className="overlay overlay-right"></div>
      <Marquee
        className="overflow-x-hidden p-2"
        style={{ zIndex: 0 }}
        direction="left"
      >
        <div className="flex space-x-16 mr-32">
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Aries} alt="Aries" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Taurus} alt="Taurus" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Gemini} alt="Gemini" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Cancer} alt="Cancer" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Leo} alt="Leo" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Virgo} alt="Virgo" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Libra} alt="Libra" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Scorpio} alt="Scorpio" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Capricorn} alt="Capricorn" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Aquarius} alt="Aquarius" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Pisces} alt="Pisces" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Sagittarius} alt="Sagittarius" />
          </div>
        </div>
      </Marquee>
      <Marquee
        className="overflow-x-hidden p-2"
        style={{ zIndex: 0 }}
        direction="right"
      >
        <div className="flex space-x-16 mr-32">
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Sun} alt="Sun" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Moon} alt="Moon" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Mercury} alt="Mercury" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Venus} alt="Venus" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Earth} alt="Earth" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Mars} alt="Mars" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Jupiter} alt="Jupiter" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Saturn} alt="Saturn" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Uranus} alt="Uranus" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Neptune} alt="Neptune" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Pluto} alt="Pluto" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Eris} alt="Eris" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Juno} alt="Juno" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Ceres} alt="Ceres" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Lillith} alt="Lillith" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Vesta} alt="Vesta" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Chiron} alt="Chiron" />
          </div>
          <div className="h-10 md:h-14 w-10 md:w-14">
            <img className="" src={Pallas} alt="Pallas" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Slider2;
