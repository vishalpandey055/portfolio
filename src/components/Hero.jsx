import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-gray-100 dark:bg-slate-900 transition-colors duration-300"
    >

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">

        {/* LEFT SIDE */}
        <div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">

            Hi I'm <br />

            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Vishal Pandey
            </span>

          </h1>

          {/* Typing Animation */}
          <div className="mt-5 text-xl text-gray-600 dark:text-gray-300 font-medium">

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Java Backend Developer",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <a href="#projects">

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg text-white
                bg-gradient-to-r from-blue-500 to-purple-600
                shadow-lg hover:shadow-xl transition"
              >
                View Projects
              </motion.button>

            </a>

            <a href="/resume.pdf" download>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg
                border border-gray-400
                dark:border-gray-600
                text-gray-800 dark:text-white
                hover:bg-gray-200 dark:hover:bg-slate-800
                transition"
              >
                Download Resume
              </motion.button>

            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-8 text-gray-700 dark:text-gray-300">

            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-72 md:w-80 rounded-full
              border-4 border-white dark:border-slate-800
              shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;