import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const Socials = () => {
  return (
    <div className="flex justify-center items-center ml-8 my-20 ">
      <a target="_blank" href="https://www.linkedin.com/in/mitko-iliev/">
        <GrLinkedin
          size={30}
          className="mr-8 text-slate-900 dark:text-slate-200 hover:text-slate-800 dark:hover:text-slate-300"
        />
      </a>
      <a target="_blank" href="https://github.com/devemit">
        <GrGithub
          size={35}
          className="mr-8  text-slate-900 dark:text-slate-200 hover:text-slate-800 dark:hover:text-slate-300"
        />
      </a>
      <button className="py-1 px-2 bg-slate-900 dark:bg-slate-200 rounded hover:bg-slate-800 dark:hover:bg-slate-300   dark:text-slate-900 text-slate-200 mr-8">
        <a target="_blank" href="mitkoCV.pdf">
          Resume
        </a>
      </button>
    </div>
  );
};

export default Socials;
