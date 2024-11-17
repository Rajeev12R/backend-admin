import React, { useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='h-16 md:h-20 w-[90%] mx-auto flex items-center justify-between relative'>
      {/* Left Side: Menu Icon and Logo */}
      <div className='flex items-center space-x-4'>
        {/* Menu Icon */}
        <div className=''>
          <CiMenuBurger className='text-[#66db34] text-2xl cursor-pointer' onClick={toggleDropdown} />
        </div>

        {/* Logo */}
        <div className='text-white text-lg md:text-xl'>
          Aangan
        </div>
      </div>

      {/* Right Sidebar / Dropdown */}
      {isDropdownOpen && (
        <div className="fixed left-0 top-0 h-full w-64 bg-[#6765653b] shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out">
          <div className='mb-10 flex justify-between items-center'>
            <img src={logo} className='w-10 h-10' alt="Logo" />
            <IoIosCloseCircleOutline
              className="h-8 w-8 text-[#66db34] cursor-pointer"
              onClick={toggleDropdown}
            />
          </div>
          <ul className="space-y-4">
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-lg rounded">Home</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-lg rounded">Menu</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-lg rounded">Gallery</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-lg rounded">About</a></li>
            <li><a href="#" className="block hover:text-gray-700 text-gray-100 p-2 text-lg rounded">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Right Side: Notification Icon */}
      <div className='md:flex items-center space-x-4'>
        <div className='relative'>
          <IoMdNotificationsOutline className='text-[#66db34] text-2xl cursor-pointer' />
          <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
