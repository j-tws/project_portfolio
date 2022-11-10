import React from "react";


function HelloThere() {

  return (
    <div id="hellothere" className="relative flex w-screen h-screen overflow-hidden">

      {/* <canvas className="orb-canvas"></canvas> */}
      <div className="absolute inset-x-0 inset-y-0 m-auto w-full max-w-lg h-1/4">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-900 rounded-full mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-4000">
        </div>
        <div className="absolute -top-1 -right-4 w-72 h-72 bg-cyan-700 rounded-full mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-2000">
        </div>
        <div className="absolute -top-4 -right-15 w-72 h-72 bg-teal-800 rounded-full mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-6000">
        </div>
        <div className="absolute top-2 left-20 w-72 h-72 bg-sky-900 rounded-full mix-blend-lighten filter blur-2xl opacity-70 animate-blob">
        </div>
      </div>

      <div className="max-w-lg rounded-lg m-auto py-3 px-20 z-10 text-center md:text-left">
        <h4 className="text-sm text-stone-300 font-secondary">Hello there! 👋🏻 My name is</h4>
        <h1 className="text-4xl font-bold text-amber-500 font-primary py-2.5 sm:text-6xl">
          Justin Tan
        </h1>
        <h2 className="text-sm text-stone-300 font-secondary">A Full Stack Web Developer based in Melbourne</h2>
      </div>
    </div>
  )
}

export default HelloThere