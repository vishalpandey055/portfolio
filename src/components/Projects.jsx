import { motion } from "framer-motion";
import hospital from "../assets/hospital.png";
import jobportal from "../assets/jobportal.png";

function Projects() {

  const projects = [
    {
      title: "Hospital Management System",
      description: "A full stack hospital system where admins manage doctors, patients and appointments.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      image: hospital,
      live: "#",
      github: "https://github.com/vishalpandey055/hospital-management-system"
    },
    {
      title: "Job Portal",
      description: "A job portal platform where recruiters post jobs and candidates apply for opportunities.",
      tech: ["React", "Spring Boot", "JWT"],
      image: jobportal,
      live: "#",
      github: "https://github.com/vishalpandey055/job-portal-project"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-slate-900 transition-colors duration-300">

      <h2 className="text-4xl font-bold text-center mb-14 
      bg-gradient-to-r from-blue-500 to-purple-600 
      bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >

            {/* Project Image */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200"
                >
                  GitHub
                </a>

              </div>

            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-blue-100 text-blue-600 
                    dark:bg-slate-700 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;