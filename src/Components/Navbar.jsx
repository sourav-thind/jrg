import React, { useState } from 'react';
import { JRGLOGO } from '../Utils';
import { navLists } from '../Constants';
import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger and close icons
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="py-5 sm:px-10 px-5 z-10 top-0 left-0 w-full bg-Color2 relative">
      <nav className="flex items-center justify-between">
        <img
          src={JRGLOGO}
          alt="JRG Birmingham"
          width={72}
          height={56}
          className=""
        />

        {/* Full navigation for md and larger screens */}
        <div className="hidden md:flex space-x-5">
          <div className="flex justify-center space-x-8 mx-6 ">
            <a href="">
              <FaInstagram className="h-6 w-6" />
            </a> 
            <a href="https://www.tiktok.com/@jrgkitchenbedroom">
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-lg font-semibold text-gray-800 hover:text-black hover:scale-110 transition-all cursor-pointer"
            >
              <a
                href={`#${nav}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(nav);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {nav}
              </a>
            </div>
          ))}
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu options */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4">
          {navLists.map((nav) => (
            <a
              key={nav}
              href={`#${nav}`}
              className="block text-lg font-semibold text-gray-800 hover:text-black"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false); // Close the menu after click
                const element = document.getElementById(nav);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {nav}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
