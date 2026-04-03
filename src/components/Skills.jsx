import { motion } from "framer-motion";

const skillData = {
  Frontend: [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 80 },
  ],
  Backend: [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "REST API", level: 85 },
  ],
  Database: [
    { name: "MySQL", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85 },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {Object.entries(skillData).map(([category, skills], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            {/* CATEGORY TITLE */}
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              {category}
            </h3>

            {/* SKILLS */}
            {skills.map((s, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between text-sm mb-1">
                  <p>{s.name}</p>
                  <p>{s.level}%</p>
                </div>

                <div className="bg-gray-700 h-2 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;