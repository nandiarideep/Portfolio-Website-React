import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-full bg-[#081b29] p-6'>
      <h2 className='text-white capitalize'>© 2024 | All rights reserved.</h2>
      <div className='flex gap-5 text-2xl text-white'>
        {/* LeetCode Icon */}
        <div className="relative group">
          <a href="https://leetcode.com/progress/" target='_blank' rel='noopener noreferrer' className='hover:text-[#f79f1b] transition-all duration-200'>
            <SiLeetcode />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1 transition-all duration-200 font-bold">
            LeetCode
          </span>
        </div>

        {/* GitHub Icon */}
        <div className="relative group">
          <a href="https://github.com/nandiarideep" target='_blank' rel='noopener noreferrer' className='hover:text-[#333] transition-all duration-200'>
            <FaGithub />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1 transition-all duration-200 font-bold">
            GitHub
          </span>
        </div>

        {/* LinkedIn Icon */}
        <div className="relative group">
          <a href="https://www.linkedin.com/in/arideep-nandi" target='_blank' rel='noopener noreferrer' className='hover:text-[#0077b5] transition-all duration-200'>
            <FaLinkedin />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1 transition-all duration-200 font-bold">
            LinkedIn
          </span>
        </div>
        
        {/* Youtube Icon */}
        <div className="relative group">
          <a href="http://www.youtube.com/@nandybhai97" target='_blank' rel='noopener noreferrer' className='hover:text-[#0077b5] transition-all duration-200'>
            <FaYoutube />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1 transition-all duration-200 font-bold">
            Youtube
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
