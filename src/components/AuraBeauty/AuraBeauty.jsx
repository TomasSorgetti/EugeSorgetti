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
    <div className="relative">
      <div className="flex flex-col items-center absolute -top-36 right-1/4">
        <h4>02 Aura Beauty</h4>
        <img
          className="hidden"
          src={AuraBeautyImg}
          alt="auraBeauty: computer image"
        />
        <img src={AuraBeautyMobile} alt="auraBeauty: cellphone image" />
      </div>
      <div>
        <p className="pt-72 px-6 mb-5">
          Custom-fit manicures, smart-sizing powered by AI. I participated in
          the creation of the web app and Shopify, worked on components and the
          UI Kit.
        </p>
        <ul className="px-10 text-lightText list-disc">
          {auraBeautyArr?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center my-5 w-full">
        <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base">
          Check out aura
        </button>
      </div>
    </div>
  );
};

export default AuraBeauty;
