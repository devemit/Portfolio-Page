import React from "react";
import WorkItem from "../components/WorkItem";
import works from "../data/works";

const Projects = () => {
  return (
    <div className="py-8 md:grid md:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <WorkItem
          key={work.title}
          imgUrl={work.imgUrl}
          title={work.title}
          tech={work.tech}
          liveSite={work.liveSite}
          seeCode={work.seeCode}
        ></WorkItem>
      ))}
    </div>
  );
};

export default Projects;
