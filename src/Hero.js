import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Hero() {

  return (
    <section id="Hero" className="min-h-screen hero-bg">
    <div className="text-center sm:pt-12 md:pt-28">
      <h2 className="text-5xl md:text-7xl p-4 text-black font-light">
        Nicholas Webb
      </h2>
      <h3 className="text-2xl md:text-4xl py-1 md:py-4 font-light">
        Web Developer
      </h3>
      <p className="text-lg md:text-2xl p-5 leading-8 md:leading-10 text-gray-600 max-w-2xl mx-auto">
        Developer, teacher, and life-long learner. Currently working for Akorbi ensuring the quality of Waymo's self-driving car software.   
        {/* <a
          href="https://waymo.com/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-500"
        >
          Waymo&apos;s 
        </a> */}
      </p>

      <div className="text-5xl md:text-6xl flex justify-center gap-12 py-1 px-1 text-gray-600">
        <a href="https://www.linkedin.com/in/nicholas-webb-dev/" target="_blank" rel="noreferrer" aria-label="Linked-In Icon">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/nwebb123" target="_blank" rel="noreferrer" aria-label="GitHub Icon">
          <AiFillGithub />
        </a>
        <a
          href="#projects"
          className="text-lg p-2 md:text-2xl rounded-full bg-cyan-500 text-white px-4 py-2 md:px-5 md:pt-3"
        >
          View My Work
        </a>
      </div>
    </div>
  </section>
  )
}

export default Hero