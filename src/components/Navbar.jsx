import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { SiMonzo } from "react-icons/si";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  mx-auto px-20 bg-white w-full shadow-xl">
      <SiMonzo size={40} className="z-30 text-slate-900" />
      <button
        className="absolute right-0 px-12 text-slate-900 z-50"
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <MdDarkMode size={22} />
        ) : (
          <MdOutlineLightMode size={22} />
        )}
      </button>

      <ul className="hidden md:flex font-rob uppercase">
        <Link
          className="p-4 hover:font-semibold focus:font-bold focus:outline-none text-slate-900"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 hover:font-semibold focus:font-bold focus:outline-none text-slate-900"
          to="/About"
        >
          About Me
        </Link>
        <Link
          className="p-4 hover:font-semibold focus:font-bold focus:outline-none text-slate-900"
          to="/Projects"
        >
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
            ? "fixed px-6 top-0 left-0 flex flex-col bg-white opacity-90 rounded-b-3xl w-[100%] h-[35%] uppercase ease-in-out duration-700 pt-24 z-10"
            : "fixed px-6 top-[-100%] left-0 flex flex-col w-[100%] h-[35%] ease-in-out duration-700 pt-24 z-10"
        }
      >
        <Link
          className="block py-2 px-6 border-b border-b-gray-300 text-slate-900 font-semibold focus:font-bold focus:outline-none hover:font-bold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block py-2 px-6 border-b border-b-gray-300 text-slate-900 font-semibold focus:font-bold focus:outline-none hover:font-bold"
          to="/About"
        >
          About
        </Link>
        <Link
          className="block py-2 px-6 border-b border-b-gray-300 text-slate-900 font-semibold focus:font-bold focus:outline-none hover:font-bold"
          to="/Projects"
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
