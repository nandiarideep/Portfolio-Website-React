import React from 'react'
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const About = () => {
  return (
    <>
      {/* tech stack */}
      <section className='flex flex-col items-center text-white'>
        <h3 className='text-2xl md:text-4xl font-semibold text-red-600'>Tech Stack</h3>
        <p className='text-lg md:text-2xl'>These are the tools and tech I often use -</p>
        <ul className='flex flex-col items-center'>
          <li className='flex items-center'>Languages - Javascript<IoLogoJavascript/> / Python<FaPython/></li>
          <li className='flex items-center'>Framework - React JS<FaReact/></li>
          <li className='flex items-center'>CSS - TailwindCSS<SiTailwindcss/> / Bootstrap<FaBootstrap/></li>
          <li className='flex items-center'>Others - Git<FaGitAlt/>/ Github<FaGithub/></li>
        </ul>
      </section>    
      
      {/* work experience */}
      <section className='flex flex-col items-center'>
        <h3 className='text-2xl md:text-4xl font-semibold text-red-600'>Work Experience</h3>
        <ul className=''>
          <li>
            <h2>Web Developer <span className='font-semibold text-xl text-[#f6ae43]'>@Cipherbyte Technologies</span></h2>
            <p>
              (June 2024 - July 2024)
            </p>
          </li>
          <li>
            <h2>Python Trainee <span className='font-semibold text-xl text-[#f6ae43]'>@Navigators Software</span></h2>
            <p>
              (Jan 2024 - Feb 2024)
            </p>
          </li>
          <li>
            <h2>React Developer Intern <span className='font-semibold text-xl text-[#f6ae43]'>@Imeet Technology</span></h2>
            <p>
              (Jun 2023 - Sep 2023)
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default About