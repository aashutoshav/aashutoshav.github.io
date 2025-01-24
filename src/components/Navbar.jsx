import React, { useState } from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import cv from '../assets/cv.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Tooltip = ({ text }) => {
  return (
    <div className="absolute bg-black text-white py-1 px-2 rounded-md text-sm">
      {text}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 z-50 w-full bg-neutral-900 backdrop-blur-md border-b border-neutral-700'>
      <div className="flex justify-between items-center p-4 text-white">
        <div className="font-sans text-xl space-x-4 hidden lg:flex">
          {['about', 'technologies', 'projects', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="block h-0.5 bg-amber-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>
        <div className="font-sans text-4xl flex-grow flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='cursor-pointer transition-transform duration-300 hover:text-amber-500 hover:scale-90'
          >
            A
          </Link>
        </div>
        <div className="flex items-center relative">
          <a href="https://drive.google.com/file/d/13ECvQs4YvoTDaZ8PRH8ua1XCt6affIcC/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="mr-4"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img src={cv} alt="Resume" className="h-8 w-auto transition-transform duration-300 hover:scale-110"/>
            {showTooltip && <Tooltip text="Resume" />}
          </a>
          <a href="https://www.linkedin.com/in/aashutosh-av" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src={linkedin} alt="LinkedIn" className="h-8 w-auto transition-transform duration-300 hover:scale-110"/>
          </a>
          <a href="https://github.com/aashutoshav" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-neutral-900 text-white py-4 space-y-4">
          {['about', 'technologies', 'projects', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-xl"
              onClick={toggleMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
