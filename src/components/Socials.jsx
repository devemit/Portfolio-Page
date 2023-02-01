import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const Socials = () => {
  return (
    <div className="flex justify-center items-center ml-8 my-20 ">
      <a target="_blank" href="https://www.linkedin.com/in/mitko-iliev/">
        <GrLinkedin size={30} className="mr-8 hover:text-orange-500" />
      </a>
      <a target="_blank" href="https://github.com/devemit">
        <GrGithub size={35} className="mr-8 hover:text-orange-500" />
      </a>
      <a
        href="mitkocv.pdf"
        target="_blank"
        rel="noreferrer"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Socials;
