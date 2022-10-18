import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { DiRor } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function TechSkills(){

  return (
    <div>
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 ">
  
        <h2 className="max-w-md mx-auto font-primary text-amber-400 text-4xl font-bold text-center md:text-left">Tech Skills</h2>
          <div className="flex flex-row mx-auto border border-red-500">
            <DiJavascript1 size={56}/>
            <FaReact size={56}/>
            <FaVuejs size={56}/>
            <DiRuby size={56}/>
            <DiRor size={56}/>
            <DiNodejs size={56}/>
            <SiMongodb size={56}/>
            <SiTailwindcss size={56}/>
            <SiPostgresql size={56}/>
            <FaGitAlt size={56}/>
            <SiJquery size={56}/>
          </div>
      </div>
    </div>
  )

}

export default TechSkills