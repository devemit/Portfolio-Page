import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

const Socials = () => {
  return (
    <div className='flex justify-center items-center ml-8 my-20 '>
      <a target='_blank' href='https://www.linkedin.com/in/mitko-iliev/'>
        <GrLinkedin size={30} className='mr-8 hover:text-orange-500' />
      </a>
      <a target='_blank' href='https://github.com/devemit'>
        <GrGithub size={35} className='mr-8 hover:text-orange-500' />
      </a>
      <a
        target='_blank'
        href='https://account.microsoft.com/profile/'
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
      >
        Resume
      </a>
    </div>
  );
};

export default Socials;
