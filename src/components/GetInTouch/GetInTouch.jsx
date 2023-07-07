import React, { useState } from "react";
import leaves from "../../assets/img/Leaves-Flourish.png";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  function handleKeyDown(e) {
    const textarea = e.target;
    const maxLength = textarea.maxLength;
    const currentLength = textarea.value.length;
    const keyPressed = e.key;

    if (currentLength >= maxLength && keyPressed !== "Backspace") {
      e.preventDefault();
    }
  }

    const handleSubmit = () => {

  };

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
            onChange={handleChange}
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">E-mail address*</label>
          <input
            className=" border-solid border-black border-b-2 h-10"
            placeholder="johndoe@mail.com"
            onChange={handleChange}
            name="email"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Subject*</label>
          <input
            className=" border-solid border-black border-b-2 h-10"
            placeholder="UX/UI Interview"
            onChange={handleChange}
            name="subject"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Message*</label>
          <textarea
            className="border-solid border-black border-b-2 h-32"
            placeholder="Drop me a message and let's start a conversation!"
            onChange={handleChange}
            name="message"
            maxLength={500}
            onKeyDown={handleKeyDown}
          ></textarea>
          <span>{form.message.length}/500</span>
        </div>
        <div className="w-full flex flex-col items-center gap-4 my-10">
          <button
            onClick={() => handleSubmit()}
            type="button"
            className="bg-black text-white w-full py-3 rounded font-semibold text-base"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
