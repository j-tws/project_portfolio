import React from "react";

function HelloThere() {

  return (
    <div className="flex w-screen h-screen border border-red-500">
      <div className="max-w-lg m-auto text-center md:text-left">
        <h4 className="text-stone-300 font-secondary">Hello there! My name is</h4>
        <h1 className="text-5xl font-bold text-amber-400 font-primary py-2.5 sm:text-8xl">
          Justin Tan
        </h1>
        <h2 className="text-stone-300 font-secondary">A Full Stack Web Developer based in Melbourne</h2>
      </div>
    </div>
  )
}

export default HelloThere