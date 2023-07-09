import React from "react";

import DevPorfolio1 from "../../assets/img/devPorfolio1.png";
import DevPorfolio2 from "../../assets/img/devPorfolio2.png";
import DevPorfolio3 from "../../assets/img/devPorfolio3.png";

const DevPorfolio = () => {
  return (
    <article className="py-16" id="devportfolio">
      <div>
        <h4 className="w-full text-center mb-5 text-3xl font-medium font-estrato italic">
          04 dev portfolio
        </h4>
        <div className="px-6">
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
        <div className="hidden">
          <img src={DevPorfolio1} alt="dev portfolio" />
        </div>
        <div className="sm:my-20">
          <div className="w-full flex justify-center my-5">
            <img src={DevPorfolio2} alt="dev portfolio" />
          </div>
          <div>
            <div className="hidden">
              <img src={DevPorfolio3} alt="dev portfolio" />
            </div>
            <div className="hidden">
              <div>
                <h5>DAYS ONE</h5>
                <p>Bai Jamjuree Regular</p>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 sm:mb-6">
          <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base">
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
