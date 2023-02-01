import React from 'react'
import PPLSplit from "./assets/projects-assets/pplsplit-logo.png"
import QRCode from "./assets/projects-assets/qr-code-project.png"
import MightGuy from "./assets/projects-assets/might-guy.png"
import Airbnb from "./assets/projects-assets/airbnb-logo.png"

function Projects() {
  return (
    <section id="projects" className="my-1 py-3 pt-16">
          <div className="text-center my-3 py-3">
            <h1 className="font-semibold text-3xl ">Projects</h1>
            <div className="mx-auto w-28 h-1 bg-black rounded border-0 dark:bg-gray-800 "></div>
          </div>

          <div className="sm:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 ">
            {/* PPLSplit */}
            <a
              href="https://pplsplit.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center bg-slate-300">
                <img
                  src={PPLSplit}
                  width={220}
                  alt="Random Quote Generator Project"
                  className="mx-auto py-4 pb-6 pl-3"
                />
                <h3 className="text-xl font-medium pt-3 ">
                  PPL Workout Generator
                </h3>
                <p className="py-2 font-thin">
                  Web application that generates a PPL exercise routine.
                </p>
              </div>
            </a>

             {/* QR Code Generator */}
             <a
              href="https://ineedaqrcode.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center bg-slate-300">
                <img
                  src={QRCode}
                  width={90}
                  alt="QR Code Generator Project"
                  className="mx-auto py-3 pb-2 pl-3"
                />
                <h3 className="text-xl font-medium pt-3 ">
                  QR Code Generator
                </h3>
                <p className="py-2 font-thin">
                  Web application to create QR Codes.
                </p>
              </div>
            </a>

            {/* Quote Generator/Tribute Page */}
            <a
              href="https://mighty-might-guy.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center bg-slate-300">
                <img
                  src={MightGuy}
                  width={80}
                  alt="Random Quote Generator Project"
                  className="mx-auto"
                />
                <h3 className="text-xl font-medium pt-3 ">
                  Inspire Me Might Guy!
                </h3>
                <p className="py-2 font-thin">
                  FreeCodeCamp Challenge to build a tribute page.
                </p>
              </div>
            </a>

            {/* Airbnb Clone */}
            <a
              href="https://air-bnb-experiences-clone.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center bg-slate-300">
                <img
                  src={Airbnb}
                  width={140}
                  alt="AirBnB Experiences Clone"
                  className="mx-auto py-4"
                />
                <h3 className="text-xl font-medium pt-3 ">AirBnB Clone</h3>
                <p className="py-2 font-thin">
                  A pixel-perfect recreation of Airbnb's Experiences landing
                  page.
                </p>
              </div>
            </a>
          </div>
        </section>
  )
}

export default Projects