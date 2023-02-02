import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-5 px-12  flex space-x-12  shadow-xl bg-white ">
          <a href="#top">
            <h1 className="text-xl font-medium">Home</h1>
          </a>
          <a href="#about">
            <h1 className="text-xl font-medium">About</h1>
          </a>
          <a href="#projects">
            <h1 className="text-xl font-medium">Projects</h1>
          </a>
         
        </nav>
  )
}

export default Navbar