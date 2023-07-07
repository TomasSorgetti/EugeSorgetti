import React from "react";

//import images
import David from "../../assets/img/05/1.png"
import UI from "../../assets/img/05/2.png";
import Learning from "../../assets/img/05/3.png";

const Design = () => {
  return (
    <div className="w-full flex flex-col gap-6 mt-14">
      <div className="flex flex-col font-medium text-2xl text-center">
        <h3>05 design challenges</h3>
        <h3>& social media</h3>
      </div>
      <div className="w-full overflow-hidden">
        <img className="object-cover w-full" src={David} alt="" />
      </div>
      <div className="pl-5">
        <h4>David Carson</h4>
        <p>Magazine Design Challenge</p>
      </div>
      <div className="w-11/12 overflow-hidden m-auto">
        <img className="object-cover w-full" src={UI} alt="" />
      </div>
      <div className="w-11/12 overflow-hidden m-auto">
        <img className="object-cover w-full" src={Learning} alt="" />
      </div>
      <div className="w-full flex flex-col items-center gap-4 my-10">
        <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base">
          See on Behance
        </button>
      </div>
    </div>
  );
};

export default Design;
