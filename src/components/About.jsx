import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Git",
    "REST API",
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6">
      
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold tracking-wide">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">

        {/* EDUCATION */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition"
        >
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">
            🎓 Bachelor's Degree, Computer Science
          </h3>

          <p className="text-gray-400 mb-3">
            Dhanalakshmi Srinivasan College of Engineering & Technology
          </p>

          <span className="bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm">
            2021 – 2025
          </span>

          <ul className="list-disc ml-5 mt-4 text-gray-300 space-y-2">
            <li>Pursuing Computer Science Engineering</li>
            <li>Focused on Java Full Stack Development</li>
            <li>Built real-world apps using React & Spring Boot</li>
          </ul>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-green-500/20 transition"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-5">
            💻 Technical Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 px-4 py-1 rounded-full text-sm border border-white/10 hover:bg-green-500 hover:text-black transition cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* STRENGTHS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-pink-500/20 transition"
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">
            🚀 Strengths
          </h3>

          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Strong problem-solving mindset</li>
            <li>Quick learner & adaptable</li>
            <li>Write clean, scalable code</li>
            <li>Good team collaboration skills</li>
          </ul>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
            I am a passionate{" "}
            <span className="text-white font-semibold">
              Java Full Stack Developer
            </span>{" "}
            who builds scalable and responsive web applications.
            I specialize in{" "}
            <span className="text-cyan-400">React (Frontend)</span> and{" "}
            <span className="text-green-400">Spring Boot (Backend)</span>.
            <br /><br />
            I enjoy solving real-world problems and continuously improving my
            skills by building impactful projects. My goal is to join a
            dynamic team where I can grow and contribute as a software engineer.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;