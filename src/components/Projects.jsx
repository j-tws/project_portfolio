import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

function Projects(){

  return (
    <div className="mt-10 pt-5 border border-red-500">

      <h2 className="max-w-md mx-auto text-5xl font-primary text-amber-400 font-bold text-center">Projects</h2>

      {/* individual project container starts here */}
      <div className="flex flex-col items-center mx-auto m-8 md:flex-row md:w-4/5 border border-green-500">  
        <img className="object-cover w-110 h-50 md:object-cover md:w-4/6 md:h-1/2 p-5 border border-red-500 md:m-auto" src="img/projects/hipandhop.png" alt="hip_and_hop" />
      
        <div className="w-4/5 border mx-8 mb-8 mx-auto text-center md:p-3 md:mx-auto md:pt-4 md:text-left border-red-500">

          <div className="border border-blue-500">
            <h3 className="block md:inline-block text-amber-400 text-2xl font-primary mb-3 font-bold">Hip and Hop</h3>

            <IconContext.Provider value={{ color: "#fbbf24b3", className: "global-class-name" }}>
              <a className="inline-block mx-2" href="https://hipandhop.netlify.app/"><BiLinkExternal/></a>
              <a className="inline-block mx-1" href="https://github.com/j-tws/hip-and-hop-frontend-1"><FiGithub /></a>
            </IconContext.Provider>
          </div>

          <p className="text-stone-300 mb-3 text-sm md:text-base">Hip and Hop is a project consists of two of your most friendly-neighbourhood games in a site. Hop, jump, climb around obstacles and collect items to boost your high scores! If you want to store your high scores into the leadership board, don't forget to sign up and use your jumping skills to topple the leaderboard!</p>
          <p className="font-primary text-amber-400">Phaser.js &nbsp;  MongoDB &nbsp; Mongoose </p>

        </div>
      </div>
      {/* individual project container ends here */}

      {/* individual project container starts here */}
      <div className="flex flex-col items-center mx-auto m-8 md:flex-row md:w-4/5 border border-green-500">  
        <img className="object-cover w-110 h-50 md:object-cover md:w-4/6 md:h-1/2 p-5 border border-red-500 md:m-auto" src="img/projects/despination.png" alt="hip_and_hop" />
      
        <div className="w-4/5 border mx-8 mb-8 mx-auto text-center md:p-3 md:mx-auto md:pt-4 md:text-left border-red-500">

          <div className="border border-blue-500">
            <h3 className="block md:inline-block text-amber-400 text-2xl font-primary mb-3 font-bold">desPination</h3>

            <IconContext.Provider value={{ color: "#fbbf24b3", className: "global-class-name" }}>
              <a className="inline-block mx-2" href="https://despination.netlify.app/"><BiLinkExternal/></a>
              <a className="inline-block mx-1" href="https://github.com/j-tws/hip-and-hop-frontend-1"><FiGithub /></a>
            </IconContext.Provider>
          </div>

          <p className="text-stone-300 mb-3 text-sm md:text-base">Inspired by our passion for travelling (which was blocked during the pandemic), desPination is a platform where you can browse various destinations, create your own planners and pin attractions / events into your planner. You can even make notes for your individual planners, before or during your trip!</p>
          <p className="font-primary text-amber-400">React &nbsp; Rails &nbsp; Node.js &nbsp; React Google Map </p>

        </div>
      </div>
      {/* individual project container ends here */}


      <div>
        <img className="object-cover h-60 w-110 mx-auto" src="img/projects/despination.png" alt="despination" />
        <h3>desPination</h3>
        <p>Inspired by our passion for travelling (which was blocked during the pandemic), desPination is a platform where you can browse various destinations, create your own planners and pin attractions / events into your planner. You can even make notes for your individual planners, before or during your trip!</p>
        <p>React Rails Node.js React Google Map</p>
      </div>
      
      <div>
        <img className="object-cover h-60 w-110 mx-auto" src="img/projects/hangar.png" alt="hangar" />
        <h3>Hangar</h3>
        <p>A restaurant booking site with a personal calendar to track all of your made bookings. Browse eateries through different categories and make bookings on the go. An extra admin feature where you can be logged in as an admin and you have total control pretty much on almost the whole site.</p>
      </div>

      <div>
        <img className="object-cover h-60 w-110 mx-auto" src="img/projects/tictactoe.png" alt="tictactoe" />
        <h3>Tic Tac Toe</h3>
        <p>A classic tic tac toe game built using front-end web fundamentals. Two game modes where players can play with each other locally or play against a simple bot.</p>
      </div>

    </div>
  )

}

export default Projects