import React from 'react'

const About = () => {
  return (
    <div
      id="about"
      className="gap-3 flex flex-col items-center border- border-2 border-black w-10/12 p-5 pb-10 my-10 lg:w-8/12 lg:p-10 lg:gap-10 lg:pb-16 lg:mb-20"
    >
      <h2 className="text-3xl lg:text-4xl font-medium font-estrato italic">About</h2>
      <p className='lg:text-xl'>
        I’m an eclectic designer who mostly specialises on web/UI Design. I
        found my calling almost by chance while I was studying to be a
        translator.
      </p>
      <p className='lg:text-xl'>
        I love a challenge, learning new things, and I am passionate about
        understanding the human mind and creating amazing experiences that solve
        real problems.
      </p>
    </div>
  );
}

export default About