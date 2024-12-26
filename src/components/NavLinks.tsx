import React from 'react';
import { buttonStyles } from '../styles/common';

const NavLinks = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        <a href="#home" className="text-white hover:text-[#E0FFFF] transition-colors">Home</a>
        <a href="#programs" className="text-white hover:text-[#E0FFFF] transition-colors">Programs</a>
        <a href="#about" className="text-white hover:text-[#E0FFFF] transition-colors">About</a>
        <a href="#schedule" className="text-white hover:text-[#E0FFFF] transition-colors">Schedule</a>
        <button className={`${buttonStyles.primary} rounded-full`}>
          Join Now
        </button>
      </div>
    </div>
  );
};

export default NavLinks;