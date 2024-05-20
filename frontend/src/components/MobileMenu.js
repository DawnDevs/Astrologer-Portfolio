// src/MobileMenu.js
import React from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-end  p-4">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center mt-8 space-y-4">
        <a href="/" className="text-black text-xl" onClick={onClose}>
          Home
        </a>
        <a href="/about" className="text-black text-xl" onClick={onClose}>
          About
        </a>
        <a href="#service" className="text-black text-xl" onClick={onClose}>
          Service
        </a>
        <a href="/contact" className="text-black text-xl" onClick={onClose}>
          Contact Us
        </a>
        <button
          className="text-amber-500 px-2 py-1 bg-stone-800 rounded-sm text-xl"
          onClick={onClose}
        >
          Get in touch
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;
