import React,{useState} from "react";
import { BsBehance } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <h3>euge sorgetti</h3>
      <div className="block lg:hidden">
        <button
          onClick={() => handleClick()}
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
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            about
          </a>
          <a
            href="#portfolio"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            portfolio
          </a>
          <a href="#getintouch" className="block mt-4 lg:inline-block lg:mt-0">
            get in touch
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="http://behance.net/eugesorgetti" target="blank"
            className="inline-block text-sm px-4 py-2 leading-none border rounded mt-4 lg:mt-0"
          >
            <BsBehance size={"1.5rem"} />
          </a>
          <a
            href="http://www.linkedin.com/in/eugenia-sorgetti" target="blank"
            className="inline-block text-sm px-4 py-2 leading-none border rounde mt-4 lg:mt-0"
          >
            <BiLogoLinkedin size={"1.5rem"} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
