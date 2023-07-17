import React from "react";

//import images
import David from "../../assets/img/05/1.jpg";
import UI from "../../assets/img/05/2.jpg";
import Learning from "../../assets/img/05/3.jpg";

const Design = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-14" id="design">
      <div className="flex flex-col text-3xl font-medium font-estrato text-center">
        <h3>
          05
          <span className="ml-2 italic">design challenges</span>
        </h3>
        <h3 className="italic">& social media</h3>
      </div>
      <div className="w-full overflow-hidden mt-6 sm:mb-10">
        <img className="object-cover w-full" src={David} alt="" />
      </div>
      <div className="pl-5 sm:pl-20">
        <h4 className="text-2xl font-medium font-estrato italic">
          David Carson
        </h4>
        <p className="font-medium">Magazine Design Challenge</p>
      </div>
      <article className="lg:flex lg:pl-20 lg:justify-between">
        <div className="lg:w-1/2">
          <div className="w-11/12 sm:w-9/12 overflow-hidden m-auto mt-10 sm:mb-10 lg:w-9/12 lg:mb-0">
            <img className="object-cover w-full" src={UI} alt="" />
          </div>
          <div className="pl-5 sm:pl-20 lg:pl-14">
            <h4 className="text-2xl font-medium font-estrato italic">
              UI Challenge
            </h4>
            <p className="font-medium">Portfolio App</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="w-11/12 sm:w-9/12 overflow-hidden m-auto mt-10 sm:mb-10 lg:w-full lg:mb-2">
            <img className="object-cover w-full" src={Learning} alt="" />
          </div>
          <div className="pl-5 sm:pl-20 lg:pl-0">
            <h4 className="text-2xl font-medium font-estrato italic">
              Learning spark
            </h4>
            <p className="font-medium">Instagram post templates</p>
          </div>
        </div>
      </article>
      <div className="w-full flex flex-col items-center gap-4 my-10 sm:mt-20">
        <a
          href="https://www.behance.net/eugesorgetti"
          target="blank"
          className="bg-black text-center text-white w-11/12 hover:bg-transparent hover:text-black border-[1px] hover:border-black active:border-2 active:font-bold pt-3 pb-2 rounded font-semibold text-base lg:w-[180px]"
        >
          See on Behance
        </a>
      </div>
    </div>
  );
};

export default Design;
