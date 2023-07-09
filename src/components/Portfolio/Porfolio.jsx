import React from "react";

//imports components
import Time2Talk from "../Time2Talk/Time2Talk";
import Design from "../Design/Design";
import AuraBeauty from "../AuraBeauty/AuraBeauty";
import LearningSpark from "../learningSpark/LearningSpark";
import DevPorfolio from "../devPortfolio/DevPorfolio";
import About from "../About/About";
import GetInTouch from "../GetInTouch/GetInTouch";

//imports images
import leaves from "../../assets/img/Leaves-Flourish.png";
const Porfolio = () => {
  return (
    <div id="portfolio" className="pt-16">
      <section>
        <article className="bg-background1 grid place-items-center">
          <About />
        </article>
        <section className="bg-background1 flex flex-col items-center">
          <h3 className="text-3xl font-medium font-estrato italic mb-10 lg:text-4xl lg:mb-16">
            Portfolio
          </h3>
          <article className="w-full mx-auto mb-20 px-6 flex flex-col gap-4 lg:relative lg:mb-40">
            <div className="w-full mx-auto sm:w-9/12 flex flex-col gap-2 sm:gap-3 lg:w-10/12 lg:gap-10">
              <a
                href="#time2talk"
                className="flex gap-2 pl-[5%] sm:pl-[15%] lg:pl-[13%] text-xl font-medium font-estrato italic lg:text-2xl"
              >
                <p>01</p>
                <p>time2talk</p>
              </a>
              <a
                href="#aurabeauty"
                className="flex gap-2 pl-[15%] sm:pl-[25%] text-xl font-medium font-estrato italic lg:text-2xl"
              >
                <p>02</p>
                <p>aura beauty</p>
              </a>
              <a
                href="#learning"
                className="flex gap-2 pl-[20%] sm:pl-[35%] text-xl font-medium font-estrato italic lg:text-2xl"
              >
                <p>03</p>
                <p>learningspark</p>
              </a>
              <a
                href="#devportfolio"
                className="flex gap-2 pl-[30%] sm:pl-[45%] lg:pl-[50%] text-xl font-medium font-estrato italic lg:text-2xl"
              >
                <p>04</p>
                <p>dev porfolio</p>
              </a>
              <a
                href="#design"
                className="flex gap-2 pl-[40%] sm:pl-[55%] lg:pl-[60%] text-xl font-medium font-estrato italic lg:text-2xl"
              >
                <p>05</p>
                <div className="lg:flex lg:gap-2">
                  <p>design challenges</p>
                  <p>& social media</p>
                </div>
              </a>
            </div>
            <img
              className="mt-16 w-8/12 mx-auto sm:w-6/12 lg:w-3/12 lg:absolute lg:-rotate-90 lg:left-[-40px] lg:top-16"
              src={leaves}
              alt="leaves decoration"
            />
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
