import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-5 px-2 lg:px-4 flex space-x-12 lg:space-x-912 justify-center lg:justify-start  shadow-xl bg-white ">
          <a href="#home">
            <h1 className="text-xl md:text-2xl  font-medium">Home</h1>
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