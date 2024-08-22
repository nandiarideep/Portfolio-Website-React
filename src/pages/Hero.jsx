import React from 'react'
import img from '../assets/img.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import resume from '../assets/resume.pdf'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Web Designer', 'Gamer', 'Youtuber'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='text-white m-6 md:flex md:flex-row flex flex-col justify-center items-center gap-10'>
      {/* About me */}
        <img src={img} alt="img" className='md:h-[400px] md:w-[400px] h-[200px] w-[200px] border-[5px] rounded-[50%]' />
          <div className='ml-[20px] flex flex-col items-center gap-2'>
            <h1 className='text-2xl md:text-4xl font-bold'>
              Hi I'm Arideep Nandi <span></span>
            </h1>
            <span style={{fontWeight: 'bold', color: 'red', fontSize: '30px'}}> 
              {text}
              <span style={{color: 'white', fontWeight: 'bold', fontSize: '30px'}}>
                <Cursor />
              </span>
            </span>
          <p>Email : <a href="nandiarideep@gmail.com" className='underline'>nandiarideep@gmail.com</a></p>
          
          {/* Resume Download Button */}
          <button className='px-[30px] py-[10px] bg-blue-800 hover:bg-blue-600 rounded-3xl'>
            <a href={resume} target='blank'>Download Resume</a>
          </button>
        </div>
        
    </div>
  )
}

export default Hero
