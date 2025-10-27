import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { close, new_logo, menu } from "../assets";
import { navLinks } from "../constants";
import calendar from "../assets/calendar_icon.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const startY = 84;

  const scrollToStartY = () => {
    window.scrollTo(0, startY);
  };

  const scrollToTop = () => {
    window.scrollBy({
      top: -3000,
      left: 0,
      behavior: "instant",
    });
    scrollToStartY();
    setToggle(false);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      scrollToTop();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    scrollToStartY();
    const timeoutId = setTimeout(scrollToStartY, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <nav className="fade-in w-full flex py-6 z-50 justify-between items-center navbar border-white border-b-[3px] pr-10 bg-[#27272a] bg-opacity-80 sticky top-0">
      <Link to={"/"} onClick={scrollToTop}>
        <img
          src={new_logo}
          alt="nwf"
          className="w-[200px] md:w-[300px] lg:w-[340px] h-[50px] ml-12 pl-4 mr-5 outline-none focus:ring-0 focus:outline-none "
        />
      </Link>

      {/* Desktop menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[15px] lg:text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-4 lg:mr-10"
            } text-white hover:text-secondary`}
          >
            {nav.external ? (
              <a
                href={nav.url || nav.id}
                target="_blank"
                rel="noopener noreferrer"
                className={nav.button ? "btn-class text-[#43BCCD] font-[500] flex items-center lg:gap-2" : ""}
              >
                {nav.title}
                {nav.button && (
                  <img
                    src={calendar}
                    alt="Calendar"
                    className="hidden md:inline-block md:w-6 md:h-6 lg:w-[34px] lg:h-[34px]"
                  />
                )}
              </a>
            ) : (
              <Link to={`/${nav.id}`} onClick={scrollToTop}>
                {nav.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } z-20 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                {nav.external ? (
                  <a
                    href={nav.url || nav.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={nav.button ? "btn-class text-[#43BCCD] font-[500]" : ""}
                  >
                    {nav.button ? "Book a Call" : nav.title}{/*hard coded to be more concise on mobile*/}
                    {nav.button && (
                      <img
                        src={calendar}
                        alt="Calendar"
                        className="w-6 h-6 ml-2 inline-block"
                      />
                    )} 
                  </a>
                ) : (
                  <Link to={`/${nav.id}`} onClick={scrollToTop}>
                    {nav.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
