import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <h2 className="text-xl font-semibold text-white">
          Vishal.dev
        </h2>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Back to Top */}
        <a
          href="#home"
          className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition"
        >
          <FaArrowUp />
        </a>

      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Vishal Pandey. All rights reserved.
      </p>

    </footer>

  );

}

export default Footer;