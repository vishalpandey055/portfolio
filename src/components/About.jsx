import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gray-100 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute w-80 h-80 bg-blue-500 blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-500 blur-3xl opacity-20 bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10"
      >

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >

            {/* glow border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-72 rounded-xl border-4 border-white dark:border-slate-800 shadow-2xl"
            />

          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* title */}
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I am a passionate <span className="text-blue-500 font-semibold">
            Full Stack Developer</span> skilled in React, JavaScript, Java and modern
            web technologies. I enjoy building scalable web applications and
            solving real-world problems through clean and efficient code.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 leading-relaxed">
            Currently I am focusing on improving my skills in full-stack
            development, building real-world projects, and preparing for
            software engineering roles.
          </p>

          {/* skill tags */}
          <div className="flex flex-wrap gap-3 mt-6">

            {["React","JavaScript","Java","Spring Boot","MySQL","Tailwind"].map((skill)=>(
              
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full
                bg-blue-100 text-blue-600
                dark:bg-slate-800 dark:text-blue-400"
              >
                {skill}
              </span>

            ))}

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg p-5 rounded-xl text-center">

              <h3 className="text-2xl font-bold text-blue-500">
                10+
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Technologies
              </p>

            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg p-5 rounded-xl text-center">

              <h3 className="text-2xl font-bold text-purple-500">
                5+
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Projects
              </p>

            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg p-5 rounded-xl text-center">

              <h3 className="text-2xl font-bold text-blue-500">
                2026
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Graduation
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;