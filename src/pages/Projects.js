import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Formsy",
    description:
      "Drag and Drop Form Creator is a user-friendly tool that allows you to easily build custom forms without writing any code. Simply drag form elements like text fields, checkboxes, dropdowns, and buttons into place to create contact forms, surveys, registrations, and more. Ideal for beginners and professionals alike, it offers real-time previews, customizable styles, and seamless integrations.",
    tech: ["HTML5", "CSS3", "Javascript"],
  },
  {
    title: "Portfolio Website",
    description: "This portfolio showcases my skills, work experience, educational background, and detailed roles and responsibilities across various projects and positions. It reflects my practical knowledge, technical expertise, and commitment to delivering quality work. Each section is designed to provide a clear understanding of my professional journey and capabilities in the field.",
    tech: ["HTML", "Tailwind CSS", "Javascripts"],
  },
  {
    title: "Worked in Company Projects",
    description: "I have contributed to a wide range of company projects across different domains, gaining hands-on experience in planning, execution, and team collaboration. My involvement in these projects has strengthened my technical skills, problem-solving abilities, and adaptability in dynamic work environments.",
    tech: ["HTML5", "CSS3", "Bootstrap", "SASS", "Tailwind CSS", "JavaScript", "ReactJs"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col items-center p-6">
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-blue-50 text-black px-3 py-1 rounded-full text-xs sm:text-xs md:text-sm"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
