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
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* mobile  */}
      <ul
        onClick={() => setNav(false)}
        className={
          nav
            ? "fixed font-rob left-0 top-0 w-[50%] z-10 border-r border-r-gray-300 h-full uppercase bg-gradient-to-r from-slate-500 to-yellow-100 ease-in-out duration-500 pt-24"
            : "fixed left-[-100%]"
        }
      >
        <Link
          className="block py-2 px-6 border-b border-gray-300 focus:font-bold focus:outline-none hover:font-bold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block py-2 px-6 border-b border-gray-300 focus:font-bold focus:outline-none hover:font-bold"
          to="/About"
        >
          About
        </Link>
        <Link
          className="block py-2 px-6 border-b border-gray-300 focus:font-bold focus:outline-none hover:font-bold"
          to="/Projects"
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
