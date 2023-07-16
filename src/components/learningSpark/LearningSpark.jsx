import React from "react";
import deskSpark from "../../assets/img/03/sparkDesk.png";
import mobileSpark from "../../assets/img/03/sparkMobile.png";
const LearningSpark = () => {
  return (
    <section className="mb-20 mt-24 lg:mt-36" id="learning">
      <article className="lg:w-10/12 lg:m-auto">
        <h4 className="px-6 mt-14 mb-4 text-3xl font-medium font-estrato lg:px-0 lg:mb-10">
          03
          <span className="ml-2 italic">learningspark</span>
        </h4>
        <div className="lg:flex">
          <div className="flex flex-col gap-4 p-6 lg:w-9/12 lg:p-0">
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
          <div className="mb-[-200px] sm:h-96">
            <img
              className="lg:hidden"
              src={mobileSpark}
              alt="learning spark mobile"
            />
            <img
              className="hidden lg:block"
              src={deskSpark}
              alt="learning spark"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 w-full lg:items-start lg:pt-6">
          <a
            target="blank"
            href="https://www.behance.net/gallery/162859481/Math-Spark-Rediseno"
            className="bg-black text-center text-white w-11/12 hover:bg-transparent hover:text-black border-[1px] hover:border-black focus:border-2 focus:font-bold pt-3 pb-2 rounded font-semibold text-base lg:w-48"
          >
            Read case study
          </a>
          <p className="italic text-lightText">Only available in Spanish</p>
        </div>
      </article>
    </section>
  );
};

export default LearningSpark;
