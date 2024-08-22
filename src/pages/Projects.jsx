  import React from 'react'
  import wlogo from '../assets/wlogo.png';
  import tlogo from '../assets/tlogo.png';
  import { FaGithub } from 'react-icons/fa';

  const Projects = () => {
    return (
      <>
        <div className='flex flex-col gap-3 md:items-start items-center min-h-screen m-5'>
          <h3 className='text-2xl font-semibold text-red-500'>Projects</h3>
          <ul className='md:flex md:items-center md:items-center text-white text-xl gap-5'>
            <li className='flex flex-col items-center'>
              <a href="https://66c42e8c23340eb2da023f86--weather-vue-react.netlify.app/" target='blank'>
                <img src={wlogo} className='h-[200px] rounded-3xl hover:opacity-70 duration-300' alt="" />
              </a>
              <div className='flex items-center gap-5'>
                <h2>Weather Vue</h2>
                  <div className="relative group">
                    <a href="https://github.com/nandiarideep" target='_blank' rel='noopener noreferrer' className='hover:text-[#333] transition-all duration-200'>
                      <FaGithub />
                    </a>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1 transition-all duration-200 font-bold">
                      GitHub Link
                    </span>
                  </div>                  
              </div>
            </li>
            <li className='flex flex-col items-center'>
              <a href="https://todo-react-notes.netlify.app/" target='blank'>
                <img src={tlogo} className='h-[200px] rounded-3xl hover:opacity-70 duration-300' alt="" />
              </a>
              <div className='flex items-center gap-5'>
                <h2>Notes App</h2>
                  <div className="relative group">
                    <a href="https://github.com/nandiarideep" target='_blank' rel='noopener noreferrer' className='hover:text-[#333] transition-all duration-200'>
                      <FaGithub />
                    </a>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded px-2 py-1 transition-all duration-200 font-bold">
                      GitHub Link
                    </span>
                  </div>                  

              </div>
            </li>
        </ul>
    </div>
    </>
    )
  }

  export default Projects