import React from 'react'

function Footer() {
  return (
    <section id="footer" className="bg-slate-300 dark:bg-slate-900">
    <div className="flex align-middle p-4"> 
      <p className="mx-auto text-sm lg:text-lg text-center font-light text-gray-800 dark:text-gray-300">Site built by Nicholas Webb. Source code <a href="https://github.com/nwebb123/personal-portfolio-react" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">here</a>.</p>
    </div>
  </section>
  )
}

export default Footer