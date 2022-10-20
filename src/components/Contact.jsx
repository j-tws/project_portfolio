import React from "react";

function Contact(){

  return (
    <div id="contact" className="m-5 md:mx-auto md:m-10 md:w-2/3 md:p-12 border border-red-500">
      <h2 className="mx-auto my-3 text-4xl font-primary text-amber-400 font-bold text-center">Get in Touch</h2>

      <div className="p-5 md:py-4">
        <p className="text-stone-300 mb-3 text-sm md:text-base">Currently I am looking for job opportunities so feel free to drop by an email if you are keen!</p>
        <p className="text-stone-300 mb-3 text-sm md:text-base">I am also looking to be actively involved in the tech community through volunteering, hackathons, meetups etc. Hit me up if you need a helping hand! </p>
      </div>

      <a href="mailto:justintws10@gmail.com" className='text-white px-2 py-1 border border-amber-300 rounded hover:bg-amber-300/40 md:px-4 md:py-2'>Contact Me</a>
    </div>
  )

}

export default Contact