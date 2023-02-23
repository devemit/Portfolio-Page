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
    </div>
  );
};

export default Socials;
