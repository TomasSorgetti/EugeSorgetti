import React from "react";

//imports components
import Time2Talk from "../Time2Talk/Time2Talk";
import Design from "../Design/Design";
import AuraBeauty from "../AuraBeauty/AuraBeauty";
import LearningSpark from "../learningSpark/LearningSpark";
import DevPorfolio from "../devPortfolio/DevPorfolio";
import About from "../About/About"
import GetInTouch from "../GetInTouch/GetInTouch";


//imports images
import leaves from "../../assets/img/Leaves-Flourish.png"
const Porfolio = () => {
  return (
    <div>
      <section>
        <article className="bg-background1 grid place-items-center">
          <About />
        </article>
        <section className="bg-background1 flex flex-col items-center ">
          <h3 className="text-3xl font-medium font-estrato italic mb-10">
            Portfolio
          </h3>
          <article className="w-full mb-20 px-6 flex flex-col gap-4">
            <a href="#time2talk" className="flex gap-2">
              <p>01</p>
              <p>time2talk</p>
            </a>
            <a href="#aurabeauty" className="flex gap-2 pl-10">
              <p>02</p>
              <p>aura beauty</p>
            </a>
            <a href="#learning" className="flex gap-2 pl-20">
              <p>03</p>
              <p>learningspark</p>
            </a>
            <a href="#devportfolio" className="flex gap-2 pl-28">
              <p>04</p>
              <p>dev porfolio</p>
            </a>
            <a href="#design" className="flex gap-2 justify-end">
              <p>05</p>
              <div>
                <p>design challenges</p>
                <p>& social media</p>
              </div>
            </a>
            <img className="mt-16" src={leaves} alt="leaves decoration" />
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
        <section className="bg-background2">
          <Design />
          <GetInTouch />
        </section>
      </section>
    </div>
  );
};

export default Porfolio;
