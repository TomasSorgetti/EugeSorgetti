import React, { useState } from "react";
import leaves from "../../assets/img/Leaves-Flourish.png";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submited, setSubmited] = useState(false);


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
  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  const handleSubmit = () => {
    setSubmited( true )
    if (!form.name || !form.email || !form.subject || !form.message) {
      return
    }
    alert("tu vieja en tanga")    
    setSubmited(false)
  };

  return (
    <div id="getintouch">
      <div className="w-full flex justify-center my-10">
        <img src={leaves} alt="" />
      </div>
      <div className="flex flex-col gap-4 text-center px-5">
        <h3 className="w-full text-3xl font-medium font-estrato italic">
          get in touch
        </h3>
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
            className=" border-solid border-thirdtext border-b-2 h-10 focus:outline-none focus:border-black"
            placeholder="John Doe"
            onChange={handleChange}
            name="name"
            type="text"
            value={form.name}
          />
          {submited && form.name === "" && (
            <span className="text-red-600">Please fill in this field</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">E-mail address*</label>
          <input
            className=" border-solid border-thirdtext border-b-2 h-10 focus:outline-none focus:border-black"
            placeholder="johndoe@mail.com"
            onChange={handleChange}
            name="email"
            type="text"
            value={form.email}
          />
          {submited && form.email === "" && (
            <span className="text-red-600">Please fill in this field</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Subject*</label>
          <input
            className=" border-solid border-thirdtext border-b-2 h-10 focus:outline-none focus:border-black"
            placeholder="UX/UI Interview"
            onChange={handleChange}
            name="subject"
            type="text"
            value={form.subject}
          />
          {submited && form.subject === "" && (
            <span className="text-red-600">Please fill in this field</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Message*</label>
          <textarea
            className="border-solid border-thirdtext border-b-2 h-32 focus:outline-none focus:border-black"
            placeholder="Drop me a message and let's start a conversation!"
            onChange={handleChange}
            name="message"
            maxLength={500}
            onKeyDown={handleKeyDown}
            value={form.message}
          ></textarea>
          <span>{form.message.length}/500</span>
          {submited && form.message === "" && (
            <span className="text-red-600">Please fill in this field</span>
          )}
        </div>
        <div className="w-full flex flex-col items-center gap-4 my-10">
          <button
            onClick={() => {
              handleSubmit();
              if (form.name && form.email && form.subject && form.message) {
                resetForm();
              }
            }}
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
