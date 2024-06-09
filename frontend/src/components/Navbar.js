import { useState } from 'react'
import React from 'react'
import Moon from '../assets/moon.png'
import Recline from '../assets/recline.png'
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="mb-3 ">
        <img src={Recline} alt="recline" />
      </div>
      <div className="relative flex justify-between px-5 md:px-10">
        <div className="flex ">
          <img className="absolute" src={Moon} height={50} width={100} alt="moon" />
          <h1 className="text-amber-500  ml-4  mt-8 md:mt-6 text-3xl md:text-4xl font-bold">Astro Sri</h1>
        </div>
        <div className="flex mt-8 md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <nav className="hidden md:flex lg:gap-8 md:gap-4 md:mt-7">
          <a href="/" className="text-black text-xl">
            Home
          </a>
          <a href="/about" className="text-black text-xl">
            About
          </a>
          <a href="#service" className="text-black text-xl">
            Service
          </a>
          <a href="/contact" className="text-black text-xl">
            Contact Us
          </a>
          <button className="text-amber-500 px-2 py-1 bg-stone-800 rounded-sm text-xl">
            Get in touch
          </button>
        </nav>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};


export default Navbar