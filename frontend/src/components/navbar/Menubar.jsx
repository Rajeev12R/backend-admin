import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from "react-icons/io";



const Menubar = () => {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='h-20 w-[90%] mx-auto flex items-center justify-between relative'>
      {/* Left Side: Menu Icon and Logo */}
      <div className='flex items-center space-x-4'>

        {/* Logo */}
        <div className='text-white text-xl'>
          Aangan
        </div>

        <div className="relative flex items-center rounded-3xl w-full sm:w-40 md:w-48 lg:w-60 bg-white p-2">
          <BsSearch className="text-[#66db34] text-xl absolute right-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-5 pr-8 py-1 rounded-3xl bg-white text-gray-700 w-full focus:outline-none sm:text-xs md:text-base"
          />
        </div>


      </div>


      {/* Right Side: Cart and Notification Icons */}
      <div className='flex items-center space-x-2'>
        {/* Cart Icon */}
        <div className='relative'>
          {/* <BiDish className='text-[#66db34] text-2xl cursor-pointer' />
          <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span> Cart badge */}
        </div>

        {/* Notification Icon */}
        <div className='relative'>
          <IoMdNotificationsOutline className='text-[#66db34] text-2xl cursor-pointer' />
          <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span> {/* Notification badge */}
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
