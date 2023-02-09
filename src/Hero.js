import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Hero() {
  return (
    <section id="hero" className="min-h-screen hero-bg">
      <div className="text-center sm:pt-24 md:pt-28 lg:pt-32">
        <h2 className="text-5xl md:text-7xl xl:text-8xl p-4 text-black font-light">
          Nicholas Webb
        </h2>
        <h3 className="text-black text-2xl md:text-4xl xl:text-5xl py-4 md:py-6 lg:py-8 font-light">
          Web Developer
        </h3>
        {/* <p className="text-lg md:text-2xl p-5 leading-8 md:leading-10 text-black max-w-2xl mx-auto">
          Developer, teacher, and life-long learner. Currently working for
          Akorbi ensuring the quality of Waymo's self-driving car software.
         
        </p> */}

        <div className="text-5xl md:text-6xl flex justify-center gap-6 py-4 px-8 text-gray-600">
          
          <a
            href="https://www.linkedin.com/in/nicholas-webb-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linked-In Icon"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/nwebb123"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Icon"
          >
            <AiFillGithub />
          </a>
          <a
            href="#projects"
            className="text-lg        
             px-3
             py-2
             bg-cyan-600
             text-white
             font-medium  
             rounded
             shadow-md
             hover:bg-cyan-700 hover:shadow-lg
             focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
             active:bg-cyan-800 active:shadow-lg
             transition
             duration-150
             ease-in-out
           p-2 
           md:text-2xl 

           md:pt-3"
          >
            View My Work
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
