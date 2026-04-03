import { motion } from "framer-motion";
import { useState } from "react";
import profileImg from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  // 🔥 Smooth scroll
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 relative overflow-hidden scroll-mt-24"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px] top-10 left-10"></div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full z-10">

          {/* TEXT */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hello, I'm <br />
              <span className="text-cyan-400">
                Vishal Kumar Pandey
              </span>
            </h1>

            {/* TYPEWRITER */}
            <p className="mt-4 text-lg text-gray-300">
              <Typewriter
                words={[
                  "Java Full Stack Developer",
                  "Software Engineer",
                  "React Developer",
                  "Spring Boot Backend Developer",
                  "Building Scalable Web Apps 🚀",
                ]}
                loop
                cursor
              />
            </p>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-400 max-w-md">
              I build modern, scalable and user-friendly web applications using
              React and Spring Boot. Passionate about solving real-world problems.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-5">

              {/* 🔥 VIEW RESUME (MODAL) */}
              <button
                onClick={() => setShowResume(true)}
                className="flex items-center gap-3 px-6 py-3 rounded-full 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 
                hover:scale-105 transition duration-300 
                shadow-[0_0_20px_rgba(100,255,255,0.5)]"
              >
                View Resume
              </button>

              {/* 🔥 PROJECTS */}
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-full 
                border border-gray-600 hover:border-cyan-400 
                hover:text-cyan-400 transition"
              >
                <FaGithub />
                See Projects
              </button>

            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.img
              src={profileImg}
              alt="profile"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-64 md:w-80 rounded-2xl border border-gray-700 
              shadow-[0_0_50px_rgba(0,255,255,0.4)]"
            />

            <div className="absolute inset-0 rounded-2xl bg-cyan-500 opacity-20 blur-3xl"></div>
          </motion.div>

        </div>
      </section>

      {/* 🔥 RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">

          <div className="bg-gray-900 p-4 rounded-xl w-[90%] md:w-[70%] h-[80%] relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-3 text-white text-xl"
            >
              ✖
            </button>

            {/* PDF VIEW */}
            <iframe
              src="/vishal_kumar_pandey.pdf"
              className="w-full h-full rounded"
              title="Resume"
            ></iframe>

          </div>

        </div>
      )}
    </>
  );
};

export default Hero;