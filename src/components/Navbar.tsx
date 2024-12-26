import React from 'react';
import { Menu } from 'lucide-react';
import NavLinks from './NavLinks';
import { container } from '../styles/common';

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav className={`${container} bg-[#020202]/80 backdrop-blur-md rounded-full border border-[#00FFFF]/10`}>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center">
            <span className="text-[#00FFFF] font-bold text-xl">ELITE COMBAT</span>
          </div>
          
          <NavLinks />
          
          <div className="md:hidden">
            <button className="text-[#E0FFFF] hover:text-[#00FFFF]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;