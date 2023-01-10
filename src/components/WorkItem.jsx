import React from "react";

const WorkItem = ({ imgUrl, title, tech }) => {
  return (
    <div className="py-4 px-10">
      <a target="_blank" href="https://github.com/devemit?tab=repositories">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-60 object-cover rounded-xl shadow-xl cursor-pointer transform transition duration-500 hover:scale-105"
        />
      </a>

      <h3 className="text-lg md:text-xl ml-1 mb-2 md:mb-3 font-semibold ">
        {title}
      </h3>
      <div>
        <p>
          {tech.map((item) => (
            <span
              className="bg-gray-900 py-1 px-8 ml-1 text-gray-300"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
