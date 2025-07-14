import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = {
    phone: "+91 770 843 3040",
    email: "arunkumar.kolanji22@gmail.com",
    address: "Peelamedu, Coimbatore, India",
    github: "https://github.com/arunkumar-kolanji",
    linkedin:
      "https://www.linkedin.com/in/arun-kumar-23a049213/",
    instagram: "https://www.instagram.com/arun_kolanji/",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-full flex flex-col items-center justify-center bg-gray-50 px-4 py-8 sm:py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
      >
        Contact Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-50 rounded-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg"
      >
        <div className="space-y-6 text-center">
          {[
            {
              icon: <FaPhoneAlt className="text-blue-600" />,
              text: contactInfo.phone,
            },
            {
              icon: <FaEnvelope className="text-red-500" />,
              text: contactInfo.email,
            },
            {
              icon: <FaMapMarkerAlt className="text-green-600" />,
              text: contactInfo.address,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="flex items-center justify-center space-x-3"
            >
              <span className="text-sm sm:text-base md:text-lg">
                {item.icon}
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                {item.text}
              </p>
            </motion.div>
          ))}
          <div className="flex justify-center space-x-6 mt-6">
            {[
              {
                url: contactInfo.github,
                icon: <FaGithub />,
                color: "text-gray-900 hover:text-gray-600",
              },
              {
                url: contactInfo.linkedin,
                icon: <FaLinkedin />,
                color: "text-blue-600 hover:text-blue-400",
              },
              {
                url: contactInfo.instagram,
                icon: <FaInstagram />,
                color: "text-pink-600 hover:text-pink-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-sm sm:text-base md:text-lg transition`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
      <footer className="w-full text-center mt-44 text-xs sm:text-sm md:text-base text-gray-600">
        <p>&copy; Arun Kumar | Frontend Developer @ 2024</p>
      </footer>
    </motion.div>
  );
}
