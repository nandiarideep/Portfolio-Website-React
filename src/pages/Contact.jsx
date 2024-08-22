import React from 'react'
import Email from '../components/Email'


const Contact = () => {
  return (
    <div className='m-6 gap-5 text-white flex flex-col items-center'>
      <h1 className='text-2xl md:text-4xl font-bold'>Get in Touch</h1>
      <div className='md:flex md:flex-row flex flex-col gap-10'>
        {/* Left Container */}
        <div className='flex flex-col md:items-start items-center justify-between p-2 border-[3px] rounded-xl'>
          <h2 className='text-3xl text-red-600'>Address</h2>
          <p>1/180, Kataganj, Bakultala, Nadia-741250, West Bengal</p>
          <h2 className='text-3xl text-red-600'>Contact Number</h2>
          <p>7595932236</p>
          <h2 className='text-3xl text-red-600'>Email</h2>
          <p>nandiarideep@gamil.com</p>
        </div>

        {/* Right Container */}
        <div className='flex flex-col flex-grow items-start p-2 border-[3px] rounded-xl'>
          <Email />
        </div>
      </div>
    </div>
  )
}

export default Contact