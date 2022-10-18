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
import { SiHtml5 } from "react-icons/si";
import { IconContext } from "react-icons";

const iconSize = 70

function TechSkills(){

  return (
    <div className="px-4 py-8 mx-auto mt-10 border border-red-500">

      <h2 className="max-w-md mx-auto text-5xl mb-8 font-primary text-amber-400 font-bold text-center">Tech Skills</h2>

      <IconContext.Provider value={{ color: "#dfdfdfb3", className: "global-class-name" }}>
        <div className="inline-block mx-auto max-w-2/3 border border-red-500">

          <div className="inline-block group relative w-fit p-2 items-center">
            <DiJavascript1 className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Javascript</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <FaReact className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">React</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <FaVuejs className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Vue</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <DiRuby className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Ruby</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <DiRor className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Rails</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <DiNodejs className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Node.js</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <SiMongodb className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">MongoDB</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <SiTailwindcss className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Tailwind</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <SiPostgresql className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">PostgreSQL</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <FaGitAlt className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">Git</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <SiJquery className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">jQuery</p>
          </div>

          <div className="inline-block group relative w-fit p-2 items-center">
            <SiHtml5 className="opacity-100 group-hover:opacity-50 hover:transition-all" size={iconSize}/>
            <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 font-secondary font-bold group-hover:opacity-100 hover:transition-all p-5">HTML5</p>
          </div>
        </div>
      </IconContext.Provider>

    </div>
  )

}

export default TechSkills