import React, { useState, useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      const darkMode = JSON.parse(savedDarkMode);
      setIsDarkMode(darkMode);
      applyDarkMode(darkMode);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      applyDarkMode(prefersDark);
    }
  }, []);

  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    applyDarkMode(newDarkMode);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 sm:py-5 px-1 sm:px-2 lg:px-4 flex justify-center gap-x-3 sm:gap-x-5 lg:gap-x-8 items-center flex-wrap shadow-xl bg-white dark:bg-slate-900">
      <a href="#home" className="hover:text-indigo-600 transition">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-gray-900 dark:text-white">Home</h1>
      </a>
      <a href="#about" className="hover:text-indigo-600 transition">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-gray-900 dark:text-white">About</h1>
      </a>
      <a href="#projects" className="hover:text-indigo-600 transition">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-gray-900 dark:text-white">Projects</h1>
      </a>
      <a href="#contact" className="hover:text-indigo-600 transition">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-gray-900 dark:text-white">Contact</h1>
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center p-1 sm:p-2 rounded-lg bg-gray-300 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition"
        aria-label="Toggle dark mode"
        title={isDarkMode ? "Light mode" : "Dark mode"}
      >
        {isDarkMode ? (
          <BsSun size={18} className="text-yellow-500 sm:text-xl" />
        ) : (
          <BsMoon size={18} className="text-gray-700 sm:text-xl" />
        )}
      </button>
    </nav>
  )
}

export default Navbar
