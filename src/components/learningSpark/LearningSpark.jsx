import React from "react";
import learningSpark from "../../assets/img/learningSpark.png";
const LearningSpark = () => {
  return (
    <section className="mb-40" id="learning">
      <article>
        <h4 className="px-6 mt-14 mb-4 text-3xl font-medium font-estrato italic">
          03 learningspark
        </h4>
        <div>
          <div className="flex flex-col gap-4 p-6">
            <p>Work in progress.</p>
            <p>
              In this case study, I led the redesign of Learning Spark's
              platform, initially a landing page for private math tutoring
              called “Math Spark”. Through research, user interviews, and the
              creation of user personas, I identified the opportunity to expand
              services and provide specialized tutoring for various IB subjects.
            </p>
            <p>
              I planned the website's content and architecture, and designed
              low-fidelity wireframes, with a focus on creating an intuitive and
              inviting user experience. The ongoing project aims to transform
              the platform into a comprehensive educational resource, offering
              mock papers and study materials to empower IB students in their
              exam preparation.
            </p>
          </div>
          <div className="">
            <img className="" src={learningSpark} alt="learning spark image" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 my-5 w-full">
          <button className="bg-black text-white w-11/12 py-3 rounded font-semibold text-base">
            Read case study
          </button>
          <p className="italic text-lightText">Only available in Spanish</p>
        </div>
      </article>
    </section>
  );
};

export default LearningSpark;
