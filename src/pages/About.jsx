import React from "react";
import Stack from "../components/Stack";

const About = () => {
  return (
    <>
      <Stack />
      <div className="p-6 flex flex-col lg:flex-row gap-4 max-w-6xl mx-auto h-[1000px] ">
        <div className="max-h-[550px] rounded-xl shadow-2xl px-6 py-4 text-center max-w-lg mx-auto dark:bg-[#1f1b24] bg-white my-8">
          <h1 className="font-semibold text-2xl my-4 dark:text-slate-200  text-slate-900 ">
            About Me
          </h1>
          <p className=" dark:text-slate-200 text-slate-900 mt-10">
            Passionate Front-End Developer seeking an entry-level position with
            company to use my skills in coding. Dedicated, organized and
            methodical individual with good interpersonal skills, excellent team
            worker, keen and very willing to learn and develop new skills. I am
            reliable and dependable and often seek new responsibilities within a
            wide range of employment areas. I have an active and dynamic
            approach to work and getting things done.
          </p>
        </div>
        <div className="max-h-[550px] rounded-xl shadow-2xl p-4 text-center dark:bg-[#1f1b24] bg-white my-8 max-w-lg mx-auto">
          <h1 className="font-semibold text-2xl my-4 dark:text-slate-200  ">
            Design Tools
          </h1>
          <p class="p-2 mt-10  dark:text-slate-200 text-slate-900 ">
            Creating elegant designs suited for your needs following design
            theory. Implementing web design and development. Collaborating
            closely with the client through all phases of delivery. Building
            websites and apps that are responsive and usable. Monitoring website
            performance and rectifying front-end-related issues.
          </p>
          <h4 class="text-amber-500 text-lg p-2 ">Design tools I use:</h4>
          <p class=" px-2 font-semibold  text-lg dark:text-slate-200 text-slate-900 ">
            Photoshop
          </p>
          <p class=" px-2 font-semibold text-lg dark:text-slate-200 text-slate-900 ">
            Figma
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
