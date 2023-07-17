import React, { useState } from "react";
import leaves from "../../assets/img/Leaves-Flourish.svg";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"
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
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmited(true);
    if (!form.name || !form.email || !form.subject || !form.message) {
      return;
    }
    emailjs.sendForm(
      "service_xus76gn",
      "template_7ydkq6h",
      e.target,
      "VUyYB6hY86IyTP9MW"
    ).then((res) => {
      if (res) {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent",
          text: "Thank you for your message! I will read and respond shortly",
          showConfirmButton: false,
          timer: 3500,
        });
        resetForm()
        setSubmited(false)        
      }
    }).catch((err) => {
      console.log(err);
    })
    
  };

  return (
    <div id="getintouch">
      <div className="w-full flex justify-center my-10">
        <img
          className="w-6/12 sm:w-4/12"
          src={leaves}
          alt="leaves decoration"
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-8 text-center px-5 lg:w-8/12 lg:mx-auto xl:w-7/12">
        <h3 className="w-full text-3xl font-medium font-estrato italic">
          get in touch
        </h3>
        <p>
          Interested in hiring a dedicated UX/UI designer? Contact me below and
          let's discuss how I can contribute to your team and create exceptional
          user experiences together. I look forward to hearing from you!
        </p>
      </div>
      <form
        // action="https://formspree.io/f/mnqloqlo"
        // method="POST"
        onSubmit={handleSubmit}
        className="px-5 flex flex-col gap-10 mt-5 sm:mt-10 lg:w-6/12 lg:mx-auto xl:w-5/12"
      >
        <div className="flex flex-col gap-0 relative">
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
            <span className="text-red-600 absolute bottom-[-30px]">
              Please fill in this field
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2  relative">
          <label name="email" className="font-medium">
            E-mail address*
          </label>
          <input
            className=" border-solid border-thirdtext border-b-2 h-10 focus:outline-none focus:border-black"
            placeholder="johndoe@mail.com"
            onChange={handleChange}
            name="email"
            type="email"
            value={form.email}
          />
          {submited && form.email === "" && (
            <span className="text-red-600 absolute bottom-[-30px]">
              Please fill in this field
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
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
            <span className="text-red-600 absolute bottom-[-30px]">
              Please fill in this field
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
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
            <span className="text-red-600 absolute bottom-[-30px]">
              Please fill in this field
            </span>
          )}
        </div>
        <div className="w-full flex flex-col items-center gap-4 my-10 sm:my-20 lg:mt-0">
          <button
            type="submit"
            className="bg-black text-white w-full hover:bg-transparent hover:text-black border-[1px] hover:border-black active:border-2 active:font-bold pt-3 pb-2 rounded font-semibold text-base lg:w-2/3"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
