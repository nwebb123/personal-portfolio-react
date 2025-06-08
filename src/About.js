import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import NickWebb from "./assets/about-assets/nick_webb.jpg";
import Resume from "./assets/about-assets/Resume_2025.pdf";

function About() {
  return (
    <section id="about" className="my-1 py-3 pt-16">
      <div className="text-center my-3 py-3">
        <h1 className="font-semibold text-3xl ">About</h1>
        <div className="mx-auto w-24 h-1 bg-black rounded border-0 dark:bg-gray-800 "></div>
      </div>

      <div className="grid lg:grid-cols-2 max-w-7xl lg:max-w-full mx-auto">
        <div className="About-Card m-3 p-2 border border-black bg-slate-300 rounded-xl shadow-xl">
          <div className="Card-Top mx-auto w-64 h-100 p-2">
            <img src={NickWebb} className="rounded-lg mt-2" alt="Nick Webb" />
          </div>

          <div className="Card-Body m-2 p-2">
            <h3 className="text-2xl md:text-2xl  text-center">Web Developer</h3>

            <ul className="text-center py-2 md:text-lg  ">
              <li>Location: Belleville, MI</li>
              <li>Education: B.S. from EMU</li>
              <li>Phone: (517) 375-4206</li>
              <li>
                Email:{" "}
                <a href="mailto:nwebb123@gmail.com" className="text-sky-500">
                  nwebb123@gmail.com
                </a>
              </li>
            </ul>
            <div className="text-5xl flex justify-center gap-10 py-5 px-2 text-gray-600">
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
                href={Resume}
                target="_blank"
                rel="noreferrer"
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

           md:pt-2"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="About-Description m-3 p-2 px-6 border border-black bg-slate-300 rounded-xl shadow-xl">
          {/*lg:h-2/3 md:h-4/5 */}
          <h3 className="text-center m-2 p-2 lg:p-8 flex lg:text-start text-lg md:text-2xl xl:text-3xl leading-8 md:leading-10">
            Hello! I am a Software Engineer based in south-east Michigan who enjoys
            the art of turning coffee into code. I have experience implementing
            solutions with a range of technologies to create responsive,
            interactive, and user-friendly web applications. I have two years of professional experience effectively
            communicating with clients, team members, and stakeholders to ensure
            that projects are being delivered on time and to the highest
            standard. With experience ranging from writing simple scripts to ensuring the quality of
            self-driving car software, I enjoy helping others with problems that
            need solving.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
