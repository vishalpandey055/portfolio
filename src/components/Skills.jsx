import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS" },
    { icon: <SiJavascript size={40} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact size={40} className="text-cyan-400" />, name: "React" },
    { icon: <SiTailwindcss size={40} className="text-sky-400" />, name: "Tailwind" },
    { icon: <FaJava size={40} className="text-red-500" />, name: "Java" },
    { icon: <SiMysql size={40} className="text-blue-600" />, name: "MySQL" },
    { icon: <SiSpringboot size={40} className="text-green-600" />, name: "Spring Boot" },
    { icon: <FaGitAlt size={40} className="text-orange-600" />, name: "Git" },
    { icon: <FaGithub size={40} className="text-gray-700 dark:text-white" />, name: "GitHub" },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-blue-500 blur-3xl opacity-20 top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500 blur-3xl opacity-20 bottom-20 right-10"></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-14 
      bg-gradient-to-r from-blue-500 to-purple-600 
      bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto px-6 relative z-10">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md
            p-6 rounded-xl shadow-lg flex flex-col items-center gap-3
            hover:shadow-2xl transition"
          >

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-20 blur-xl transition"></div>

            {skill.icon}

            <p className="text-gray-700 dark:text-gray-200 font-medium">
              {skill.name}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;