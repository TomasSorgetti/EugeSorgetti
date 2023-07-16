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
import leaves from "../../assets/img/Leaves-Flourish.svg";
import bannerMobile from "../../assets/img/banner/bannerMobile.png";
import bannerDesk from "../../assets/img/banner/bannerDesk.png";
const Porfolio = () => {
  return (
    <div id="portfolio" className="pt-16">
      <section>
        <article className="relative h-[450px] bg-banner flex w-full justify-center lg:h-[550px] ">
          <div className="lg:hidden w-[75%] h-[75%] absolute bottom-[-30px] sm:bottom-[15px] md:bottom-[-15px]">
            <div className="flex flex-col text-white text-center mb-3">
              <h1 className="text-4xl">Hi! I’m Euge</h1>
              <p className="text-base">UX/UI & Web Designer</p>
            </div>
            <img className="mx-auto" src={bannerMobile} alt="banner mobile" />
          </div>
          <img
            className="hidden lg:block lg:absolute lg:top-6 w-full"
            src={bannerDesk}
            alt="banner desktop"
          />
        </article>
        <article className="bg-background1 grid place-items-center pt-32 lg:pt-40 xl:pt-[350px] 2xl:pt-[500px]">
          <About />
        </article>
        <section className="bg-background1 flex flex-col items-center">
          <h3 className="text-3xl font-medium font-estrato italic mb-10 lg:text-4xl lg:mb-16">
            Portfolio
          </h3>
          <article className="w-full mx-auto mb-20 px-6 flex flex-col gap-4 lg:relative lg:mb-40">
            <div className="w-full mx-auto sm:w-9/12 flex flex-col gap-3 sm:gap-3 lg:w-10/12 lg:gap-10">
              <a
                href="#time2talk"
                className="flex gap-1 pl-0 sm:pl-[15%] lg:pl-[5%] xl:pl-[20%] text-xl font-medium font-estrato lg:text-2xl"
              >
                <p>01</p>
                <p className="italic">time2talk</p>
              </a>
              <a
                href="#aurabeauty"
                className="flex gap-1 pl-[40px] sm:pl-[25%] lg:pl-[15%] xl:pl-[30%] text-xl font-medium font-estrato lg:text-2xl"
              >
                <p>02</p>
                <p className="italic">aura beauty</p>
              </a>
              <a
                href="#learning"
                className="flex gap-1 pl-[75px] sm:pl-[35%] lg:pl-[28%]  xl:pl-[40%] text-xl font-medium font-estrato lg:text-2xl"
              >
                <p>03</p>
                <p className="italic">learningspark</p>
              </a>
              <a
                href="#devportfolio"
                className="flex gap-1 pl-[110px] sm:pl-[45%] lg:pl-[45%] xl:pl-[50%] text-xl font-medium font-estrato  lg:text-2xl"
              >
                <p>04</p>
                <p className="italic">dev porfolio</p>
              </a>
              <a
                href="#design"
                className="flex gap-1 pl-[140px] sm:pl-[55%] lg:pl-[60%] text-xl font-medium font-estrato  lg:text-2xl"
              >
                <p>05</p>
                <div className="lg:flex lg:gap-2 italic">
                  <p>design challenges</p>
                  <p>& social media</p>
                </div>
              </a>
            </div>
            <img
              className="mt-16 w-8/12 mx-auto sm:w-6/12 lg:w-3/12 lg:absolute lg:-rotate-90 lg:left-[-40px] lg:top-28"
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
