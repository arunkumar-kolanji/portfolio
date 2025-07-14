import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home({ setCurrentPage }) {
  const portfolioData = {
    name: "Arun Kumar",
    title: (
      <span>
        Certified <FaCheckCircle className="inline text-green-500 text-2xl" />{" "}
        <span className="font-bold font-sriracha">Frontend</span> Developer{" "}
      </span>
    ),
    bio: "I create scalable web applications and love working with modern technologies.",
    image: require("../img/photo-1.jpg"), // 🖼️ Updated to use local img folder
    socialLinks: {
      github: "https://github.com/arunkumar-kolanji",
      linkedin: "https://www.linkedin.com/in/arun-kumar-23a049213/",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center h-full w-full px-6 text-center bg-gray-50"
    >
      {/* 👇 Profile Image */}
      <motion.img
        src={portfolioData.image}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-green-300 shadow-lg mb-6 object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-5xl font-bold text-gray-900"
      >
        {portfolioData.name}
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2"
      >
        {portfolioData.title}
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mt-4"
      >
        {portfolioData.bio}
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex space-x-6 mt-6"
      >
        <a
          href={portfolioData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-700 text-lg font-semibold flex items-center space-x-2 transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-2xl" /> <span>GitHub</span>
        </a>
        <a
          href={portfolioData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500 text-lg font-semibold flex items-center space-x-2 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-2xl" /> <span>LinkedIn</span>
        </a>
      </motion.div>
    </motion.div>
  );
}
