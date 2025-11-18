import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import NickWebb from "./assets/about-assets/nick_webb.jpg";
import Resume from "./assets/about-assets/Nicholas_Webb_Resume.pdf";

function About() {
  return (
    <section id="about" className="py-16 pt-20 bg-slate-300">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-3xl">About</h1>
        <div className="mx-auto w-24 h-1 bg-black rounded dark:bg-gray-800 mt-2"></div>
      </div>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

        {/* ABOUT CARD */}
        <div className="m-3 p-4 border border-black bg-slate-100 rounded-xl shadow-xl">
          <div className="flex justify-center">
            <img
              src={NickWebb}
              className="rounded-lg w-64 h-auto mt-2"
              alt="Nick Webb"
            />
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold">Web Developer</h3>

            <ul className="py-3 text-lg">
              <li>Location: Belleville, MI</li>
              <li>Education: B.S. from EMU</li>
              <li>Phone: (517) 375-4206</li>
              <li>
                Email:{" "}
                <a href="mailto:nwebb123@gmail.com" className="text-sky-600">
                  nwebb123@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex justify-center gap-10 py-5 text-gray-700 text-5xl">
              <a
                href="https://www.linkedin.com/in/nicholas-webb-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linked-In Icon"
                className="hover:text-sky-600 transition"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="https://github.com/nwebb123"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Icon"
                className="hover:text-gray-900 transition"
              >
                <AiFillGithub />
              </a>

              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="text-lg px-4 py-2 bg-cyan-600 text-white rounded shadow-md
                hover:bg-cyan-700 hover:shadow-lg transition duration-150 ease-in-out
                md:text-2xl"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="m-3 p-6 border border-black bg-slate-100 rounded-xl shadow-xl flex items-center">
          <p className="text-lg text-center p-4 md:text-xl xl:text-2xl leading-relaxed rounded-xl">
            Hello! I'm a full-stack .NET Software Engineer based in southeast Michigan with 
            a passion for building clean, reliable, and user-focused web applications. I 
            work with C#, .NET Core, SQL, and modern front-end tools to create responsive, 
            accessible, and intuitive experiences.
            <br /><br />
            I bring two years of professional engineering experience, collaborating closely 
            with clients, product teams, and fellow developers to deliver features that 
            solve real problems.
            <br /><br />
            Before becoming a full-time engineer I supported and tested autonomous vehicle 
            software. Whether it's web apps or self-driving systems, solving problems and 
            helping products succeed is what motivates me. I love turning complex challenges
            into solutions and helping teams build great products along the way.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
