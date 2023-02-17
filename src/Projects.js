import { React, } from "react"; //useState
import PPLSplit from "./assets/projects-assets/pplsplit-logo.png";
import QRCode from "./assets/projects-assets/qr-code-project.png";
import MightGuy from "./assets/projects-assets/might-guy.png";
import Airbnb from "./assets/projects-assets/airbnb-logo.png";
import QuickQuiz from "./assets/projects-assets/quick-quiz.png";

function Projects() {
  //const [dropdownIsShowing, setDropdownIsShowing] = useState(false);


  //Dynamic dropdown menu for client projects
  // const toggleDropdown = () => {
  //   setDropdownIsShowing((prevState) => {
  //     return (prevState = !prevState);
  //   });
  //   console.log(dropdownIsShowing);
  // };

  return (
    <section id="projects" className="my-1 py-3 pt-16">
      <div className="text-center my-3 py-3">
        <h1 className="font-semibold text-3xl ">Projects</h1>
        <div className="mx-auto w-28 h-1 bg-black rounded border-0 dark:bg-gray-800 "></div>
      </div>
      {/* projects grid */}
      <div className="sm:mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 ">
        
        {/* PPLSplit */}
        <a
          href="https://pplsplit.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center border border-black bg-slate-300">
            <img
              src={PPLSplit}
              width={220}
              alt="Random Quote Generator Project"
              className="mx-auto py-4 pb-6 pl-3"
            />
            <h3 className="text-xl font-medium pt-3 ">PPL Workout Generator</h3>
            <p className="py-2 font-thin">
              Web application that generates a PPL exercise routine.
            </p>
          </div>
        </a>

        {/* Quick Quiz */}
        <a
          href="https://quick-quiz-reactjs.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center border border-black bg-slate-300">
            <img
              src={QuickQuiz}
              width={90}
              alt="Quick Quiz Project"
              className="mx-auto py-3 pb-2 pl-3"
            />
            <h3 className="text-xl font-medium pt-3 ">Quick Quiz</h3>
            <p className="py-2 font-thin">
              A web application that can be used to study while out-and-about.
            </p>
          </div>
        </a>

   {/* QR Code Generator */}
   <a
          href="https://ineedaqrcode.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center border border-black bg-slate-300">
            <img
              src={QRCode}
              width={90}
              alt="QR Code Generator Project"
              className="mx-auto py-3 pb-2 pl-3"
            />
            <h3 className="text-xl font-medium pt-3 ">QR Code Generator</h3>
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
          <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center border border-black bg-slate-300">
            <img
              src={MightGuy}
              width={80}
              alt="Random Quote Generator Project"
              className="mx-auto"
            />
            <h3 className="text-xl font-medium pt-3 ">Inspire Me Might Guy!</h3>
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
          <div className="h-full rounded-xl shadow-xl p-4 pt-6 text-center border border-black bg-slate-300">
            <img
              src={Airbnb}
              width={140}
              alt="AirBnB Experiences Clone"
              className="mx-auto py-4"
            />
            <h3 className="text-xl font-medium pt-3 ">AirBnB Clone</h3>
            <p className="py-2 font-thin">
              A pixel-perfect recreation of Airbnb's Experiences landing page.
            </p>
          </div>
        </a>
      </div>

      {/* start */}
      {/* <div class="">
        <button
          onClick={() => toggleDropdown()}
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
           pb-2
           md:pb-3
           md:text-xl 
      flex 
      flex-col
      mx-auto
           md:pt-3"
        >
          Client Sites
        </button>

        {dropdownIsShowing && (
          <div class="z-50 mt-2 py-2 m-6 p-2 rounded flex flex-row justify-center space-x-4">
            <a
              href="https://stephenstrawbridge.netlify.app/" target="_blank" rel="noreferrer"
              className="block px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 border border-white rounded-xl " 
            >
             Stephen Portfolio
            </a>
            <a
              href="https://nolanarendt.netlify.app/" target="_blank" rel="noreferrer"
              className="block px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 border border-white rounded-xl "
            >
             Nolan Portfolio
            </a>
            
          </div>
        )}
      </div> */}
      {/* end */}
    </section>
  );
}

export default Projects;
