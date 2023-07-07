import React from 'react'
import { BsBehance } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";



const NavBar = () => {
  return (
    <nav className="hidden lg:flex justify-between py-5 px-20">
      <h3>euge sorgetti</h3>
      <ul className="flex gap-4">
        <li>
          <a>about</a>
        </li>
        <li>
          <a>portfolio</a>
        </li>
        <li>
          <a>get in touch</a>
        </li>
      </ul>
      <div className="flex gap-1">
        <a href="#">
          <BsBehance size={"1.5rem"} />
        </a>
        <a href="#">
          <BiLogoLinkedin size={"1.5rem"} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar