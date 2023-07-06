import React from "react";

import time2talkimg from "../../assets/img/time2talk.png";

const Time2Talk = () => {
  const time2talkArr = [
    "1 Project Manager",
    "2 UX/UI Designers",
    "1 Tech Lead",
    "2 Developers",
    "1 QA",
  ];
  return (
    <section>
      <article className="flex flex-col items-center">
        <h4 className="w-full text-2xl font-medium">01 time2talk</h4>
        <img
          className="w-9/12 my-8"
          src={time2talkimg}
          alt="time2talk image"
        />
        <div>
          <div>
            <div className="flex flex-col gap-4 mb-5 px-5">
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
            <ul className="text-lightText px-10 mb-8 list-disc">
              {time2talkArr?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center mb-52">
            <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base">
              Contact me
            </button>
            <div className="flex gap-1 my-5">
              <p className="text-lightText">or</p>
              <p className="font-semibold">download the app</p>
              <p className="text-lightText">to learn more</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Time2Talk;
