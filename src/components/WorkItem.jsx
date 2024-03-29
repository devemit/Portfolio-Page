import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const WorkItem = ({ imgUrl, title, tech, liveSite, seeCode }) => {
  return (
    <div className="p-8 text-center w-full h-full">
      <LazyLoadImage
        effect="blur"
        src={imgUrl}
        alt={title}
        className="object-cover rounded-md shadow-xl cursor-pointer transform transition duration-500 hover:scale-105"
      />

      <h3 className="text-lg md:text-xl text-center md:mb-3 font-semibold text-slate-900 dark:text-slate-200 ">
        {title}
      </h3>
      <div className="text-center">
        <p>
          {tech.map((item) => (
            <span
              className="bg-slate-900 dark:bg-slate-200 py-1 px-5 ml-1 rounded text-slate-200 dark:text-slate-900"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
        <div className="flex items-center justify-center">
          <a
            className="p-2 text-slate-900 dark:text-slate-200"
            href={seeCode}
            target="_blank"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            className="p-2 text-slate-900 dark:text-slate-200"
            href={liveSite}
            target="_blank"
          >
            <GoLinkExternal size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
