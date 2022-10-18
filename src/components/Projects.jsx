import React from "react";

function Projects(){

  return (
    <div className="mt-10 pt-5 border border-red-500">
      <h2 className="max-w-md mx-auto text-5xl mb-8 font-primary text-amber-400 font-bold text-center">Projects</h2>


      <div className="flex flex-row border border-red mx-auto">
        
        <div >
          <img className="object-cover w-150 h-80 border border-red-500" src="img/projects/hipandhop.png" alt="hip_and_hop" />
        </div>

        <div className="w-1/3">
          <h3>Hip and Hop</h3>
          <p>Hip and Hop is a project consists of two of your most friendly-neighbourhood games in a site. Hop, jump, climb around obstacles and collect items to boost your high scores! If you want to store your high scores into the leadership board, don't forget to sign up and use your jumping skills to topple the leaderboard!</p>
          <p>Phaser.js MongoDB Mongoose </p>
        </div>

      </div>

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