import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import NickWebb from "./assets/about-assets/nick_webb.jpg";
import Resume from "./assets/about-assets/Nicholas_Webb_Resume.pdf";

function About() {
  return (
    <section id="about" className="py-16 pt-20 bg-slate-300 dark:bg-slate-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-3xl text-gray-900 dark:text-white">About</h1>
        <div className="mx-auto w-24 h-1 bg-indigo-600 rounded dark:bg-indigo-600 mt-2"></div>
      </div>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

        {/* ABOUT CARD */}
        <div className="m-3 p-4 border border-black dark:border-indigo-600 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-xl">
          <div className="flex justify-center">
            <img
              src={NickWebb}
              className="rounded-lg w-64 h-auto mt-2"
              alt="Nick Webb"
            />
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Web Developer</h3>

            <ul className="py-3 text-lg text-gray-800 dark:text-gray-200">
              <li>Location: Belleville, MI</li>
              <li>Education: B.S. from EMU</li>
              <li>Phone: (517) 375-4206</li>
              <li>
                Email:{" "}
                <a href="mailto:nwebb123@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  nwebb123@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex justify-center gap-10 py-5 text-gray-700 dark:text-gray-300 text-5xl">
              <a
                href="https://www.linkedin.com/in/nicholas-webb-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linked-In Icon"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="https://github.com/nwebb123"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Icon"
                className="hover:text-gray-900 dark:hover:text-indigo-400 transition"
              >
                <AiFillGithub />
              </a>

              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="text-lg px-4 py-2 bg-indigo-600 dark:bg-indigo-600 text-white rounded shadow-md
                hover:bg-indigo-700 dark:hover:bg-indigo-700 hover:shadow-lg transition duration-150 ease-in-out
                md:text-2xl"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="m-3 p-6 border border-black dark:border-indigo-600 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-xl">
          <div className="text-lg text-gray-800 dark:text-gray-200 md:text-lg leading-relaxed">
            <p className="mb-4">
              I'm a full-stack <span className="font-semibold text-indigo-600 dark:text-indigo-400">.NET Software Engineer</span> based in southeast Michigan with 2+ years of professional experience. I'm passionate about writing clean, maintainable code 
              and staying current with emerging technologies and development practices.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                  <span>2+ years of professional engineering experience: led product platform serving thousands of users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                  <span>Full-stack expertise: .NET (MVC, ASP.NET Core), SQL, React, Angular, plus specialized skills in Power BI, Umbraco CMS, and emerging Agentic AI development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                  <span>Agile practitioner: Scrum ceremonies (Refinement, Planning, Pointing, Retrospectives), Design Reviews, and cross-functional collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                  <span>Researched and implemented Git version control and workflow for Power BI reports, improving code quality and team collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                  <span>Experience using AI tools: committed to staying current with emerging technologies that improve code quality and developer productivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
