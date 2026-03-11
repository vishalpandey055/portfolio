import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {

  // Default DARK mode
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-12 py-5 backdrop-blur-md bg-white/70 dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
       Vishal Kumar Pandey
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-10 font-medium text-gray-700 dark:text-gray-200">

        <li>
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </li>

      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5 text-xl text-gray-700 dark:text-gray-200">

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-blue-600 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* GitHub */}
        <a
          href="https://github.com/vishalpandey055"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vishalkumarpandey055/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;