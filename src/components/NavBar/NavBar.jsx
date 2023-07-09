import React, { useState, useEffect } from "react";
import { BsBehance } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleClick = () => {
    setNav(!nav);
  };

  const closeNav = (prop) => {
    setNav(false);
    setActiveLink(prop)
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const aboutSection = document.getElementById("about");
      const portfolioSection = document.getElementById("portfolio");
      const getInTouchSection = document.getElementById("getintouch");

      if (
        scrollPosition < aboutSection.offsetTop - 30 &&
        activeLink !== "about"
      ) {
        setActiveLink("about");
      } else if (
        scrollPosition + windowHeight > aboutSection.offsetTop + 200 &&
        scrollPosition + windowHeight < getInTouchSection.offsetTop + 200 &&
        activeLink !== "portfolio"
      ) {
        setActiveLink("portfolio");
      } else if (
        scrollPosition + windowHeight > getInTouchSection.offsetTop + 200 &&
        activeLink !== "getintouch"
      ) {
        setActiveLink("getintouch");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", closeNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeNav);
    };
  }, [activeLink]);

  return (
    <nav className="z-[2] flex items-center justify-between flex-wrap p-6 fixed bg-background2 w-full">
      <h3 className="font-semibold">euge sorgetti</h3>
      <div className="block lg:hidden">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto${
          !nav ? " hidden" : ""
        }`}
      >
        <div className="text-sm lg:flex-grow text-center">
          <a
            onClick={() => closeNav("about")}
            href="#about"
            className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
              activeLink === "about" ? "font-semibold italic" : ""
            }`}
          >
            about
          </a>
          <a
            onClick={() => closeNav("portfolio")}
            href="#portfolio"
            className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
              activeLink === "portfolio" ? "font-semibold italic" : ""
            }`}
          >
            portfolio
          </a>
          <a
            onClick={() => closeNav("getintouch")}
            href="#getintouch"
            className={`block mt-4 lg:inline-block lg:mt-0 ${
              activeLink === "getintouch" ? "font-semibold italic" : ""
            }`}
          >
            get in touch
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="http://behance.net/eugesorgetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-4 py-2 leading-none mt-4 lg:mt-0"
          >
            <BsBehance size={"1.5rem"} />
          </a>
          <a
            href="http://www.linkedin.com/in/eugenia-sorgetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-4 py-2 leading-none  mt-4 lg:mt-0"
          >
            <BiLogoLinkedin size={"1.5rem"} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
