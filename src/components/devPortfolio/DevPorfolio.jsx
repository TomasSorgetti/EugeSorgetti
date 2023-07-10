import React from "react";

import DevPorfolio1 from "../../assets/img/devPorfolio1.png";
import DevPorfolio2 from "../../assets/img/devPorfolio2.png";
import DevPorfolio3 from "../../assets/img/devPorfolio3.png";

const DevPorfolio = () => {
  return (
    <article className="py-16 lg:w-10/12 lg:m-auto" id="devportfolio">
      <div>
        <div className="lg:w-full lg:flex lg:justify-end">
          <h4 className="w-full text-center mb-5 text-3xl font-medium font-estrato italic lg:w-52 ">
            04 dev portfolio
          </h4>
        </div>
        <div className="px-6 lg:px-0 lg:w-9/12 lg:mx-auto lg:mt-10">
          <p>
            I created this landing page to be modern, vibrant and futuristic. To
            achieve this, I opted for bold colours and incorporated eye-catching
            neon effects.
          </p>
          <p>
            The typography Days One, used for headlines, conveys a sense of
            strength, impact and boldness with its wide letterforms and thick
            strokes. It’s paired with Bai Jamjuree, a square sans-serif, for a
            clean and contemporary look, ideal for technology.
          </p>
        </div>
      </div>
      <div>
        <div className="hidden lg:block w-11/12 mx-auto lg:mt-10">
          <img src={DevPorfolio1} alt="dev portfolio" />
        </div>
        <div className="sm:my-20 lg:mt-10 lg:flex lg:w-11/12 lg:mx-auto lg:justify-between lg:gap-5">
          <div className="w-full flex justify-center my-5 lg:m-0 lg:w-1/3">
            <img className="" src={DevPorfolio2} alt="dev portfolio" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="hidden lg:block ">
              <img src={DevPorfolio3} alt="dev portfolio" />
            </div>
            <div className="hidden lg:flex lg:justify-center lg:gap-4">
              <div>
                <h5 className="text-4xl font-days font-semibold">DAYS ONE</h5>
                <p className="font-bai font-normal text-xl">Bai Jamjuree Regular</p>
              </div>
              <div className="flex gap-2 items-end">
                <div className="w-[55px] h-[55px] bg-verde"></div>
                <div className="w-[55px] h-[55px] bg-rosa"></div>
                <div className="w-[55px] h-[55px] bg-fuxia"></div>
                <div className="w-[55px] h-[55px] bg-violeta"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 sm:mb-6">
          <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base lg:w-[150px]">
            Check it out
          </button>
          <div className="flex gap-1">
            <p>or see the design on</p>
            <p className="font-semibold underline">Behance</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DevPorfolio;
