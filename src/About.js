import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import NickWebb from "./assets/about-assets/nick_webb.jpg";
import Resume from "./assets/about-assets/Resume_2022.pdf"



function About() {
  return (
    <section id="about" className="my-1 py-3 pt-16">
    <div className="text-center my-3 py-3">
      <h1 className="font-semibold text-3xl ">About</h1>
      <div className="mx-auto w-24 h-1 bg-black rounded border-0 dark:bg-gray-800 "></div>
    </div>

    <div className="grid lg:grid-cols-2 max-w-7xl mx-auto ">
      
      <div className="About-Card m-1 p-2">
        <div className="Card-Top mx-auto w-64 h-100 p-2">
          <img src={NickWebb} className="rounded-lg" alt="Nick Webb" />
        </div>

        <div className="Card-Body m-2 p-2">
          <h3 className="text-2xl md:text-2xl  text-center">
            Web Developer
          </h3>

          <ul className="text-center py-2 md:text-lg  ">
            <li>Location: Westland, MI</li>
            <li>Education: B.S. from EMU</li>
            <li>Phone: (517) 375-4206</li>
            <li>Email: nwebb123@gmail.com</li>
          </ul>
          <div className="text-5xl flex justify-center gap-10 py-5 px-2 text-gray-600">
            <a href="https://www.linkedin.com/in/nicholas-webb-dev/" target="_blank" rel="noreferrer" aria-label="Linked-In Icon">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/nwebb123" target="_blank" rel="noreferrer" aria-label="GitHub Icon">
              <AiFillGithub />
            </a>
            <a
              href={Resume}
              download={Resume}
              target="_blank"
              rel="noreferrer"
              className="text-lg rounded-full bg-cyan-500 text-white px-4 py-2"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="About-Description m-3 p-4 flex align-middle ">
        {/*lg:h-2/3 md:h-4/5 */}
        <h3 className="mx-auto px-6 flex text-center lg:text-start text-xl md:text-2xl leading-8 md:leading-10">
          Web Developer based out of Westland, Michigan. I have experience
          implementing a wide range of technologies used to create
          responsive websites and applications. I am currently working as
          a Waymo EngOps Senior Operations Associate ensuring the quality of
          self-driving car software.
          {/* <a
            href="https://waymo.com/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-500 "
          >
          </a> */}
        </h3>
      </div>
    </div>
  </section>
  )
}

export default About