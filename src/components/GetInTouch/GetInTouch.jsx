import React from "react";
import leaves from "../../assets/img/Leaves-Flourish.png";

const GetInTouch = () => {
  return (
    <div>
      <div className="w-full flex justify-center my-10">
        <img src={leaves} alt="" />
      </div>
      <div className="flex flex-col gap-4 text-center px-5">
        <h3 className="w-full text-2xl font-medium">get in touch</h3>
        <p>
          Interested in hiring a dedicated UX/UI designer? Contact me below and
          let's discuss how I can contribute to your team and create exceptional
          user experiences together. I look forward to hearing from you!
        </p>
      </div>
      <form className="px-5 flex flex-col gap-4 mt-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Name*</label>
          <input
            className=" border-solid border-black border-b-2 h-10"
            placeholder="John Doe"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">E-mail address*</label>
          <input
            className=" border-solid border-black border-b-2 h-10"
            placeholder="johndoe@mail.com"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Subject*</label>
          <input
            className=" border-solid border-black border-b-2 h-10"
            placeholder="UX/UI Interview"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Message*</label>
          <textarea
            className=" border-solid border-black border-b-2 h-32"
            placeholder="Drop me a message and let's start a conversation!"
          ></textarea>
        </div>
        <div className="w-full flex flex-col items-center gap-4 my-10">
          <button className="bg-black text-white w-full py-3 rounded font-semibold text-base">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
