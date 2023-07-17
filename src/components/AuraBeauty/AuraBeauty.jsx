import React from "react";
import AuraBeautyImg from "../../assets/img/auraBeauty.png";
import AuraBeautyMobile from "../../assets/img/auraBeautyMobile.png";

const AuraBeauty = () => {
  const auraBeautyArr = [
    "1 Project Manager",
    "2 UX/UI Designers",
    "1 Tech Lead",
    "2 Developers",
    "1 QA",
  ];
  return (
    <div className="relative" id="aurabeauty">
      <div className="flex flex-col items-center absolute -top-44 left-[20%] sm:left-[34%] gap-4 lg:-top-56 lg:left-[12%] xl:left-[20%] 2xl:left-[24%]">
        <h4 className="text-3xl font-medium font-estrato lg:hidden">
          02
          <span className="ml-2 italic">Aura Beauty</span>
        </h4>
        <img
          className="hidden lg:block 2xl:w-[800px]"
          src={AuraBeautyImg}
          alt="auraBeauty: computer"
        />
        <img
          className="lg:hidden"
          src={AuraBeautyMobile}
          alt="auraBeauty: cellphone"
        />
      </div>
      <div className="lg:flex lg:flex-col lg:items-center lg:w-7/12 lg:mx-auto">
        <h4 className="text-3xl font-medium font-estrato hidden lg:flex lg:w-full lg:pt-80 lg:mb-5 lg:mt-10 lg:pl-6">
          02
          <span className="italic ml-2">Aura Beauty</span>
        </h4>
        <div className="lg:flex lg:justify-start lg:h-[120px]">
          <p className="pt-72 px-6 mb-6 lg:pt-0 lg:w-6/12 xl:pt-5">
            Custom-fit manicures, smart-sizing powered by AI. I participated in
            the creation of the web app and Shopify, worked on components and
            the UI Kit.
          </p>
          <div className="hidden lg:block lg:h-full lg:bg-gray-100 lg:w-1"></div>
          <ul className="px-10 text-lightText list-disc lg:px-0 lg:w-40 lg:ml-20">
            {auraBeautyArr?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center my-8 w-full lg:mt-20">
        <a
          href="https://aura.beauty/"
          target="blank"
          className="bg-black text-center text-white w-11/12 hover:bg-transparent hover:text-black border-[1px] hover:border-black active:border-2 active:font-bold pt-3 pb-2 rounded font-semibold text-base lg:w-2/12"
        >
          Check out aura
        </a>
      </div>
    </div>
  );
};

export default AuraBeauty;
