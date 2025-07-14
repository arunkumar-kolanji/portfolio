import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // New icons from react-icons/fa

export default function Sidebar({ setCurrentPage, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", key: "home", icon: <FaHome size={20} /> },
    { name: "About", key: "about", icon: <FaInfoCircle size={20} /> },
    { name: "Projects", key: "projects", icon: <FaProjectDiagram size={20} /> },
    // { name: "Resume", key: "resume", icon: <FaGraduationCap size={20} /> },
    { name: "Contact", key: "contact", icon: <FaEnvelope size={20} /> },
  ];

  return (
    <>
      <div
        className={`fixed left-0 h-full w-64 bg-[#d2f2c9] text-black transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 transition-transform duration-300 ease-in-out `}
      >
        <div className="p-5 flex items-center justify-between border-b border-black">
          <span className="text-xs sm:text-sm font-bold">Portfolio</span>{" "}
          <button
            className="md:hidden text-black hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="mt-10 px-3">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setCurrentPage(item.key);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-6 py-3 mt-2 rounded-lg transition ${
                currentPage === item.key
                  ? "bg-black text-white font-semibold shadow-lg"
                  : "hover:bg-blue-100"
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-4 text-xs sm:text-xs">{item.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 bg-[#d2f2c9] text-black p-2 rounded-md z-50"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={15} />
        </button>
      )}
    </>
  );
}
