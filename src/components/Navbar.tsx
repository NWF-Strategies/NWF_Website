import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, polygon, menu } from "../assets";
import { navLinks } from "../constants";
import { useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToTop = () => {
    window.scrollBy({
      top: -3500,
      left: 0,
      behavior: "instant",
    });
    window.scrollTo(0, 0); 
    setToggle(false);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      scrollToTop();
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <nav className='w-full flex py-6 absolute z-50 justify-between items-center navbar border-white border-b-[1px] pr-10 bg-[#27272a] bg-opacity-60 sticky top-0'>
      <Link to={"/"} onClick={scrollToTop}>
        <img src={polygon} alt='nwf' className='w-[124px] h-[32px] mr-5' />
      </Link>

      <Link to={"/"} onClick={scrollToTop}>
        <img src={logo} alt='nwf' className='w-[124px] h-[32px] mr-5' />
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
              font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white hover:text-secondary`}
          >
            <Link to={`/${nav.id}`} onClick={scrollToTop}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } z-20 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex-col flex justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                  font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
              >
                <a href={`${nav.id}`} onClick={scrollToTop}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
