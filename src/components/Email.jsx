import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    )
    .then((result) => {
        console.log(result.text);
        alert('Email Sent!');
    }, (error) => {
        console.log(error.text);
        alert('Message Failed to Send.');
    });

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 items-end'>
      <div>
        <label className='px-[10px]'>Name</label>
        <input className='px-[25px] py-[10px] rounded-lg text-black' type="text" name="user_name" required />
      </div>
      <div>
        <label className='px-[10px]'>Email</label>
        <input className='px-[25px] py-[10px] rounded-lg text-black' type="email" name="user_email" required />
      </div>
      <div>
        <label className='px-[10px]'>Message</label>
        <textarea className='px-[25px] py-[10px] rounded-lg text-black' name="message" required />
      </div>
      <div>
        <input className='px-[25px] cursor-pionter bg-black rounded-lg' type="submit" value="Send" />
      </div>
    </form>
  );
};

export default Email;
