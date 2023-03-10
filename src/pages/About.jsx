import React from "react";
import Socials from "../components/Socials";

const About = () => {
  return (
    <div className="p-6 lg:grid lg:grid-cols-3">
      <div className="rounded-xl shadow-2xl px-6 py-4 text-center max-w-lg mx-auto bg-slate-100 my-8">
        <h1 className="font-semibold text-2xl my-4">About Me</h1>
        <p className="text-gray-700 mt-10">
          Passionate Front-End Developer seeking an entry-level position with
          company to use my skills in coding. Dedicated, organized and
          methodical individual with good interpersonal skills, excellent team
          worker, keen and very willing to learn and develop new skills. I am
          reliable and dependable and often seek new responsibilities within a
          wide range of employment areas. I have an active and dynamic approach
          to work and getting things done.
        </p>
        <Socials />
      </div>
      <div className="rounded-xl shadow-2xl px-10 py-8 text-center bg-slate-100 my-8 max-w-lg mx-auto">
        <h1 className="font-semibold text-2xl my-4 ">What I Am Good At?</h1>
        <h2 className="text-gray-700 font-medium leading-10 ">HTML</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-full bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10 ">CSS</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10 ">JavaScript</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10 ">TypeScript</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10 ">React</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10">Redux</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10 ">TailwindCSS</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
        <h2 className="text-gray-700 font-medium leading-10">Git</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md leading-10">
          <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md leading-10"></div>
        </div>
      </div>
      <div className="rounded-xl shadow-2xl p-4 text-center bg-slate-100 my-8 max-w-lg mx-auto">
        <h1 className="font-semibold text-2xl my-4 ">Design Tools</h1>
        <p class="p-2 mt-10  ">
          Creating elegant designs suited for your needs following design
          theory. Implementing web design and development. Collaborating closely
          with the client through all phases of delivery. Building websites and
          apps that are responsive and usable. Monitoring website performance
          and rectifying front-end-related issues.
        </p>
        <h4 class="text-amber-500 text-lg p-2">Design tools I use</h4>
        <p class="text-gray-700 px-2 font-semibold  text-lg">Photoshop</p>
        <p class="text-gray-700 px-2 font-semibold text-lg">Figma</p>
      </div>
    </div>
  );
};

export default About;
