import React from "react";

import Time2Talk from "../Time2Talk/Time2Talk";

import AuraBeauty from "../AuraBeauty/AuraBeauty";
import LearningSpark from "../learningSpark/LearningSpark";
import DevPorfolio from "../devPortfolio/DevPorfolio";
import About from "../About/About"
import leaves from "../../assets/img/Leaves-Flourish.png"
const Porfolio = () => {
  return (
    <div>
      <section>
        <article className="bg-background1 grid place-items-center">
          <About />
        </article>
        <section className="bg-background1 flex flex-col items-center ">
          <h3 className="text-2xl font-medium">Portfolio</h3>
          <article className="mx-auto mb-20">
            <div>
              <p>01</p>
              <p>time2talk</p>
            </div>
            <div>
              <p>02</p>
              <p>aura beauty</p>
            </div>
            <div>
              <p>03</p>
              <p>learningspark</p>
            </div>
            <div>
              <p>04</p>
              <p>dev porfolio</p>
            </div>
            <div>
              <p>05</p>
              <div>
                <p>design challenges</p>
                <p>& social media</p>
              </div>
            </div>
            <img className="mt-16" src={leaves} alt="leaves decoration image" />
          </article>
          <Time2Talk />
        </section>
        <section>
          <AuraBeauty />
          <LearningSpark />
        </section>
        <section className="bg-background1">
          <DevPorfolio />
        </section>
      </section>
    </div>
  );
};

export default Porfolio;
