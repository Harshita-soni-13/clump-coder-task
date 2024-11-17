
import React from 'react';
import { MdOutlineDarkMode, MdKeyboardArrowDown } from 'react-icons/md';
import { CiBellOn  , CiSearch} from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center ">
        <CiSearch  className="text-gray-500 mr-2 text-2xl " />
        <input
          type="text"
          placeholder="Type to search..."
          className=" bg-transparent"
        />
      </div>

      <div className="flex items-center space-x-6">
      
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">

          <AiFillSun  className="text-gray-600 text-2xl"/>
        </button>

        {/* Notification Icon */}
        <div className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        
          <CiBellOn  className="text-gray-600 text-2xl"/>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* Message Icon */}
        <div className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <AiOutlineMessage  className="text-gray-600 text-2xl" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="../../../src/assets/userAvtar.png" 
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium">Thomas Anree</p>
            <p className="text-gray-500">UX Designer</p>
          </div>
          <button className="text-gray-600">
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
