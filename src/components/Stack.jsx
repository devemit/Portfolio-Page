import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Stack = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row p-10">
        <span className=" text-slate-900 text-2xl dark:text-slate-200  mx-4 border-b border-b-slate-900 dark:border-b-slate-200">
          Tech Stack
        </span>
        <div className="flex flex-col md:flex-row p-4">
          <div className="flex">
            <SiJavascript className="m-1 text-yellow-500" size={50} />
            <SiTypescript className="m-1 text-blue-500" size={50} />
            <FaReact className="m-1 text-blue-600" size={50} />
            <AiFillHtml5 className="m-1 text-orange-600" size={55} />
            <DiCss3 className="m-1 text-blue-600" size={55} />
          </div>
          <div className="flex">
            <SiTailwindcss className="m-1 text-blue-500" size={50} />
            <BiGitBranch className="m-1 text-orange-800" size={50} />
            <SiPrisma className="m-1 text-gray-600" size={50} />
            <DiMongodb className="m-1 text-green-600" size={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
