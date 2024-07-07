import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../src/assets/aajimg.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Services", link: "/services" },
    { id: 4, title: "Team", link: "/team" },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="relative px-[40px] w-full">
      <div
        className={`flex items-center justify-between px-[40px] py-2 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 `}
      >
        <Link to="/" className="flex items-center space-x-2" alt="AAJ Investment">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </Link>
        <div className="lg:hidden md:hidden">
          {navbar ? (
            <HiOutlineX
              onClick={handleToggleNavbar}
              size={30}
              className="cursor-pointer text-black"
            />
          ) : (
            <HiMenuAlt3
              onClick={handleToggleNavbar}
              size={30}
              className="cursor-pointer text-black"
            />
          )}
        </div>
        <ul className={`hidden md:flex lg:flex space-x-4 py-[10px] px-[20px] rounded-bl-xl rounded-tr-xl ${
          scrolled ? "bg-green-600 text-white" : "bg-transparent text-white"
        }`}>
          {navData.map((data) => (
            <li key={data.id} className="text-xl sm:text-lg">
              <NavLink
                to={data.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-nunito px-3 py-2 rounded-md bg-gray-300"
                    : "hover:border-b-2 hover:border-white text-black"
                }
              > 
                {data.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`lg:hidden md:hidden fixed top-0 left-0 w-full h-full z-40 transition-transform duration-300 ${
          navbar ? "translate-x-0" : "-translate-x-full"
        } bg-green-600 opacity-95`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 fixed overflow-hidden w-full">
          {navData.map((data) => (
            <li key={data.id} className="text-white text-xl sm:text-lg flex  flex-col align-middle justify-center items-center">
              <NavLink
                to={data.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-slate-900 font-nunito px-3 text-center rounded-md"
                    : "hover:border-b-2 hover:border-white text-center"
                }
                onClick={handleToggleNavbar}
              >
                <span className="text-center"> {data.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
