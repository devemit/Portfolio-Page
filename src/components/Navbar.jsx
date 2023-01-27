import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiMonzo } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <SiMonzo size={40} />

      <ul className="hidden md:flex font-rob uppercase">
        <Link className="p-4 focus:font-bold focus:outline-none" to="/">
          Home
        </Link>
        <Link className="p-4 focus:font-bold focus:outline-none" to="/About">
          About Me
        </Link>
        <Link className="p-4 focus:font-bold focus:outline-none" to="/Projects">
          Projects
        </Link>
      </ul>
      <div className="block md:hidden z-50" onClick={handleNav}>
        {nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>
      {/* mobile  */}
      <ul
        onClick={() => setNav(false)}
        className={
          nav
            ? "fixed px-6 top-0 left-0 flex flex-col bg-white opacity-90 rounded-b-3xl w-[100%] h-[30%] uppercase ease-in-out duration-500 pt-12 z-10"
            : "fixed top-[-100%] ease-in-out"
        }
      >
        <Link
          className="block py-2 px-6 border-b border-b-gray-300 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block py-2 px-6 border-b border-b-gray-300 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold"
          to="/About"
        >
          About
        </Link>
        <Link
          className="block py-2 px-6 border-b border-b-gray-300 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold"
          to="/Projects"
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
