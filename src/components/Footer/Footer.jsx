import React from "react";
import { BsBehance } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-darkText text-white flex justify-between px-6 py-10">
      <article>
        <h6 className="text-lg">MENU</h6>
        <ul className="border-l-2 border-white mt-5">
          <li className="pl-4">
            <a href="#">about</a>
          </li>
          <li className="pl-4">
            <a href="#">portfolio</a>
          </li>
          <li className="pl-4">
            <a href="#">get in touch</a>
          </li>
        </ul>
      </article>
      <article>
        <h6 className="text-lg">SOCIALS</h6>
        <div className=" mt-5 flex flex-col gap-4">
          <a className="pl-6" href="#">
            <BsBehance size={"1.5rem"} />
          </a>
          <a className="pl-6" href="#">
            <BiLogoLinkedin size={"1.5rem"} />
          </a>
        </div>
      </article>
    </div>
  );
};

export default Footer;
