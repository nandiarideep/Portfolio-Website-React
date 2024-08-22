import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdInfo } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='bg-[#081b29] w-full flex justify-between items-center font-bold'>
      <h1 className='text-2xl text-white m-6 cursor-pointer'>My Portfolio</h1>
      <div className='flex gap-6 text-white m-6 items-center'>
        
        {/* Home Button */}
        <div className="relative group">
          <NavLink
            exact
            to='/'
            className={({ isActive }) => 
              `text-2xl hover:text-[#00aaff] transition-all duration-200 ${isActive ? 'text-[#00aaff]' : ''}`
            }
          >
            <FaHome />
          </NavLink>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1">
            Home
          </span>
        </div>

        {/* About Button */}
        <div className="relative group">
          <NavLink
            to='/about'
            className={({ isActive }) => 
              `text-2xl hover:text-[#00aaff] transition-all duration-200 ${isActive ? 'text-[#00aaff]' : ''}`
            }
          >
            <MdInfo />
          </NavLink>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block w-[-50px] bg-black text-white text-xs text-center rounded px-2 py-1">
            About
          </span>
        </div>

        {/* Projects Button */}
        <div className="relative group">
          <NavLink
            to='/projects'
            className={({ isActive }) => 
              `text-xl hover:text-[#00aaff] transition-all duration-200 ${isActive ? 'text-[#00aaff]' : ''}`
            }
          >
            <GrProjects />
          </NavLink>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1">
            Projects
          </span>
        </div>

        {/* Contact Button */}
        <div className="relative group">
          <NavLink
            to='/contact'
            className={({ isActive }) => 
              `text-2xl hover:text-[#00aaff] transition-all duration-200 ${isActive ? 'text-[#00aaff]' : ''}`
            }
          >
            <IoIosContact />
          </NavLink>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1">
            Contact 
          </span>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
