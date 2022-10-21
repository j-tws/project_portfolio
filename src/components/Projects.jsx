import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

function Projects(){

  return (
    <div id="projects" className="mt-10 pt-5">

      <h2 className="max-w-md mx-auto text-4xl font-primary text-amber-400 font-bold text-center">Projects</h2>

      {/* individual project container starts here */}
      <div className="max-w-6xl rounded-lg flex flex-col items-center mx-auto m-8 mx-4 md:flex-row md:mx-auto md:w-4/5 bg-[#0d1321]">  
        <img className="max-w-lg rounded-lg object-cover mt-4 w-4/5 md:object-cover md:w-4/6 md:h-1/2 md:m-6 md:m-auto" src="img/projects/hipandhop.png" alt="hip_and_hop" />
      
        <div className="rounded-lg w-4/5 mx-4 my-4 p-3 items-center text-center md:p-3 md:m-auto md:pt-4 md:text-left md:mr-5">

          <div>
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
      <div className="max-w-6xl rounded-lg flex flex-col items-center mx-auto m-8 mx-4 md:flex-row md:mx-auto md:w-4/5 bg-[#0d1321]">  
        <img className="max-w-lg rounded-lg object-cover mt-4 w-4/5 md:object-cover md:w-4/6 md:h-1/2 md:m-6 md:m-auto" src="img/projects/despination.png" alt="hip_and_hop" />
      
        <div className="rounded-lg p-3 w-4/5 mx-8 my-8 mx-auto text-center md:p-3 md:m-auto md:pt-4 md:text-left md:mr-5">

          <div>
            <h3 className="block md:inline-block text-amber-400 text-2xl font-primary mb-3 font-bold">desPination</h3>

            <IconContext.Provider value={{ color: "#fbbf24b3", className: "global-class-name" }}>
              <a className="inline-block mx-2" href="https://despination.netlify.app/"><BiLinkExternal/></a>
              <a className="inline-block mx-1" href="https://github.com/j-tws/despination-frontend"><FiGithub /></a>
            </IconContext.Provider>
          </div>

          <p className="text-stone-300 mb-3 text-sm md:text-base">Inspired by our passion for travelling (which was blocked during the pandemic), desPination is a platform where you can browse various destinations, create your own planners and pin attractions / events into your planner. You can even make notes for your individual planners, before or during your trip!</p>
          <p className="font-primary text-amber-400">React &nbsp; Rails &nbsp; Node.js &nbsp; React Google Map </p>

        </div>
      </div>
      {/* individual project container ends here */}

      {/* individual project container starts here */}
      <div className="max-w-6xl rounded-lg flex flex-col items-center mx-auto m-8 mx-4 md:flex-row md:mx-auto md:w-4/5 bg-[#0d1321]">  
        <img className="max-w-lg rounded-lg object-cover mt-4 w-4/5 md:object-cover md:w-4/6 md:h-1/2 md:m-6 md:m-auto" src="img/projects/hangar.png" alt="hip_and_hop" />
      
        <div className="rounded-lg w-4/5 p-3 mx-8 my-8 mx-auto text-center md:p-3 md:m-auto md:pt-4 md:text-left md:mr-5">

          <div>
            <h3 className="block md:inline-block text-amber-400 text-2xl font-primary mb-3 font-bold">Hangar</h3>

            <IconContext.Provider value={{ color: "#fbbf24b3", className: "global-class-name" }}>
              <a className="inline-block mx-2" href="https://despination.netlify.app/"><BiLinkExternal/></a>
              <a className="inline-block mx-1" href="https://github.com/j-tws/despination-frontend"><FiGithub /></a>
            </IconContext.Provider>
          </div>

          <p className="text-stone-300 mb-3 text-sm md:text-base">A restaurant booking site with a personal calendar to track all of your made bookings. Browse eateries through different categories and make bookings on the go. An extra admin feature where you can be logged in as an admin and you have total control pretty much on almost the whole site.</p>
          <p className="font-primary text-amber-400">Ruby &nbsp; Rails &nbsp; PostgreSQL</p>

        </div>
      </div>
      {/* individual project container ends here */}

      {/* individual project container starts here */}
      <div className="max-w-6xl rounded-lg flex flex-col items-center mx-auto m-8 mx-4 md:flex-row md:mx-auto md:w-4/5 bg-[#0d1321]">  
        <img className="max-w-lg rounded-lg object-cover mt-4 w-4/5 md:object-cover md:w-4/6 md:h-1/2 md:m-6 md:m-auto" src="img/projects/tictactoe.png" alt="hip_and_hop" />
      
        <div className="rounded-lg w-4/5 p-3 mx-8 my-8 mx-auto text-center md:p-3 md:m-auto md:pt-4 md:text-left md:mr-5">

          <div>
            <h3 className="block md:inline-block text-amber-400 text-2xl font-primary mb-3 font-bold">Tic Tac Toe</h3>

            <IconContext.Provider value={{ color: "#fbbf24b3", className: "global-class-name" }}>
              <a className="inline-block mx-2" href="https://despination.netlify.app/"><BiLinkExternal/></a>
              <a className="inline-block mx-1" href="https://github.com/j-tws/despination-frontend"><FiGithub /></a>
            </IconContext.Provider>
          </div>

          <p className="text-stone-300 mb-3 text-sm md:text-base">A classic tic tac toe game built using front-end web fundamentals. Two game modes where players can play with each other locally or play against a simple bot.</p>
          <p className="font-primary text-amber-400">Javscript &nbsp; CSS &nbsp; HTML</p>

        </div>
      </div>
      {/* individual project container ends here */}

    </div>
  )

}

export default Projects