import React from "react";

function AboutMe(){

  return (
  
    <div id="aboutme" className="rounded-lg flex flex-col-reverse items-center w-3/4 py-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row bg-[#0d1321]">
      <div className="flex flex-col px-5 w-6/8 m-auto md:w-10/12 md:max-w-1/3">
        <h2 className="max-w-md py-4 text-4xl font-primary font-bold text-center text-amber-400 md:text-left">About Me</h2>

        <p className="mb-3 font-secondary text-sm text-center text-stone-300 md:text-left md:text-base">Hello! I am Justin Tan, a Melbourne based full stack developer recently graduated from General Assembly. Filled with <span className="text-amber-400 font-bold">motivation, ambition and creativity</span>, I aspire to make a positive yet absolute difference to the world, one text at a time! </p>

        <p className="font-secondary text-center text-sm text-stone-300 md:text-left md:text-base">Having a background in <span className="text-amber-400 font-bold">hospitality and architecture</span>, I am equipped with a unique set of skills and perspectives that I believe will be a great contribution to the tech industry. Both experiences made me realized that I thrive in <span className="text-amber-400 font-bold">a creative, problem solving</span> career. The joy of creating quality, functional products have never been so <span className="text-amber-400 font-bold">fulfilling</span> and I am excited about the various possibilities I can contribute to the world! </p>
      </div>


        <img className="rounded-full mx-6 m-auto w-1/2 md:w-72" src="/img/IMG_6258.jpg" alt="profile_img" />
 

    </div>

  )

}

export default AboutMe