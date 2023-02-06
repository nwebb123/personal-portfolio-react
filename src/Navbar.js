import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-5 px-2 flex space-x-8 justify-center lg:justify-start shadow-xl bg-white ">
          <a href="#top">
            <h1 className="text-xl md:text-2xl font-medium">Home</h1>
          </a>
          <a href="#about">
            <h1 className="text-xl md:text-2xl font-medium">About</h1>
          </a>
          <a href="#projects">
            <h1 className="text-xl md:text-2xl font-medium">Projects</h1>
          </a>
          <a href="#contact">
            <h1 className="text-xl md:text-2xl font-medium">Contact</h1>
          </a>
         
        </nav>
  )
}

export default Navbar