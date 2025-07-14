import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";

export default function About() {
  const roadmap = [
    {
      stage: "10th Standard",
      institution: "Don Bosco Hr Sec School",
      year: "2015 - 2016",
      icon: <FaGraduationCap />,
      color: "from-blue-500 to-blue-700",
      percentage: "Percentage : 70.2%",
    },
    {
      stage: "12th Standard",
      institution: "Don Bosco Hr Sec School",
      year: "2017 - 2018",
      icon: <FaGraduationCap />,
      color: "from-blue-500 to-blue-700",
      percentage: "Percentage : 60.0%",
    },
    {
      stage: "Diploma in Civil Engineering",
      institution: "MRK Polytechnic College",
      year: "2018 - 2020",
      icon: <FaBook />,
      color: "from-purple-500 to-purple-700",
      percentage: "Percentage : 92.27%",
      title: "Knowledge & Skills",
      points: {
        line1:
          "Focuses on design, construction, and maintenance of infrastructure.",
        line2: "Covers subjects like surveying, structural engineering, construction materials, and CAD.",
        line3:
          "Includes both classroom learning and practical field training.",
      },
    },
    {
      stage: "B.Tech in Information Technology",
      institution: "Govt College of Technology",
      year: "2020 - 2023",
      icon: <FaGraduationCap />,
      color: "from-indigo-500 to-indigo-700",
      title: "Knowledge & Skills",
      points: {
        line1: "Web Development - HTML, CSS, JavaScript, React.",
        line2: "Software Development Lifecycle (SDLC).",
        line3: "Database Management - SQL and NoSQL database handling.",
        line4:
          "Operating Systems - Basics of Windows, Linux, and system management.",
        line5:
          "Programming Fundamentals - Understanding of advanced programming concepts.",
      },
    },
    {
      stage: "MERN Stack Development",
      institution: "Skill Safari",
      year: "2024 - 2025",
      icon: <FaBook />,
      color: "from-yellow-500 to-yellow-700",
      title: "Knowledge & Skills",
      course: [
        {
          heading: "JavaScript",
          body: "Advanced JavaScript concepts including ES6+ features and async programming.",
        },
        {
          heading: "React",
          body: "React skills and component-based development.",
        },
        {
          heading: "Node.js",
          body: "Backend development using Express and Node.js.",
        },
        {
          heading: "MongoDB",
          body: "Database management and CRUD operations.",
        },
        {
          heading: "Tailwind CSS",
          body: "Utility-first CSS framework for designing modern UIs.",
        },
        {
          heading: "Full-Stack Projects",
          body: "Building real-world applications using MERN stack.",
        },
      ],
    },
    {
      stage: "Work",
      institution: "Dreams Technologies",
      year: "2024 - 2025",
      icon: <FaBriefcase />,
      color: "from-red-500 to-red-700",
      title: "Responsibilities",
      points: {
        line1: "Developed and maintained responsive user interfaces using HTML5, CSS3, and JavaScript",
        line2: "Implemented crossbrowser compatibility for websites and web applications",
        line3: "Optimized website performance using techniques such as code minification, image compression, and caching.",
        line4: "Worked with designers and UX professionals to create usercentric and visually appealing designs.",
        line5: "Utilized version control systems such as Git for code collaboration and maintenance.",
        line6: "Maintain accurate records of calls, sales, and customer details.",
        line7: "Created interactive elements using JavaScript libraries such as jQuery, React.",
        line8: "Performed unit testing and implemented automated testing frameworks.",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6 py-10 bg-gray-50 text-center overflow-x-hidden">
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Journey
      </motion.h1>
      <motion.p
        className="text-xs sm:text-xs md:text-sm max-w-2xl mt-4 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A roadmap of my educational and professional milestones.
      </motion.p>
      <div className="mt-10 w-full max-w-4xl relative container mx-auto">
        <div className="relative flex flex-col items-center space-y-12">
          {roadmap.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-center justify-center w-full gap-y-6 md:gap-y-0 md:space-x-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-black rounded-full shadow-xl mx-4 md:mx-12"
                style={{
                  background: `linear-gradient(to right, ${step.color})`,
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                whileHover={{ scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                {step.icon}
              </motion.div>
              <motion.div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/20 backdrop-blur-lg p-4 sm:p-5 rounded-2xl border border-gray-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                  {step.stage}
                </h4>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                  {step.institution}
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                  {step.year}
                </p>
                {step.percentage && (
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                    {step.percentage}
                  </p>
                )}
                {step.title && (
                  <p className="text-left text-xs sm:text-xs md:text-sm text-gray-800 font-bold mt-2">
                    {step.title}
                  </p>
                )}
                {step.points && (
                  <ul className="text-left text-xs sm:text-xs md:text-sm text-gray-600 list-disc list-inside mt-2 mr-5">
                    {Object.values(step.points).map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                )}
                {step.course && (
                  <ul className="text-left text-xs sm:text-xs md:text-sm text-gray-600 list-disc list-inside mt-2 mr-5">
                    {step.course.map((item, index) => (
                      <li key={index}>
                        <strong>{item.heading}: </strong>
                        {item.body}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
