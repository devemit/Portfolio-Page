import React from "react";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center p-10 z-1">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl uppercase font-bold my-20">
            Hey, I'm Mitko Iliev
          </h1>
          <p className=" text-center max-w-3xl md:text-xl">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <div className="py-10">
            <Link
              to="/Projects"
              className="px-12 py-2.5  tracking-wider bg-orange-500 rounded-md shadow-2xl font-semibold uppercase text-lg md:text-2xl md:px-18 md:py-4 hover:bg-orange-600"
            >
              Projects
            </Link>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
