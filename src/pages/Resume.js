import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCogs,
  FaCertificate,
  FaDownload,
} from "react-icons/fa";

export default function Resume() {
  const resumeData = {
    name: "Pandiyan Muthusamy",
    title: "Fresher | MERN Stack Developer",
    summary:
      "Enthusiastic MERN Stack Developer with a passion for creating dynamic and user-friendly web applications, leveraging modern technologies for scalable solutions.",
    education: [
      {
        degree: "Advanced Course (MERN Stack)",
        institution: "Besant Technology",
        year: "2024 - 2025",
      },
      {
        degree: "B.Tech in Information Technology",
        institution: "Govt College of Technology",
        year: "2020 - 2023",
        percentage: "CGPA : 7.1",
      },
    ],
    projects: [
      {
        name: "E-Commerce Website",
        description:
          "Developed a full-fledged e-commerce platform with authentication, cart functionality, and payment integration.",
        tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      },
      {
        name: "Portfolio Website",
        description:
          "Designed and developed a personal portfolio to showcase skills and projects with animations.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
      },
      {
        name: "Guess the Number Game",
        description:
          "A Guessing Number Game challenges players to guess a randomly generated number with hints like 'Too high' or 'Too low.' The goal is to find the correct number in the fewest attempts.",
        tech: ["React", "Tailwind CSS"],
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    certifications: ["MERN Stack Course Completion @ Besant Technology "],
  };
  return (
    <div className="min-h-full bg-gray-50 flex flex-col items-center p-6">
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center pb-6 border-b border-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800">
            {resumeData.name}
          </h2>
          <h3 className="text-base sm:text-sm md:text-md text-gray-700">
            {resumeData.title}
          </h3>
          <p className="text-gray-700 mt-4 text-sm md:text-xs sm:text-xs">
            {resumeData.summary}
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row mt-6">
          <motion.div
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <section>
              <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>
              <ul className="mt-3 space-y-3">
                {resumeData.education.map((edu, index) => (
                  <li
                    key={index}
                    className="bg-white px-6 py-3 rounded-lg text-sm md:text-xs sm:text-xs"
                  >
                    <strong>{edu.degree}</strong> at {edu.institution} (
                    {edu.year}) <br /> {edu.percentage}
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>
          <motion.div
            className="md:w-1/2 p-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <section>
              <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaCogs /> Skills
              </h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-black px-4 py-2 rounded-lg text-xs md:text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <section className="mt-6">
              <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaCertificate /> Certifications
              </h3>
              <ul className="mt-3 space-y-2">
                {resumeData.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="bg-purple-50 text-black px-4 py-2 rounded-lg text-xs md:text-xs font-medium"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>
        </div>
        <motion.div
          className="mt-6 p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <section>
            <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaLaptopCode /> Projects
            </h3>
            <ul className="mt-3 space-y-3">
              {resumeData.projects.map((project, index) => (
                <motion.li
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-sm md:text-xs sm:text-xs font-semibold">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-xs sm:text-xs">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-black px-3 py-1 rounded-lg text-xs md:text-xs sm:text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </section>
        </motion.div>
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="/Pandiyan Muthusamy.pdf"
            download="Pandiyan Muthusamy.pdf"
            className="w-full sm:w-auto px-6 py-3 bg-[#d2f2c9] text-black text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition flex items-center justify-center space-x-2"
          >
            <FaDownload className="text-md sm:text-lg" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
