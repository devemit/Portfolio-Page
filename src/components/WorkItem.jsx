import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WorkItem = ({ imgUrl, title, tech, liveSite, seeCode }) => {
  return (
    <div className='py-4 px-10'>
      <LazyLoadImage
        effect='blur'
        src={imgUrl}
        alt={title}
        className='w-full h-36 md:h-60 object-cover rounded-xl shadow-xl cursor-pointer transform transition duration-500 hover:scale-105'
      />

      <h3 className='text-lg md:text-xl ml-1 mb-2 md:mb-3 font-semibold '>{title}</h3>
      <div>
        <p>
          {tech.map((item) => (
            <span className='bg-gray-900 py-1 px-8 ml-1 text-gray-300' key={item}>
              {item}
            </span>
          ))}
        </p>
        <div className='flex items-center justify-center'>
          <a
            className='p-2 text-gray-900 hover:text-slate-800'
            href={seeCode}
            target='_blank'
          >
            <AiFillGithub size={23} />
          </a>
          <a
            className='p-2 text-gray-900 hover:text-slate-800'
            href={liveSite}
            target='_blank'
          >
            <GoLinkExternal size={23} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
