import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "Hospital Appointment System",
      desc: "Full-stack system with authentication, doctor management, and appointment booking.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/vishalpandey055/hospital-management-system.git",
      live: "#",
      featured: true,
    },
    {
      title: "Job Portal Website",
      desc: "Users can apply for jobs while recruiters post and manage listings.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Food Delivery App",
      desc: "Complete food ordering system with cart, payment, and tracking.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Banking Management System",
      desc: "Secure system for managing accounts, transactions, and authentication.",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Face Recognition System",
      desc: "Face detection & recognition using OpenCV and Java.",
      tech: ["Java", "OpenCV"],
      github: "#",
      live: "#",
    },
    {
      title: "Notes App",
      desc: "CRUD notes app with authentication and persistent storage.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-24 px-6">
      
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl mb-16 text-center font-bold">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg group hover:scale-105 transition duration-300 ${
              project.featured ? "border-cyan-400/40" : ""
            }`}
          >
            {/* FEATURED TAG */}
            {project.featured && (
              <span className="absolute top-3 right-3 text-xs bg-cyan-500 text-black px-2 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
              {project.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.desc}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-3 mb-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10 hover:bg-cyan-500 hover:text-black transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;