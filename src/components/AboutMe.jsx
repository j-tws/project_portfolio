import React from "react";

function AboutMe(){

  return (
    <div>
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">About Me</h1>

          <p className="max-w-md text-center text-darkGrayishBlue md:text-left">Hello! I am Justin Tan, a Melbourne based full stack developer recently graduated from General Assembly. Filled with motivation, ambition and creativity, I aspire to make a positive yet absolute difference to the world, one text at a time! </p>

          <p className="max-w-md text-center text-darkGrayishBlue md:text-left">Having a background in hospitality and architecture, I am equipped with a unique set of skills and perspectives that I believe will be a great contribution to the tech industry. Both experiences made me realized that I thrive in a creative, problem solving career. The joy of creating quality, functional products have never been so fulfilling and I am excited about the various possibilities I can contribute to the world! </p>
        </div>

        <div className="md:w-1/4">
          <img src="/img/IMG_6258.jpg" alt="profile_img" />
        </div>

      </div>

      
      
    </div>
  )

}

export default AboutMe