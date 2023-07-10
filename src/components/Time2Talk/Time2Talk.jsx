import React from "react";

import time2talkimg from "../../assets/img/time2talk.png";
import leaves from "../../assets/img/Leaves-Flourish.png"

const Time2Talk = () => {
  const time2talkArr = [
    "1 Project Manager",
    "2 UX/UI Designers",
    "1 Tech Lead",
    "2 Developers",
    "1 QA",
  ];
  return (
    <section id="time2talk" className="lg:mb-32 lg:relative">
      <article className="flex flex-col items-center lg:relative lg:w-6/12 lg:mr-20 lg:ml-auto xl:mr-36 2xl:mr-52">
        <h4 className="w-full text-3xl font-medium font-estrato italic pl-5">
          01 time2talk
        </h4>
        <img
          className="w-9/12 my-10 sm:w-8/12 lg:h-[410px] lg:w-auto lg:absolute lg:left-[-330px] lg:top-[-40px]"
          src={time2talkimg}
          alt="cellphone"
        />
        <div className="">
          <div className="lg:flex lg:gap-10 lg:mt-5">
            <div className="flex flex-col gap-4 mb-5 px-5 lg:pr-0 lg:w-11/12">
              <p>
                Time2Talk is a simple, accessible and on-demand platform to
                improve your Spanish conversation skills with friendly
                experienced Coaches in Latin America and Spain.
              </p>
              <p>
                High schools, universities, libraries and businesses partner
                with Time2Talk to enhance participants’ confidence, fluency and
                cultural proficiency in Spanish.
              </p>
            </div>
            <ul className="text-lightText px-10 mb-8 list-disc lg:w-60 lg:p-0">
              {time2talkArr?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center mb-52 lg:items-start lg:pl-5">
            <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base lg:w-36">
              Contact me
            </button>
            <div className="flex gap-1 my-5">
              <p className="text-lightText">or</p>
              <p className="font-semibold underline">download the app</p>
              <p className="text-lightText">to learn more</p>
            </div>
          </div>
        </div>
      </article>
      <img className="hidden lg:block lg:absolute lg:rotate-90 lg:right-[-70px] lg:bottom-5 lg:w-3/12" src={leaves} alt="leaves decoration" />
    </section>
  );
};

export default Time2Talk;
