import React from "react";

import DevPorfolio1 from "../../assets/img/devPorfolio1.png";
import DevPorfolio2 from "../../assets/img/devPorfolio2.png";
import DevPorfolio3 from "../../assets/img/devPorfolio3.png";

const DevPorfolio = () => {
  return (
    <article className="py-16 lg:w-10/12 lg:m-auto" id="devportfolio">
      <div>
        <div className="lg:w-full lg:flex lg:justify-end">
          <h4 className="w-full text-center mb-5 text-3xl font-medium font-estrato lg:w-52 ">
            04
            <span className="ml-2 italic">dev portfolio</span>
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
          <img className="w-full" src={DevPorfolio1} alt="dev portfolio" />
        </div>
        <div className="sm:my-20 lg:mt-10 lg:flex lg:w-11/12 lg:mx-auto lg:justify-between lg:gap-5">
          <div className="w-full px-5 flex justify-center my-5 lg:m-0 lg:w-[40%]">
            <img className="w-full" src={DevPorfolio2} alt="dev portfolio" />
          </div>
          <div className="flex flex-col justify-between lg:w-full">
            <div className="hidden lg:block ">
              <img className="w-full" src={DevPorfolio3} alt="dev portfolio" />
            </div>
            <div className="hidden lg:flex lg:justify-start lg:gap-4 xl:gap-12 2xl:gap-16">
              <div>
                <h5 className="text-4xl font-days font-semibold">DAYS ONE</h5>
                <p className="font-bai font-normal text-xl">
                  Bai Jamjuree Regular
                </p>
              </div>
              <div className="flex gap-2 items-end xl:gap-4">
                <div className="w-[55px] h-[55px] bg-verde"></div>
                <div className="w-[55px] h-[55px] bg-rosa"></div>
                <div className="w-[55px] h-[55px] bg-fuxia"></div>
                <div className="w-[55px] h-[55px] bg-violeta"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 flex flex-col items-center gap-4 sm:mb-6">
          <a
            href="https://portfolio-six-mu-29.vercel.app/"
            target="blank"
            className="bg-black text-center text-white w-11/12 hover:bg-transparent hover:text-black border-[1px] hover:border-black active:border-2 active:font-bold pt-3 pb-2 rounded font-semibold text-base lg:w-[150px]"
          >
            Check it out
          </a>
          <div className="flex gap-1">
            <p>or see the design on</p>
            <a
              href="https://www.behance.net/gallery/173177875/Portfolio-Design"
              target="blank"
              className="font-semibold underline"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DevPorfolio;
